'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { FloatingLabel } from './floating-input.tsx'
import { ScrollArea } from './scroll-area'

import { Check } from 'lucide-react'

interface FloatingSelectProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
  labelSearch?: string
  labelBgColor?: string
  labelSize?: string
  children?: React.ReactNode
  placeholder?: string
  className?: string
  classNameTrigger?: string
  error?: boolean
  options?: { value: string; label: string }[]
  searchable?: boolean

  onValueChange?: (value: string) => void
  defaultValue?: string
  value?: string
}

const FloatingSelect = React.forwardRef<HTMLButtonElement, FloatingSelectProps>(
  (
    {
      label,
      labelSearch,
      labelBgColor,
      labelSize,
      placeholder = ' ',
      className,
      classNameTrigger,
      error,
      options = [],
      searchable = false,
      onValueChange,
      defaultValue,
      value: controlledValue,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState<string | undefined>(defaultValue)
    const value = controlledValue ?? selectedValue

    const [searchQuery, setSearchQuery] = React.useState('')
    const scrollAreaRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = 0
      }
    }, [searchQuery])

    const handleSelect = (currentValue: string) => {
      setSelectedValue(currentValue)
      onValueChange?.(currentValue)
      setOpen(false)
      setSearchQuery('')
    }

    if (searchable) {
      return (
        <div className='relative'>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className='w-full'>
                <Button
                  type='button'
                  ref={ref}
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className={cn(
                    'w-full justify-between rounded-none border-t-0 border-r-0 border-l-0 px-2 text-xl focus:ring-0 md:text-2xl',
                    error && 'border-red-500',
                    classNameTrigger
                  )}
                  {...props}
                >
                  {value ? options.find(option => option.value === value)?.label : placeholder}
                </Button>
                <FloatingLabel
                  bgColor={labelBgColor}
                  labelSize={labelSize}
                  aria-expanded={open}
                  className={cn(
                    value ? `top-0 -translate-y-7 scale-75 px-0` : `top-1/2 z-0 w-max -translate-y-1/2 scale-100 pb-4`,
                    className
                  )}
                >
                  {label}
                </FloatingLabel>
                <i className='ri-arrow-down-s-fill absolute top-1/2 right-4 h-6! w-6! -translate-y-1/2 transform cursor-pointer'></i>
              </div>
            </PopoverTrigger>
            <PopoverContent align='start' className='bg-lightBg/95 z-20 w-[350px] p-0'>
              <Command>
                <CommandInput
                  className='text-mainColor placeholder:text-mainColor text-xl font-bold'
                  placeholder={`Search ${labelSearch?.toLowerCase() ?? 'label'}...`}
                  onValueChange={value => {
                    setSearchQuery(value)
                    if (scrollAreaRef.current) {
                      scrollAreaRef.current.scrollTop = 0
                    }
                  }}
                />
                <CommandList className='z-50'>
                  <ScrollArea className='h-72' ref={scrollAreaRef}>
                    <CommandEmpty>No {(labelSearch ?? 'label').toLowerCase()} found.</CommandEmpty>
                    <CommandGroup className='max-h-[300px] overflow-auto'>
                      {options
                        .filter(({ label }) => label.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map(option =>
                          option ? (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={() => handleSelect(option.value)}
                              className='text-lg font-medium lg:text-xl'
                            >
                              <Check
                                className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')}
                              />
                              {option.label}
                            </CommandItem>
                          ) : null
                        )}
                    </CommandGroup>
                  </ScrollArea>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      )
    }

    return (
      <div className='relative'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className='w-full'>
              <Button
                type='button'
                ref={ref}
                variant='outline'
                role='combobox'
                aria-expanded={open}
                className={cn(
                  'w-full justify-between rounded-none border-t-0 border-r-0 border-l-0 px-2 text-xl focus:ring-0 md:text-2xl',
                  error && 'border-red-500',
                  classNameTrigger
                )}
                {...props}
              >
                {value ? options.find(option => option.value === value)?.label : placeholder}
              </Button>
              <FloatingLabel
                bgColor={labelBgColor}
                labelSize={labelSize}
                className={cn(
                  value ? `top-0 -translate-y-7 scale-75 px-0` : `top-1/2 w-max -translate-y-1/2 scale-100 pb-4`,
                  className
                )}
              >
                {label}
              </FloatingLabel>
              <i className='ri-arrow-down-s-fill absolute top-1/2 right-4 !h-6 !w-6 -translate-y-1/2 transform'></i>
            </div>
          </PopoverTrigger>
          <PopoverContent align='start' className='bg-lightBg/80 min-w-[300px] p-0'>
            <Command>
              <CommandList>
                <CommandGroup className='max-h-[300px] overflow-auto'>
                  {options.map(option => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                      className='text-lg font-medium lg:text-xl'
                    >
                      <Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)

FloatingSelect.displayName = 'FloatingSelect'

export { FloatingSelect }
