'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

interface AnimatedButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string

  onValueChange?: (value: string) => void
}

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const ButtonGroupContext = React.createContext<{
  value: string

  onValueChange: (value: string) => void
} | null>(null)

const AnimatedButtonGroup = React.forwardRef<HTMLDivElement, AnimatedButtonGroupProps>(
  ({ className, defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')

    const value = controlledValue !== undefined ? controlledValue : internalValue

    const setValue = (newValue: string) => {
      if (controlledValue === undefined) setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <ButtonGroupContext.Provider value={{ value, onValueChange: setValue }}>
        <div
          ref={ref}
          className={cn(
            'relative flex h-14 w-full items-center rounded-full border border-[#003B3B] p-[2px]',
            className
          )}
          {...props}
        >
          {/* Sliding background */}
          <Slider value={value} />
          {children}
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)
AnimatedButtonGroup.displayName = 'AnimatedButtonGroup'

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(ButtonGroupContext)
    if (!context) {
      throw new Error('AnimatedButton must be used within AnimatedButtonGroup')
    }

    const isActive = context.value === value

    return (
      <button
        ref={ref}
        className={cn(
          'relative z-10 flex h-full flex-1 items-center justify-center rounded-full px-4 text-[12px] font-bold transition-colors duration-300 md:text-lg lg:text-2xl',
          isActive ? 'rounded-full bg-[#003B3B] text-white' : 'text-[#003B3B]',
          className
        )}
        onClick={() => context.onValueChange(value)}
        type='button'
        {...props}
      >
        {children}
      </button>
    )
  }
)
AnimatedButton.displayName = 'AnimatedButton'

function Slider({ value }: { value: string }) {
  const groupRef = React.useRef<HTMLDivElement>(null)
  const [offset, setOffset] = React.useState(0)
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const update = () => {
      if (!groupRef.current) return

      const buttons = groupRef.current.querySelectorAll('button')

      const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('data-value') === value) as
        | HTMLButtonElement
        | undefined

      if (activeBtn) {
        setOffset(activeBtn.offsetLeft)
        setWidth(activeBtn.offsetWidth)
      } else if (buttons.length > 0) {
        // fallback to first button when nothing is selected
        setOffset(buttons[0].offsetLeft)
        setWidth(buttons[0].offsetWidth)
      }
    }

    update()
    window.addEventListener('resize', update)

    return () => window.removeEventListener('resize', update)
  }, [value])

  return (
    <div ref={groupRef} className='pointer-events-none absolute inset-0 px-[2px]'>
      <div
        className='absolute inset-y-[2px] rounded-full bg-[#003B3B] transition-all duration-300 ease-out'
        style={{
          left: `${offset}px`,
          width: `${width}px`
        }}
      />
    </div>
  )
}

export { AnimatedButtonGroup, AnimatedButton }
