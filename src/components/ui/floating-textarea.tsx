import * as React from 'react'

import { cn } from '@/lib/utils'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return <Textarea placeholder=' ' className={cn('peer', className)} ref={ref} {...props} />
})
FloatingTextarea.displayName = 'FloatingTextarea'

interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  bgColor?: string
  labelSize?: string
  className?: string
}

// peer-focus:-translate-y-5
// peer-focus:px-2

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, FloatingLabelProps>(
  ({ className, bgColor = 'bg-lightBg text-mainColor', labelSize = 'text-xl md:text-2xl', ...props }, ref) => {
    return (
      <Label
        className={cn(
          `peer-focus:secondary peer-focus:dark:secondary bg-background absolute start-2 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform !cursor-pointer px-0 ${labelSize} ${bgColor} dark:bg-background cursor-text duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FloatingLabel.displayName = 'FloatingLabel'

type FloatingLabelTextareaProps = TextareaProps & { label?: string; labelBgColor?: string; labelSize?: string }

const FloatingLabelTextarea = React.forwardRef<
  React.ElementRef<typeof FloatingTextarea>,
  React.PropsWithoutRef<FloatingLabelTextareaProps>
>(({ id, label, labelBgColor, labelSize, ...props }, ref) => {
  return (
    <div className='relative'>
      <FloatingTextarea ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id} bgColor={labelBgColor} labelSize={labelSize}>
        {label}
      </FloatingLabel>
    </div>
  )
})
FloatingLabelTextarea.displayName = 'FloatingLabelTextarea'

export { FloatingLabelTextarea, FloatingTextarea, FloatingLabel }
