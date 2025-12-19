// // import * as React from 'react'

// // import { cn } from '@/lib/utils'

// // import { Button } from '@/components/ui/button'
// // import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
// // import { Input } from '@/components/ui/input'
// // import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// // import { ScrollArea } from './scroll-area'

// // import { CheckIcon, ChevronsUpDown } from 'lucide-react'
// // import * as RPNInput from 'react-phone-number-input'
// // import flags from 'react-phone-number-input/flags'

// // type PhoneInputProps = Omit<React.ComponentProps<'input'>, 'onChange' | 'value' | 'ref'> &
// //   Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
// //     // eslint-disable-next-line no-unused-vars
// //     onChange?: (value: RPNInput.Value) => void
// //     inputClassName?: string // Add this line
// //   }

// // const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
// //   React.ElementRef<typeof RPNInput.default>,
// //   PhoneInputProps
// // >(({ className, onChange, inputClassName, ...props }, ref) => {
// //   return (
// //     <RPNInput.default
// //       ref={ref}
// //       className={cn('flex items-center ', className)}
// //       flagComponent={FlagComponent}
// //       countrySelectComponent={CountrySelect}
// //       inputComponent={() => <InputComponent className={inputClassName} />}
// //       smartCaret={false}
// //       onChange={value => onChange?.(value || ('' as RPNInput.Value))}
// //       {...props}
// //     />
// //   )
// // })
// // PhoneInput.displayName = 'PhoneInput'

// // const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
// //   ({ className, ...props }, ref) => (
// //     <Input className={cn('rounded-e-lg rounded-s-none  ', className)} {...props} ref={ref} />
// //   )
// // )
// // InputComponent.displayName = 'InputComponent'

// // type CountryEntry = { label: string; value: RPNInput.Country | undefined }

// // type CountrySelectProps = {
// //   disabled?: boolean
// //   value: RPNInput.Country
// //   options: CountryEntry[]
// //   // eslint-disable-next-line no-unused-vars
// //   onChange: (country: RPNInput.Country) => void
// // }

// // const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }: CountrySelectProps) => {
// //   return (
// //     <Popover>
// //       <PopoverTrigger asChild>
// //         <Button
// //           type='button'
// //           variant='outline'
// //           className='flex gap-1 h-14 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10'
// //           disabled={disabled}
// //         >
// //           <FlagComponent country={selectedCountry} countryName={selectedCountry} />
// //           <ChevronsUpDown className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')} />
// //         </Button>
// //       </PopoverTrigger>
// //       <PopoverContent className='w-[300px] p-0 z-10'>
// //         <Command className='bg-white'>
// //           <CommandInput placeholder='Search country...' />
// //           <CommandList className='z-50'>
// //             <ScrollArea className='h-72'>
// //               <CommandEmpty>No country found.</CommandEmpty>
// //               <CommandGroup>
// //                 {countryList.map(({ value, label }) =>
// //                   value ? (
// //                     <CountrySelectOption
// //                       key={value}
// //                       country={value}
// //                       countryName={label}
// //                       selectedCountry={selectedCountry}
// //                       onChange={onChange}
// //                     />
// //                   ) : null
// //                 )}
// //               </CommandGroup>
// //             </ScrollArea>
// //           </CommandList>
// //         </Command>
// //       </PopoverContent>
// //     </Popover>
// //   )
// // }

// // interface CountrySelectOptionProps extends RPNInput.FlagProps {
// //   selectedCountry: RPNInput.Country
// //   // eslint-disable-next-line no-unused-vars
// //   onChange: (country: RPNInput.Country) => void
// // }

// // const CountrySelectOption = ({ country, countryName, selectedCountry, onChange }: CountrySelectOptionProps) => {
// //   return (
// //     <CommandItem className='gap-2' onSelect={() => onChange(country)}>
// //       <FlagComponent country={country} countryName={countryName} />
// //       <span className='flex-1 text-sm'>{countryName}</span>
// //       <span className='text-sm text-foreground/50'>{`+${RPNInput.getCountryCallingCode(country)}`}</span>
// //       <CheckIcon className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`} />
// //     </CommandItem>
// //   )
// // }

// // const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
// //   const Flag = flags[country]

// //   return (
// //     <span className='flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full'>
// //       {Flag && <Flag title={countryName} />}
// //     </span>
// //   )
// // }

// // export { PhoneInput }

// import * as React from 'react'

// import { cn } from '@/lib/utils'

// import { Button } from '@/components/ui/button'
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
// import { Input } from '@/components/ui/input'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// import { ScrollArea } from './scroll-area'

// import { CheckIcon, ChevronsUpDown } from 'lucide-react'
// import * as RPNInput from 'react-phone-number-input'
// import flags from 'react-phone-number-input/flags'

// type PhoneInputProps = Omit<React.ComponentProps<'input'>, 'onChange' | 'value' | 'ref'> &
//   Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
//     // eslint-disable-next-line no-unused-vars
//     onChange?: (value: RPNInput.Value) => void
//     inputClassName?: string // Add this line
//     countrySelectClassName?: string // Add this line
//   }

// const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
//   React.ElementRef<typeof RPNInput.default>,
//   PhoneInputProps
// >(({ className, onChange, inputClassName, countrySelectClassName, ...props }, ref) => {
//   const memoizedInput = React.useMemo(() => {
//     return (inputProps: any) => <InputComponent {...inputProps} className={inputClassName} />
//   }, [inputClassName])

//   return (
//     <RPNInput.default
//       ref={ref}
//       className={cn('flex items-center ', className)}
//       flagComponent={FlagComponent}
//       countrySelectComponent={countrySelectProps => (
//         <CountrySelect {...countrySelectProps} countrySelectClassName={countrySelectClassName} />
//       )}
//       inputComponent={memoizedInput}
//       smartCaret={false}
//       onChange={value => onChange?.(value || ('' as RPNInput.Value))}
//       {...props}
//     />
//   )
// })
// PhoneInput.displayName = 'PhoneInput'

// const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
//   ({ className, ...props }, ref) => (
//     <Input className={cn('rounded-e-lg rounded-s-none  ', className)} {...props} ref={ref} />
//   )
// )
// InputComponent.displayName = 'InputComponent'

// type CountryEntry = { label: string; value: RPNInput.Country | undefined }

// type CountrySelectProps = {
//   disabled?: boolean
//   value: RPNInput.Country
//   options: CountryEntry[]
//   // eslint-disable-next-line no-unused-vars
//   onChange: (country: RPNInput.Country) => void
//   countrySelectClassName?: string // Add this line
// }

// const CountrySelect = ({
//   disabled,
//   value: selectedCountry,
//   options: countryList,
//   countrySelectClassName,
//   onChange
// }: CountrySelectProps) => {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           type='button'
//           variant='outline'
//           className={cn(
//             'flex gap-1 h-14 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10',
//             countrySelectClassName
//           )}
//           disabled={disabled}
//         >
//           <FlagComponent country={selectedCountry} countryName={selectedCountry} />
//           <ChevronsUpDown className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')} />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='w-[300px] p-0 z-10'>
//         <Command className='bg-white'>
//           <CommandInput placeholder='Search country...' />
//           <CommandList className='z-50'>
//             <ScrollArea className='h-72'>
//               <CommandEmpty>No country found.</CommandEmpty>
//               <CommandGroup>
//                 {countryList.map(({ value, label }) =>
//                   value ? (
//                     <CountrySelectOption
//                       key={value}
//                       country={value}
//                       countryName={label}
//                       selectedCountry={selectedCountry}
//                       onChange={onChange}
//                     />
//                   ) : null
//                 )}
//               </CommandGroup>
//             </ScrollArea>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }

// interface CountrySelectOptionProps extends RPNInput.FlagProps {
//   selectedCountry: RPNInput.Country
//   // eslint-disable-next-line no-unused-vars
//   onChange: (country: RPNInput.Country) => void
// }

// const CountrySelectOption = ({ country, countryName, selectedCountry, onChange }: CountrySelectOptionProps) => {
//   return (
//     <CommandItem className='gap-2' onSelect={() => onChange(country)}>
//       <FlagComponent country={country} countryName={countryName} />
//       <span className='flex-1 text-sm'>{countryName}</span>
//       <span className='text-sm text-foreground/50'>{`+${RPNInput.getCountryCallingCode(country)}`}</span>
//       <CheckIcon className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`} />
//     </CommandItem>
//   )
// }

// const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
//   const Flag = flags[country]

//   return (
//     <span className='flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full'>
//       {Flag && <Flag title={countryName} />}
//     </span>
//   )
// }

// export { PhoneInput }
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { ScrollArea } from './scroll-area'

import { CheckIcon, ChevronsUpDown } from 'lucide-react'
import * as RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

type PhoneInputProps = Omit<React.ComponentProps<'input'>, 'onChange' | 'value' | 'ref'> &
  Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
     
    onChange?: (value: RPNInput.Value) => void
    inputClassName?: string
    countrySelectClassName?: string
  }

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, inputClassName, countrySelectClassName, ...props }, ref) => {
  const memoizedInput = React.useMemo(() => {
    return (inputProps: any) => <InputComponent {...inputProps} className={inputClassName} />
  }, [inputClassName])

  return (
    <RPNInput.default
      ref={ref}
      className={cn('flex items-center ', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={countrySelectProps => (
        <CountrySelect {...countrySelectProps} countrySelectClassName={countrySelectClassName} />
      )}
      inputComponent={memoizedInput}
      smartCaret={false}
      onChange={value => onChange?.(value || ('' as RPNInput.Value))}
      {...props}
    />
  )
})
PhoneInput.displayName = 'PhoneInput'

const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <Input className={cn('rounded-e-lg rounded-s-none  ', className)} {...props} ref={ref} />
  )
)
InputComponent.displayName = 'InputComponent'

type CountryEntry = { label: string; value: RPNInput.Country | undefined }

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  options: CountryEntry[]
   
  onChange: (country: RPNInput.Country) => void
  countrySelectClassName?: string
}

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  countrySelectClassName,
  onChange
}: CountrySelectProps) => {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0
    }
  }, [searchQuery])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className={cn(
            'flex gap-1 h-14 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10',
            countrySelectClassName
          )}
          disabled={disabled}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0 z-20'>
        <Command className='bg-white'>
          <CommandInput
            placeholder='Search country...'
            className='text-lg'
            onValueChange={value => {
              setSearchQuery(value)
              if (scrollAreaRef.current) {
                scrollAreaRef.current.scrollTop = 0
              }
            }}
          />
          <CommandList className='z-50'>
            <ScrollArea className='h-72' ref={scrollAreaRef}>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList
                  .filter(({ label }) => label.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(({ value, label }) =>
                    value ? (
                      <CountrySelectOption
                        key={value}
                        country={value}
                        countryName={label}
                        selectedCountry={selectedCountry}
                        onChange={country => {
                          onChange(country)
                          setOpen(false)
                        }}
                      />
                    ) : null
                  )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country
   
  onChange: (country: RPNInput.Country) => void
}

const CountrySelectOption = ({ country, countryName, selectedCountry, onChange }: CountrySelectOptionProps) => {
  return (
    <CommandItem className='gap-2' onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className='flex-1 text-lg'>{countryName}</span>
      <span className='text-lg text-foreground/50'>{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`} />
    </CommandItem>
  )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country]

  return (
    <span className='flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full'>
      {Flag && <Flag title={countryName} />}
    </span>
  )
}

export { PhoneInput }
