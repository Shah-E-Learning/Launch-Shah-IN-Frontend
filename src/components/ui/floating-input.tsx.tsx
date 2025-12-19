import * as React from 'react'

import { cn } from '@/lib/utils'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <Input placeholder=' ' className={cn('peer', className)} ref={ref} {...props} />
})
FloatingInput.displayName = 'FloatingInput'

interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  bgColor?: string
  labelSize?: string
}

// peer-focus:-translate-y-5
// peer-focus:px-2

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, FloatingLabelProps>(
  ({ className, bgColor = 'bg-lightBg text-mainColor', labelSize = 'text-xl md:text-2xl pb-0', ...props }, ref) => {
    return (
      <Label
        className={cn(
          `peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-0 z-10 origin-left -translate-y-4 scale-75 transform cursor-pointer! px-5 ${bgColor} ${labelSize} PY-5 dark:bg-background cursor-text px-0 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FloatingLabel.displayName = 'FloatingLabel'

type FloatingLabelInputProps = InputProps & { label?: string; labelBgColor?: string; labelSize?: string }

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, labelBgColor, labelSize, ...props }, ref) => {
  return (
    <div className='relative'>
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id} bgColor={labelBgColor} labelSize={labelSize}>
        {label}
      </FloatingLabel>
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingInput, FloatingLabel, FloatingLabelInput }
