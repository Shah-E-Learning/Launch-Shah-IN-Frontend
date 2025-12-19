import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

import Arrow from '../arrow'
import Plus from '../plus'

const sizeStyles = {
  xs: {
    button: 'h-7 px-1 text-xs',
    arrow_width: 20,
    arrow_height: 20,
    text: 'text-base'
  },
  sm: {
    button: 'h-10 px-6 text-sm',
    arrow_width: 25,
    arrow_height: 25,
    text: 'text-lg'
  },
  md: {
    button: 'h-12 px-8 text-base',
    arrow_width: 32,
    arrow_height: 32,
    text: 'text-2xl'
  },
  lg: {
    button: 'h-12 px-10 text-lg',
    arrow_width: 38,
    arrow_height: 38,
    text: 'text-3xl'
  },
  xl: {
    button: 'h-14 px-8 text-xl',
    arrow_width: 42,
    arrow_height: 42,
    text: 'text-3xl'
  },
  default: {
    button: 'h-10 px-3 text-sm sm:h-12 sm:px-10 sm:text-lg md:h-12 md:px-8 md:text-base lg:h-14 lg:px-8 lg:text-xl',
    arrow_width: 'w-7 sm:w-8 md:w-9 lg:w-11',
    arrow_height: 'h-7 sm:h-8 md:h-9 lg:h-11',
    text: 'text-lg sm:text-3xl'
  }
}

type Size = keyof typeof sizeStyles

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  classNameExtra?: string
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  plusIcon?: boolean
  size?: Size
  defaultSize?: boolean
  variant?: 'primary' | 'secondary' | 'default'
  showArrow?: boolean
  arrowClassName?: string
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      classNameExtra,
      type,
      children,
      disabled,
      'aria-label': ariaLabel,
      loading = false,
      plusIcon = false,
      size = 'md',
      defaultSize = true,
      variant = 'primary',
      showArrow = true,
      arrowClassName,
      ...props
    },
    ref
  ) => {
    const selectedSize = defaultSize ? 'default' : size

    return (
      <>
        <div className={cn('relative flex items-center gap-0 group w-max')}>
          <button
            aria-label={ariaLabel}
            className={cn(
              'flex z-10 items-center justify-center rounded-full font-medium transition-all',
              variant === 'primary' && 'bg-buttonColor text-white hover:bg-mainColor',
              variant === 'secondary' && 'bg-secondaryColor text-white hover:bg-white/30',
              variant === 'default' && 'bg-white text-mainColor hover:bg-white/90',
              'lg:-mr-8 lg:group-hover:mr-0',
              sizeStyles[selectedSize].button,
              disabled && 'cursor-not-allowed opacity-50',
              className,
              classNameExtra
            )}
            disabled={disabled || loading}
            ref={ref}
            type={type}
            {...props}
          >
            <p className={cn('leading-none pb-1 lg:pb-1.5', sizeStyles[selectedSize].text)}>{children}</p>
          </button>

          {showArrow && !disabled && (
            <button
              aria-label={ariaLabel}
              className={cn(
                'flex cursor-pointer items-center justify-center rounded-full p-1 bg-secondaryColor transition-all duration-300  lg:-translate-x-full lg:rotate-90 lg:opacity-0 group-hover:opacity-100 group-hover:rotate-0  group-hover:translate-x-0',
                disabled && 'cursor-not-allowed opacity-50',
                className,
                arrowClassName
              )}
              disabled={disabled || loading}
              type={type}
              {...props}
            >
              {plusIcon ? (
                <Plus height={sizeStyles[selectedSize].arrow_height} width={sizeStyles[selectedSize].arrow_width} />
              ) : (
                <Arrow height={sizeStyles[selectedSize].arrow_height} width={sizeStyles[selectedSize].arrow_width} />
              )}
            </button>
          )}
        </div>
      </>
    )
  }
)

export default CustomButton

// import { ButtonHTMLAttributes, forwardRef } from 'react'

// import { cn } from '@/lib/utils'

// import Arrow from '../arrow'

// const sizeStyles = {
//   xs: {
//     button: 'h-7 px-4 text-xs',
//     arrow_width: 20,
//     arrow_height: 20,
//     text: 'text-base'
//   },
//   sm: {
//     button: 'h-10 px-6 text-sm',
//     arrow_width: 25,
//     arrow_height: 25,
//     text: 'text-lg'
//   },
//   md: {
//     button: 'h-12 px-8 text-base',
//     arrow_width: 32,
//     arrow_height: 32,
//     text: 'text-2xl'
//   },
//   lg: {
//     button: 'h-12 px-10 text-lg',
//     arrow_width: 38,
//     arrow_height: 38,
//     text: 'text-3xl'
//   },
//   xl: {
//     button: 'h-14 px-8 text-xl',
//     arrow_width: 42,
//     arrow_height: 42,
//     text: 'text-3xl'
//   },
//   default: {
//     button: 'h-10 px-6 text-sm sm:h-12 sm:px-10 sm:text-lg md:h-12 md:px-8 md:text-base lg:h-14 lg:px-8 lg:text-xl',
//     arrow_width: 'w-7 sm:w-8 md:w-9 lg:w-11',
//     arrow_height: 'h-7 sm:h-8 md:h-9 lg:h-11',
//     text: 'text-lg sm:text-3xl'
//   }
// }

// type Size = keyof typeof sizeStyles

// interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string
//   classNameExtra?: string
//   type?: 'button' | 'submit' | 'reset'
//   children: React.ReactNode
//   disabled?: boolean
//   loading?: boolean
//   size?: Size
//   defaultSize?: boolean
//   variant?: 'primary' | 'secondary'
//   showArrow?: boolean
//   arrowClassName?: string
// }

// const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
//   (
//     {
//       className,
//       classNameExtra,
//       type,
//       children,
//       disabled,
//       loading = false,
//       size = 'md',
//       defaultSize = true,
//       variant = 'primary',
//       showArrow = true,
//       arrowClassName,
//       ...props
//     },
//     ref
//   ) => {
//     const selectedSize = defaultSize ? 'default' : size

//     return (
//       <>
//         <div className={cn('relative  items-center gap-0 group w-max lg:hover:flex')}>
//           <button
//             className={cn(
//               'flex z-10 items-center justify-center rounded-full font-medium transition-all',
//               variant === 'primary' && 'bg-buttonColor text-white hover:bg-mainColor',
//               variant === 'secondary' && 'bg-secondaryColor text-white hover:bg-white/30',
//               sizeStyles[selectedSize].button,
//               disabled && 'cursor-not-allowed opacity-50',
//               className,
//               classNameExtra
//             )}
//             disabled={disabled || loading}
//             ref={ref}
//             type={type}
//             {...props}
//           >
//             <p className={cn('leading-none pb-1 lg:pb-1.5', sizeStyles[selectedSize].text)}>{children}</p>
//           </button>

//           {showArrow && !disabled && (
//             <button
//               className={cn(
//                 'group-hover:flex cursor-pointer items-center justify-center flex lg: rounded-full p-1 bg-secondaryColor transition-all duration-300  lg:-translate-x-full lg:rotate-90 lg:opacity-0 group-hover:opacity-100 group-hover:rotate-0  group-hover:translate-x-0',
//                 disabled && 'cursor-not-allowed opacity-50',
//                 className,
//                 arrowClassName
//               )}
//               disabled={disabled || loading}
//               type={type}
//               {...props}
//             >
//               <Arrow height={sizeStyles[selectedSize].arrow_height} width={sizeStyles[selectedSize].arrow_width} />
//             </button>
//           )}
//         </div>
//       </>
//     )
//   }
// )

// export default CustomButton
