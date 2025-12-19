import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, onChange, type, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/^\s+/, '') // Remove leading whitespace
      onChange?.({ ...e, target: { ...e.target, value: newValue } } as React.ChangeEvent<HTMLInputElement>)
    }

    return (
      <input
        type={type}
        className={cn(
          'border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-14 w-full rounded-md border px-2 py-2 text-xl font-medium file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-2xl',
          className
        )}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export { Input }
