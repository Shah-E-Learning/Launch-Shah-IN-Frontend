'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { OTPInput, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      autoFocus
      ref={ref}
      containerClassName={cn('flex items-center gap-2 has-[:disabled]:opacity-50 ', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
)
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center', className)} {...props} />
)
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        'flex md:h-14 h-9 md:w-14 w-9 items-center rounded-lg justify-center border-input md:text-2xl transition-all bg-[#f0f9f9] font-semibold',
        isActive && 'z-10 ring-1 ring-mainColor dark:ring-neutral-300',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute  flex items-center justify-center'>
          <div className='h-4 w-px bg-neutral-950 duration-1000 dark:bg-neutral-50' />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ ...props }, ref) => (
    <div ref={ref} role='separator' {...props}>
      <Dot />
    </div>
  )
)
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
