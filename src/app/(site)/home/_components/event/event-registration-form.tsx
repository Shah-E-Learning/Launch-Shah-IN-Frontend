'use client'

// ** React and Core Library Imports
import { useEffect, useState } from 'react'

// ** Next.js and Internationalization Imports

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'

// ** UI Library Imports
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { FloatingLabelInput } from '@/components/ui/floating-input.tsx'
import { FloatingSelect } from '@/components/ui/floating-label-select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

// ** Custom Component Imports
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Application Service, Constants, and Type Imports
import { useMediaQuery } from '@hooks/use-media'

// ** Third-Party Library Imports
import { Button } from '@components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRazorpay } from '@hooks/use-razorpay'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'

// ** Application Utility Functions

// ** Assets Imports

const formSchema = z.object({
  name: z.string({ message: 'Please enter your name' }).min(2, 'Name must be at least 2 characters'),
  email: z.string({ message: 'Please enter your email' }).email({ message: 'Please enter a valid email' }),
  phone: z.string({ message: 'Please enter your phone number' }).min(10, 'Phone number must be at least 10 digits'),

  gender: z.string().min(1, 'Please select a gender'),
  participant_category: z.string().min(1, 'Please select a participant category'),

  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms.'
  })
})

export interface UploadedFile {
  id: string
  file: File
  type: 'image' | 'pdf' | 'excel' | 'document' | 'other'
  error?: string
}

export default function EventRegistration() {
  const smBreakpoint = useMediaQuery('(max-width: 1200px)')
  const xsBreakpoint = useMediaQuery('(max-width: 767px)')
  const [data, setData] = useState<any>({})
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const { initiatePayment } = useRazorpay()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      participant_category: '',
      consent: false
    }
  })

  const onSubmit = async (values: any) => {
    try {
      const baseAmount = 300
      const category = values.participant_category

      if (!baseAmount) {
        toast.error('Invalid participant category')

        return
      }

      const totalAmount = 300

      const body = {
        ...values,
        total_price: totalAmount
      }

      const orderRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payment-event-register`, body)

      if (!orderRes?.data?.data?.razorpay_order_id) {
        toast.error('Failed to create payment order')

        return
      }

      await initiatePayment({
        amount: totalAmount * 100,
        orderId: orderRes.data.data.razorpay_order_id,
        name: 'Event Registration',
        description: `Registration Fee - ${category}`,
        prefill: {
          name: values.name,
          email: values.email,
          contact: values.phone
        },
        onSuccess: async paymentResponse => {
          try {
            const finalPayload = {
              razor_pay_payment_id: paymentResponse.razorpay_payment_id
            }

            await axios.patch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/event-registration-update-payment-status/${orderRes.data.data.order_id}`,
              finalPayload
            )

            toast.success('Registration successful 🎉')
            setShowSuccessDialog(true)
            form.reset()
          } catch (err) {
            console.error(err)
            toast.error('Payment successful but submission failed')
          }
        },
        onFailure: () => {
          toast.error('Payment failed or cancelled')
        }
      })
    } catch (error: any) {
      console.error(error)
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }
  }

  const GetSettingData = async () => {
    const response: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/front-end/general-setting`)

    setData(response.data)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    GetSettingData()
  }, [])

  const extraDetails = data?.data?.find((data: any) => {
    return data?.key === 'event_details'
  })

  const addressOne = data?.data?.find((data: any) => {
    return data?.key === 'address'
  })

  const emailOne = data?.data?.find((data: any) => {
    return data?.key === 'email'
  })

  const emailTwo = data?.data?.find((data: any) => {
    return data?.key === 'alt_email'
  })

  const mobileOne = data?.data?.find((data: any) => {
    return data?.key === 'phone_number'
  })

  const mobileTwo = data?.data?.find((data: any) => {
    return data?.key === 'alt_phone_number'
  })

  const genderData = [
    {
      key: 'male',
      name: 'Male'
    },
    {
      key: 'female',
      name: 'Female'
    }
  ]

  const participantCategory = [
    {
      key: 'student',
      name: 'Student'
    },
    {
      key: 'homeopath',
      name: 'Homeopath'
    }
  ]

  return (
    <div id='event-registration-form' className='relative mt-8 min-h-screen w-full overflow-hidden'>
      <div className='absolute inset-0 h-1/2 w-full bg-white' />
      <div className='absolute bottom-0 h-1/2 w-full bg-[#E5F9F9]' />
      <div className='absolute bottom-0 h-1/6 w-full bg-mainColor' />

      <ScreenWrapper className='container relative mx-auto px-4'>
        <div className='flex min-h-[calc(100vh-200px)] items-center justify-center'>
          <div className='z-10 mb-5 w-full rounded-3xl bg-mainColor p-8 text-white lg:mb-96'>
            <h2 className='main-title mb-24 text-center text-2xl font-bold text-white'>Seminar Registration</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                  <FormField
                    control={form.control}
                    name='participant_category'
                    render={({ field }) => (
                      <FormItem className=''>
                        <FloatingSelect
                          options={participantCategory?.map(item => ({
                            value: item.name,
                            label: item.name
                          }))}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          label='Participant Category'
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          {...field}
                          labelSize={`${xsBreakpoint ? '!text-2xl ' : '!text-4xl '} !text-white/30 !font-normal`}
                        />
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='gender'
                    render={({ field }) => (
                      <FormItem className=''>
                        <FloatingSelect
                          options={genderData?.map(item => ({
                            value: item.key,
                            label: item.name
                          }))}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          label='Gender'
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          {...field}
                          labelSize={`${xsBreakpoint ? '!text-2xl ' : '!text-4xl '} !text-white/30 !font-normal`}
                        />
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            label='Full Name'
                            {...field}
                            className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                            labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                            labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                          />
                        </FormControl>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem className='pb-2 lg:pb-4'>
                        <FormControl>
                          <FloatingLabelInput
                            label='WhatsApp Contact Number'
                            {...field}
                            className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                            labelBgColor='bg-mainColor  text-secondaryColor/30'
                            maxLength={10}
                            onInput={e => {
                              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')
                            }}
                            labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                          />
                        </FormControl>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            label='Email Address'
                            {...field}
                            className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                            labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                            labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                          />
                        </FormControl>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name='number_of_attendees'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            label='Total Number of Attendees'
                            {...field}
                            className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                            labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                            labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                          />
                        </FormControl>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <FormField
                  control={form.control}
                  name='consent'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-baseline space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          id='consent'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='flex shrink-0 border-white data-[state=checked]:bg-teal-500 data-[state=checked]:text-white'
                        />
                      </FormControl>
                      <div className='flex flex-col'>
                        <div className='leading-none'>
                          <FormLabel className='cursor-pointer text-2xl font-medium text-white' htmlFor='consent'>
                            I consent to the use and storage of my data as outlined in the Samuel Hahnemann Academy for
                            Homeopathy - SHAH privacy policy and data protection statement.
                          </FormLabel>
                        </div>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </div>
                    </FormItem>
                  )}
                />

                <div className='flex justify-center'>
                  <CustomButton
                    type='submit'
                    classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white'
                  >
                    Register Now
                  </CustomButton>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className='relative z-30 w-full gap-4 px-4 lg:-mt-64'>
          <Card className='border-0 bg-white shadow-lg'>
            <CardContent className='flex flex-col items-center gap-4 space-y-2 rounded-lg border border-secondaryColor bg-secondaryColor/20 p-6 text-center shadow-lg group-hover:bg-secondaryColor/30'>
              <h1 className='main-description font-bold text-mainColor lg:text-5xl !text-left !md:text-justify'>
                Exclusive Privileges for Seminar Delegates
              </h1>

              <Accordion type='multiple' className='w-full max-w-3xl'>
                <AccordionItem value='item-1' className='border-b border-secondaryColor/40'>
                  <AccordionTrigger className='!text-left !md:text-justify main-description-small flex justify-between px-2 font-semibold transition-all duration-300 hover:no-underline data-[state=open]:bg-mainColor/5 data-[state=open]:text-mainColor [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180'>
                    1. A Non-Commercial Academic Initiative
                  </AccordionTrigger>

                  <AccordionContent className='pb-4'>
                    <div className='main-description-smallest px-8 py-2 font-normal'>
                      The excess registration amount will be refunded upon completion of the organizing
                      responsibilities.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2' className='border-b border-secondaryColor/40'>
                  <AccordionTrigger className='main-description-small flex justify-between px-2 font-semibold transition-all duration-300 hover:no-underline data-[state=open]:bg-mainColor/5 data-[state=open]:text-mainColor [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180'>
                    2. Exclusive Free E-Access
                  </AccordionTrigger>

                  <AccordionContent className='pb-4'>
                    <div className='main-description-smallest px-8 py-2 font-normal'>
                      <ul className='ms-5 list-disc space-y-1'>
                        <li>
                          <strong>Live Learning:</strong> 10 hours of immersive learning from SHAH commencement.
                        </li>
                        <li>
                          <strong>Recorded Learning:</strong> 20 hours of Foundation Course lectures in Samuel
                          Hahnemann’s Applied Homeopathy.
                        </li>
                        <li>
                          <strong>Free Aphorisms:</strong> Digital access to Organon of Medicine (5th Edition).
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3' className='border-b border-secondaryColor/40'>
                  <AccordionTrigger className='main-description-small flex justify-between px-2 font-semibold transition-all duration-300 hover:no-underline data-[state=open]:bg-mainColor/5 data-[state=open]:text-mainColor [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180'>
                    3. Official Online Certificate
                  </AccordionTrigger>

                  <AccordionContent className='pb-4'>
                    <div className='main-description-smallest px-8 py-2 font-normal'>
                      Earn an academic distinction certificate from the Samuel Hahnemann Academy for Homeopathy (SHAH).
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>

            {(addressOne?.value || mobileOne?.value || mobileTwo?.value || emailOne?.value || emailTwo?.value) && (
              <CardContent className='flex flex-col items-center justify-evenly gap-4 space-y-2 p-6 lg:flex-row'>
                {addressOne?.value && (
                  <>
                    <div className='min-w-[250px] max-w-[400px] text-center'>
                      <h3 className='main-description !text-center font-bold text-mainColor lg:text-5xl'>
                        How to Reach Us
                      </h3>
                      <p className='main-description-small my-3 max-w-[300px] !text-center text-gray-600'>
                        {addressOne?.value}
                      </p>
                      <div className='flex justify-center'>
                        <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                          Get Direction
                        </CustomButton>
                      </div>
                    </div>

                    {!smBreakpoint && (
                      <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-mainColor`} />
                    )}
                  </>
                )}

                {(mobileOne?.value || mobileTwo?.value) && (
                  <>
                    <div className='min-w-[250px] max-w-[400px] text-center'>
                      <h3 className='main-description !text-center text-xl font-bold text-mainColor lg:text-5xl'>
                        Contact Us
                      </h3>
                      <p className='main-description-small my-3 !text-center text-gray-600'>
                        {mobileOne?.value}
                        <br />
                        {mobileTwo?.value}
                      </p>{' '}
                      <div className='flex justify-center'>
                        <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                          Call Us
                        </CustomButton>
                      </div>
                    </div>

                    {!smBreakpoint && (
                      <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-mainColor`} />
                    )}
                  </>
                )}

                {(emailOne?.value || emailTwo?.value) && (
                  <div className='min-w-[250px] max-w-[400px] text-center'>
                    <h3 className='main-description !text-center text-xl font-bold text-mainColor lg:text-5xl'>Fees</h3>
                    <p className='main-description-small my-3 truncate !text-center text-gray-600'>
                      <span className=''>{extraDetails?.value}</span>
                      <br />
                      (Breakfast + Lunch + High tea)
                    </p>{' '}
                    <div className='flex justify-center'>
                      <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                        Register Now
                      </CustomButton>
                    </div>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        </div>
      </ScreenWrapper>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className='max-w-xl rounded-2xl bg-white text-center'>
          <div className='flex justify-center'>
            <CheckCircle2 className='h-24 w-24 text-emerald-500' strokeWidth={1.5} />
          </div>

          <DialogTitle className='text-3xl font-bold text-mainColor'>
            Thank you for your Registration in
            <br />A National Pre-launch One Day Seminar
          </DialogTitle>

          <DialogDescription className='mt-4 space-y-2 text-lg text-gray-600'>
            <p className='font-semibold'>Your message has been received and we will be connecting you shortly.</p>
            <p>
              {/* Please check "SPAM" for the same if you haven't received it in 72 hours. Do take that email in to your
              Inbox for easy future communications.. */}
            </p>
          </DialogDescription>

          <div className='mt-6 flex justify-center'>
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className='border bg-secondaryColor/20 text-lg hover:bg-secondaryColor'
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
