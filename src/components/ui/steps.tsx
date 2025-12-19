// 'use client'

// import * as React from 'react'

// import { cn } from '@/lib/utils'

// import { Check } from 'lucide-react'

// export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
//   steps: {
//     number: number
//     title: string
//   }[]
//   currentStep: number
// }

// export function Steps({ steps, currentStep, className, ...props }: StepsProps) {
//   return (
//     <div className={cn('w-full', className)} {...props}>
//       <div className='flex items-center justify-center'>
//         {steps.map((step, index) => (
//           <React.Fragment key={step.number}>
//             {/* Step Circle */}
//             <div className='relative'>
//               <div
//                 className={cn(
//                   'w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold',
//                   currentStep > step.number
//                     ? 'bg-primary border-primary text-primary-foreground'
//                     : currentStep === step.number
//                       ? 'border-primary text-primary'
//                       : 'border-muted text-muted-foreground'
//                 )}
//                 aria-current={currentStep === step.number ? 'step' : undefined}
//               >
//                 {currentStep > step.number ? <Check className='h-5 w-5' /> : <span>{step.number}</span>}
//               </div>
//               <span
//                 className={cn(
//                   'absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium',
//                   currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
//                 )}
//               >
//                 {step.title}
//               </span>
//             </div>
//             {/* Connector Line */}
//             {index < steps.length - 1 && (
//               <div
//                 className={cn('h-[2px] w-16 mx-2', currentStep > index + 1 ? 'bg-primary' : 'bg-muted')}
//                 role='presentation'
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { Check } from 'lucide-react'

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: {
    number: number
    title: string
  }[]
  currentStep: number
}

export function Steps({ steps, currentStep, className, ...props }: StepsProps) {
  return (
    <div className={cn('w-full ', className)} {...props}>
      <div className='flex lg:items-center items-baseline justify-center'>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div className=' '>
              <div className='flex gap-2 flex-col lg:flex-row items-center justify-center'>
                <div
                  className={cn(
                    'lg:w-10 lg:h-10 w-6 h-6 rounded-full border-2 flex items-center justify-center font-semibold lg:text-2xl main-description-small',
                    currentStep > step.number
                      ? 'bg-secondaryColor/30 border-mainColor text-mainColor'
                      : currentStep === step.number
                        ? 'bg-mainColor border-mainColor text-white'
                        : 'border-mainColor bg-mainColor/30 text-muted-foreground'
                  )}
                  aria-current={currentStep === step.number ? 'step' : undefined}
                >
                  {currentStep > step.number ? (
                    <Check className='lg:h-5 h-3 lg:w-5 w-3' />
                  ) : (
                    <span className='pb-1'>{step.number}</span>
                  )}
                </div>
                <span
                  className={cn(
                    '  whitespace-nowrap lg:text-2xl text-lg font-bold text-mainColor',
                    currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {step.title}
                </span>
              </div>
            </div>
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'shrink-0 h-[2px] w-8 md:w-16 lg:mx-4 ',
                  currentStep > index + 1 ? 'bg-mainColor' : 'bg-mainColor'
                )}
                role='presentation'
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
