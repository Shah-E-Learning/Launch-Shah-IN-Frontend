'use client'

import { siteConfig } from '@/config/site'
import { useCallback } from 'react'
import { toast } from 'sonner'

interface RazorpayOptions {
  amount: number
  currency?: string
  name?: string
  description?: string
  orderId?: string
  prefill?: {
    name?: string
    email?: string
    contact?: string
    method?: 'card' | 'netbanking' | 'wallet' | 'emi' | 'upi'
  }
  theme?: {
    color?: string
  }
  paymentMethod?: 'card' | 'netbanking' | 'wallet' | 'emi' | 'upi'

  onSuccess?: (response: any, razorpayInstance: any) => void

  onFailure?: (error: any, razorpayInstance: any) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export function useRazorpay() {
  const loadRazorpay = useCallback(() => {
    return new Promise(resolve => {
      if (window.Razorpay) {
        resolve(true)

        return
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => {
        console.error('Failed to load Razorpay SDK')
        toast.error('Failed to load payment gateway. Please try again later.')
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }, [])

  const initiatePayment = useCallback(
    async (options: RazorpayOptions) => {
      const isLoaded = await loadRazorpay()

      if (!isLoaded) {
        console.error('Razorpay SDK failed to load')
        toast.error('Failed to load payment gateway. Please try again later.')

        return
      }

      const razorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: options.amount,
        currency: options.currency || 'INR',
        name: siteConfig.name,
        retry: { enabled: false },
        description: options.description || 'A National Pre-launch One Day Seminar',
        order_id: options.orderId,
        prefill: options.prefill || {},
        theme: {
          color: options.theme?.color || '#0FC2C0'
        },
        handler: (response: any, razorpayInstance: any) => {
          try {
            options.onSuccess?.(response, razorpayInstance)
            razorpayInstance.close() // Close the modal on success
          } catch (err) {
            console.error('Error in success handler:', err)

            // toast.error('An error occurred during payment processing.')
            razorpayInstance.close() // Ensure modal closes even on error
          }
        }
      }

      try {
        const razorpay = new window.Razorpay(razorpayOptions)
        razorpay.open()

        razorpay.on('payment.failed', (response: any) => {
          try {
            options.onFailure?.(response, razorpay)
            razorpay.close() // Close the modal on failure
          } catch (err) {
            console.error('Error in failure handler:', err)
            toast.error('An error occurred during payment failure handling.')
            razorpay.close() // Ensure modal closes even on error
          }
        })

        // Handle modal dismissal (e.g., user clicks outside or cancels)
        razorpay.on('payment.cancel', () => {
          razorpay.close()
          toast.info('Payment cancelled by user.')
        })
      } catch (err) {
        console.error('Error initializing Razorpay:', err)
        toast.error('Failed to initialize payment. Please try again.')
      }
    },
    [loadRazorpay]
  )

  return { initiatePayment }
}
