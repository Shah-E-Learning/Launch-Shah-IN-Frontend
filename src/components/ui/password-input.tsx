// 'use client'

// import * as React from 'react'

// import { cn } from '@/lib/utils'

// import { Button } from '@/components/ui/button'
// import { Input, type InputProps } from '@/components/ui/input'

// import { EyeIcon, EyeOffIcon } from 'lucide-react'

// const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
//   const [showPassword, setShowPassword] = React.useState(false)
//   const disabled = props.value === '' || props.value === undefined || props.disabled

//   return (
//     <div className='relative'>
//       <Input
//         type={showPassword ? 'text' : 'password'}
//         className={cn('hide-password-toggle pr-10 text-xl ', className)}
//         ref={ref}
//         {...props}
//       />
//       <Button
//         type='button'
//         variant='ghost'
//         size='sm'
//         className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
//         onClick={() => setShowPassword(prev => !prev)}
//         disabled={disabled}
//       >
//         {showPassword && !disabled ? (
//           <EyeIcon className='h-4 w-4' aria-hidden='true' />
//         ) : (
//           <EyeOffIcon className='h-4 w-4' aria-hidden='true' />
//         )}
//         <span className='sr-only'>{showPassword ? 'Hide password' : 'Show password'}</span>
//       </Button>

//       {/* hides browsers password toggles */}
//       <style>{`
// 					.hide-password-toggle::-ms-reveal,
// 					.hide-password-toggle::-ms-clear {
// 						visibility: hidden;
// 						pointer-events: none;
// 						display: none;
// 					}
// 				`}</style>
//     </div>
//   )
// })
// PasswordInput.displayName = 'PasswordInput'

// export { PasswordInput }

'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Input, type InputProps } from '@/components/ui/input'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, onChange, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const disabled = props.value === '' || props.value === undefined || props.disabled

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/^\s+/, '') // Remove all whitespace
    onChange?.({ ...e, target: { ...e.target, value: newValue } } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className='relative'>
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('hide-password-toggle pr-10 text-xl md:text-2xl font-medium ', className)}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
      <Button
        type='button'
        variant='ghost'
        size='sm'
        className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
        onClick={() => setShowPassword(prev => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <EyeIcon className='!h-5 !w-5' aria-hidden='true' />
        ) : (
          <EyeOffIcon className='!h-5 !w-5' aria-hidden='true' />
        )}
        <span className='sr-only'>{showPassword ? 'Hide password' : 'Show password'}</span>
      </Button>

      {/* hides browsers password toggles */}
      <style>{`
        .hide-password-toggle::-ms-reveal,
        .hide-password-toggle::-ms-clear {
          visibility: hidden;
          pointer-events: none;
          display: none;
        }
      `}</style>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
