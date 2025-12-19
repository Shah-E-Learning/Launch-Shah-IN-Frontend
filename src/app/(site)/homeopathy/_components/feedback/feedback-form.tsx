'use client'

// ** React and Core Library Imports
import { useEffect, useState } from 'react'

// ** Next.js and Internationalization Imports
import Link from 'next/link'

// ** Third-Party Library Imports
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { City, Country } from 'country-state-city'
import { Link2, Minus } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'

// ** Custom Component Imports
import IcCheck from '@/components/svg/IcCheck'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import CustomButton from '@/components/ui/custom-button'
import { FloatingLabelInput } from '@/components/ui/floating-input.tsx'
import { FloatingSelect } from '@/components/ui/floating-label-select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Application Utility Functions
import { formSchema, FormValues } from '@/utils/validation'

const regrateData = Array.from({ length: 10 }, (_, i) => i + 1)

const groups = [
  {
    value:
      'Preventing homeopathic practitioners and students from engaging in unauthorized allopathic practice, while offering a credible pathway to return to independent homeopathic practice.',
    title:
      'Preventing homeopathic practitioners and students from engaging in unauthorized allopathic practice, while offering a credible pathway to return to independent homeopathic practice.'
  },
  {
    value:
      'Empowering female homeopaths to start or restart their homeopathic practice, and supporting those who lost their shining homeopathic careers due to marriage and other life changes.',
    title:
      'Empowering female homeopaths to start or restart their homeopathic practice, and supporting those who lost their shining homeopathic careers due to marriage and other life changes.'
  },
  {
    value:
      'A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.',
    title:
      'A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.'
  },
  {
    value:
      'A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.',
    title:
      'A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.'
  }
]

const ratings = Array.from({ length: 10 }, (_, i) => i + 1)

const callBackData = [
  {
    value: 'Yes (I am a female and would like to be contacted by a female homeopath)',
    title: 'Yes (I am a female and would like to be contacted by a female homeopath)'
  },
  {
    value: 'Yes (I am a male and would like to be contacted by a male homeopath)',
    title: 'Yes (I am a male and would like to be contacted by a male homeopath)'
  }
]

const AttendData = [
  {
    value: 'Reasons why Homeopaths should avoid practicing Allopathic Medicine (General Practice)',
    title: 'Reasons why Homeopaths should avoid practicing Allopathic Medicine (General Practice)',
    link: 'https://www.samuelhahnemann.org/Reasons'
  },
  {
    value: 'Female and Homeopathic Career - Responsibilities, Opportunities and Management',
    title: 'Female and Homeopathic Career - Responsibilities, Opportunities and Management',
    link: 'https://www.samuelhahnemann.org/Femalehomeopathy'
  }
]

const CommunityData = [
  {
    value: 'Yes',
    title: 'Yes'
  },
  {
    value: 'No',
    title: 'No'
  }
]

export default function FeedbackForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      group: undefined,
      rate_the_regret: undefined,
      questions: [{ question: '' }],
      full_name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      expectation: '',
      detachment: '',

      // career: '',
      rating: undefined,
      callback: undefined,
      attend_any_course: undefined,
      join_community: undefined
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions'
  })

  const [countriesList] = useState(
    Country.getAllCountries().map(country => ({
      value: country.name,
      label: `${country.flag} ${country.name}`,
      isoCode: country.isoCode
    }))
  )
  const [cities, setCities] = useState<{ value: string; label: string }[]>([])
  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedCountry = form.watch('country')

  useEffect(() => {
    if (selectedCountry) {
      const countryCode = countriesList.find(c => c.value === selectedCountry)?.isoCode

      const filteredCities =
        City.getCitiesOfCountry(countryCode || '')?.map(city => ({
          value: `${city.name}-${city.latitude}-${city.longitude}`,
          label: city.name
        })) || []
      setCities(filteredCities)
    } else {
      setCities([])
      form.setValue('city', '')
    }
  }, [selectedCountry, form, countriesList])

  async function onSubmit(data: FormValues) {
    const cityValue = data.city
    const cityName = cityValue ? cityValue.split('-')[0] : ''
    const cleanedData = { ...data, city: cityName }

    const response: any = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/front-end/feedback-form`,
      cleanedData
    )
    console.log('response :', response)
    if (response.status) {
      toast.success(response.data.message)
      form.reset()
    }
  }

  return (
    <div>
      <Label className='main-title flex justify-center font-extrabold text-mainColor'>
        Guide us to serve you better
      </Label>
      <ScreenWrapper className='py-4 lg:py-8'>
        <Card className='mx-auto w-full rounded-xl bg-mainColor p-4 text-white lg:p-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              {/* Personal Details */}
              <div className='space-y-3'>
                <FormLabel className='main-description flex items-center gap-2 font-medium'>
                  <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                  Personal Details
                </FormLabel>
                <div className='space-y-3 ps-10'>
                  <FormField
                    control={form.control}
                    name='full_name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            label='Full Name'
                            {...field}
                            labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                            labelSize='md:text-2xl text-xl text-xl text-stone-300 font-normal'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <FloatingLabelInput
                              label='Email'
                              {...field}
                              labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                              labelSize='md:text-2xl text-xl text-stone-300 font-normal'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <FloatingLabelInput
                              label='Phone Number'
                              {...field}
                              labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                              labelSize='md:text-2xl text-xl text-stone-300 font-normal'
                              maxLength={10}
                              onInput={e => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <FormField
                      control={form.control}
                      name='country'
                      render={({ field }) => (
                        <FormItem>
                          <FloatingSelect
                            searchable
                            options={countriesList}
                            onValueChange={field.onChange}
                            value={field.value}
                            label='Country'
                            labelSearch='Country'
                            labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                            labelSize='md:text-2xl text-xl text-stone-300 font-normal'
                            classNameTrigger='h-14 py-5 !border rounded-lg text-stone-300'
                            className='pb-0'
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='city'
                      render={({ field }) => (
                        <FormItem>
                          <FloatingSelect
                            searchable
                            options={cities}
                            onValueChange={field.onChange}
                            value={field.value}
                            label='City'
                            labelSearch='City'
                            labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                            labelSize='md:text-2xl text-xl text-stone-300 font-normal'
                            classNameTrigger='h-14 py-5 !border rounded-lg text-stone-300'
                            className='pb-0'
                            disabled={!selectedCountry}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <Separator className='bg-neutral-300' />
              {/* Rating */}
              <FormField
                control={form.control}
                name='rating'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      How much you love Homeopathy?
                    </FormLabel>
                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(Number.parseInt(value))}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className='mt-2 flex flex-wrap gap-16'
                      >
                        {ratings.map(rating => (
                          <FormItem key={rating} className='flex items-center space-x-2'>
                            <FormControl>
                              <RadioGroupItem
                                value={rating.toString()}
                                className='text-buttonColor-custom mt-1 border-stone-300 !text-stone-300 checked:text-white'
                                classCircle='h-2.5 w-2.5 !text-stone-300 fill-stone-300 '
                              />
                            </FormControl>
                            <FormLabel className='cursor-pointer text-xl text-stone-300 lg:text-2xl'>
                              {rating}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />
              <Separator className='bg-neutral-300' />
              {/* Detachment */}
              <FormField
                control={form.control}
                name='detachment'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      What made you to detach from Homeopathy?
                    </FormLabel>
                    <div className='ps-10'>
                      <FormControl className=''>
                        <Textarea
                          {...field}
                          placeholder='Feel free to write'
                          className='min-h-[100px] border-stone-300 bg-transparent text-stone-300 placeholder:font-normal placeholder:text-stone-300'
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Separator className='bg-neutral-300' />

              {/* Rate the Regret */}
              <FormField
                control={form.control}
                name='rate_the_regret'
                render={({ field }) => (
                  <FormItem className='space-y-4'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      Rate the regret you have being unable to have independent homeopathic practice?
                    </FormLabel>
                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(Number.parseInt(value))}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className='mt-2 flex flex-wrap gap-16'
                      >
                        {regrateData.map(regret => (
                          <FormItem key={regret} className='flex items-center space-x-2'>
                            <FormControl>
                              <RadioGroupItem
                                value={regret.toString()}
                                className='text-buttonColor-custom mt-1 border-stone-300 !text-stone-300 checked:text-white'
                                classCircle='h-2.5 w-2.5 !text-stone-300 fill-stone-300 '
                              />
                            </FormControl>
                            <FormLabel className='!focus:text-white cursor-pointer text-justify text-xl font-medium text-stone-300 md:text-3xl'>
                              {regret}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />
              <Separator className='bg-neutral-300' />

              {/* Groups Selection */}
              <FormField
                control={form.control}
                name='group'
                render={({ field }) => (
                  <FormItem className='space-y-4'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      Which Groups belong to you?
                    </FormLabel>
                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(value)}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className='flex flex-wrap'
                      >
                        {groups.map(group => (
                          <FormItem key={group.value} className='flex items-baseline space-x-5 space-y-3'>
                            <FormControl>
                              <RadioGroupItem
                                value={group.value.toString()}
                                className='text-buttonColor-custom mt-1 border-white !text-stone-300 checked:text-white'
                                classCircle='h-2.5 w-2.5 !text-white fill-white'
                              />
                            </FormControl>
                            <FormLabel className='!focus:text-white cursor-pointer text-justify text-xl font-medium text-stone-300 md:text-3xl'>
                              {group.title}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />
              {/* Dynamic Questions */}
              <div className='space-y-8'>
                <FormLabel className='main-description flex items-center gap-2 font-medium'>
                  <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                  Feel free to ask questions
                </FormLabel>
                {fields.map((field, index) => (
                  <div key={field.id} className='flex items-center gap-2 ps-10'>
                    <FormField
                      control={form.control}
                      name={`questions.${index}.question`}
                      render={({ field }) => (
                        <FormItem className='flex-1'>
                          <FormControl>
                            <FloatingLabelInput
                              label='Write your own'
                              {...field}
                              labelBgColor='!px-2 !-translate-y-5 bg-mainColor !-mb-6 text-secondaryColor/30'
                              labelSize='md:text-2xl text-xl text-stone-300 font-normal !border-stone-300'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {index > 0 && (
                      <Button
                        type='button'
                        variant='ghost'
                        size='icon'
                        onClick={() => remove(index)}
                        className='text-stone-300 hover:text-red-400'
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                    )}
                  </div>
                ))}
                <div className='flex justify-start ps-10'>
                  <CustomButton
                    type='button'
                    classNameExtra='bg-stone-300 text-mainColor hover:bg-secondaryColor hover:text-white'
                    plusIcon={true}
                    onClick={() => append({ question: '' })}
                    size='sm'
                    defaultSize={false}
                  >
                    Add More
                  </CustomButton>
                </div>
              </div>

              <Separator className='bg-neutral-300' />

              {/* Expectations */}
              <FormField
                control={form.control}
                name='expectation'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      What is your Expectation from SHAH?
                    </FormLabel>
                    <div className='ps-10'>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder='Feel free to write'
                          className='min-h-[100px] border-stone-300 bg-transparent text-stone-300 placeholder:font-normal placeholder:text-stone-300'
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* <Separator className='bg-neutral-300' /> */}

              {/* Career
              <FormField
                control={form.control}
                name='career'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel className='main-description font-medium flex items-center gap-2'>
                      <IcCheck className='shrink-0 w-4 h-4 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      How do you want to see your Homeopathy Career in Life?
                    </FormLabel>
                    <div className='ps-10'>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder='Feel free to write'
                          className='bg-transparent border-stone-300 text-stone-300 placeholder:font-normal placeholder:text-stone-300 min-h-[100px]'
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              /> */}

              <Separator className='bg-neutral-300' />
              {/* community  */}
              <FormField
                control={form.control}
                name='join_community'
                render={({ field }) => (
                  <FormItem className='space-y-4'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      Join our Samuel Hahnemann's Applied Homeopathy Community to become a Successful Homeopath{' '}
                      <span className='mt-2 text-lg'>(FREE AND OPEN GROUP FOR ALL)</span>
                    </FormLabel>

                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(value)}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className=' '
                      >
                        {CommunityData.map(group => (
                          <FormItem key={group.value} className='flex items-baseline space-x-5 space-y-3'>
                            <FormControl>
                              <RadioGroupItem
                                value={group.value.toString()}
                                className='text-buttonColor-custom mt-1 border-stone-300 !text-stone-300 checked:text-stone-300'
                                classCircle='h-2.5 w-2.5 !text-stone-300 fill-stone-300'
                              />
                            </FormControl>
                            <FormLabel className='flex cursor-pointer items-center gap-2 text-justify text-xl font-medium text-stone-300 md:text-3xl'>
                              {group.title}{' '}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />
              <Separator className='bg-neutral-300' />
              {/* Attend  */}
              <FormField
                control={form.control}
                name='attend_any_course'
                render={({ field }) => (
                  <FormItem className='space-y-4'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      Have you attended any of our Be a Homeopath Courses?
                    </FormLabel>
                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(value)}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className=' '
                      >
                        {AttendData.map(group => (
                          <FormItem key={group.value} className='flex items-baseline space-x-5 space-y-3'>
                            <FormControl>
                              <RadioGroupItem
                                value={group.value.toString()}
                                className='text-buttonColor-custom mt-1 border-stone-300 !text-stone-300 checked:text-stone-300'
                                classCircle='h-2.5 w-2.5 !text-stone-300 fill-stone-300'
                              />
                            </FormControl>
                            <FormLabel className='flex cursor-pointer items-center gap-2 text-justify text-xl font-medium text-stone-300 md:text-3xl'>
                              {group.title}{' '}
                              <span className='text-white transition-all duration-300 hover:scale-150'>
                                <Link href={group.link} target='_blank' aria-label='course-link'>
                                  <Link2 />
                                </Link>
                              </span>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />
              <Separator className='bg-neutral-300' />

              {/* Call */}
              <FormField
                control={form.control}
                name='callback'
                render={({ field }) => (
                  <FormItem className='space-y-4'>
                    <FormLabel className='main-description flex items-center gap-2 font-medium'>
                      <IcCheck className='h-4 w-4 shrink-0 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke={'white'} />
                      Would you like us to call you to understand your problems or emotions more clearly?
                    </FormLabel>
                    <FormControl className='ps-10'>
                      <RadioGroup
                        onValueChange={value => field.onChange(value)}
                        value={field.value?.toString() || ''} // Handle undefined by defaulting to empty string
                        className=' '
                      >
                        {callBackData.map(group => (
                          <FormItem key={group.value} className='flex items-baseline space-x-5 space-y-3'>
                            <FormControl>
                              <RadioGroupItem
                                value={group.value.toString()}
                                className='text-buttonColor-custom mt-1 border-stone-300 !text-stone-300 checked:text-stone-300'
                                classCircle='h-2.5 w-2.5 !text-stone-300 fill-stone-300'
                              />
                            </FormControl>
                            <FormLabel className='cursor-pointer text-justify text-xl font-medium text-stone-300 md:text-3xl'>
                              {group.title}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className='ps-10 text-red-400' />
                  </FormItem>
                )}
              />

              <div className='flex justify-start'>
                <CustomButton
                  type='submit'
                  classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white'
                >
                  Submit
                </CustomButton>
              </div>
            </form>
          </Form>
        </Card>
      </ScreenWrapper>
    </div>
  )
}
