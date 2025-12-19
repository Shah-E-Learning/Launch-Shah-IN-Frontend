'use client'

// ** React and Core Library Imports
import { useEffect, useState } from 'react'

// ** Next.js and Internationalization Imports
import Image from 'next/image'
import Link from 'next/link'

// ** UI Library Imports
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { FloatingLabelInput } from '@/components/ui/floating-input.tsx'
import { FloatingSelect } from '@/components/ui/floating-label-select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

// ** Custom Component Imports
import FileUploadCompact from '@components/custom/file-upload'
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Application Service, Constants, and Type Imports
import { useMediaQuery } from '@hooks/use-media'
import { awsUpload } from '@services/aws-server'

// ** Third-Party Library Imports
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

// ** Application Utility Functions
import { cn } from '@libs/utils'

// ** Assets Imports
import ImgSmilingDoc from '@images/event/ImgSmilingDoc.png'

const formSchema = z
  .object({
    name: z.string({ message: 'Please enter your name' }).min(2, 'Name must be at least 2 characters'),
    email: z.string({ message: 'Please enter your email' }).email({ message: 'Please enter a valid email' }),
    phone: z.string({ message: 'Please enter your phone number' }).min(10, 'Phone number must be at least 10 digits'),

    number_of_attendees: z.string().regex(/^\d+$/, 'Enter valid number'),

    gender: z.string().min(1, 'Please select a gender'),
    participant_category: z.string().min(1, 'Please select a participant category'),

    consent: z.boolean().refine(val => val === true, {
      message: 'You must agree to the terms.'
    }),

    id_cards: z.array(
      z.object({
        id: z.string(),
        file: z.instanceof(File),
        type: z.string()
      })
    )
  })
  .superRefine((data, ctx) => {
    const attendeeCount = Number(data.number_of_attendees || 0)
    const uploadedCount = data.id_cards?.length || 0

    // If attendees entered but files not matching
    if (attendeeCount > 0 && uploadedCount !== attendeeCount) {
      ctx.addIssue({
        path: ['id_cards'],
        code: z.ZodIssueCode.custom,
        message: `Please upload exactly ${attendeeCount} ID card(s)`
      })
    }
  })

export interface UploadedFile {
  id: string
  file: File
  type: 'image' | 'pdf' | 'excel' | 'document' | 'other'
  error?: string
}

export default function EventRegistration() {
  const smBreakpoint = useMediaQuery('(max-width: 1200px)')
  const xsBreakpoint = useMediaQuery('(max-width: 767px)')
  const [fileStates, setFileStates] = useState<Record<string, UploadedFile[]>>({})
  const [data, setData] = useState<any>({})

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      participant_category: '',
      number_of_attendees: '',
      id_cards: [],
      consent: false
    }
  })

  const attendeeCount = Number(form.watch('number_of_attendees') || 0)

  const handleFileChange = (files: UploadedFile[]) => {
    setFileStates(prev => ({
      ...prev,
      id_cards: files
    }))

    form.setValue('id_cards', files, { shouldValidate: true })
  }

  const onSubmit = async (values: any) => {
    try {
      const uploadedUrls: string[] = []

      // Upload ID cards
      for (const fileObj of values.id_cards) {
        const file = fileObj.file

        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

        if (!allowedTypes.includes(file.type)) {
          toast.error('Unsupported file type')

          return
        }

        const path = `${process.env.NEXT_PUBLIC_BUCKET_FOLDER}/event-attendees/${Date.now()}-${file.name}`

        const res = await awsUpload(path, file)

        if (!res?.status) {
          toast.error('File upload failed')

          return
        }

        uploadedUrls.push(res.Key)
      }

      // Final payload
      const body = {
        ...values,
        id_cards: uploadedUrls
      }

      console.log('body :', body)

      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/front-end/event-registration`,
        body
      )

      if (response.status) {
        form.reset()
        setFileStates({})
      }
    } catch (error) {
      console.error('Error uploading files:', error)
      toast.error('File upload failed')
    }
  }

  const GetSettingData = async () => {
    const response: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/front-end/general-setting`)

    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    GetSettingData()
  }, [])

  const addressOne = data?.data?.find((data: any) => {
    return data?.key === 'address'
  })

  const emailOne = data?.data?.find((data: any) => {
    return data?.key === 'email'
  })

  const emailTwo = data?.data?.find((data: any) => {
    return data?.key === 'alt_email'
  })

  const mobileOne = data?.data?.find((data: any) => {
    return data?.key === 'phone_number'
  })

  const mobileTwo = data?.data?.find((data: any) => {
    return data?.key === 'alt_phone_number'
  })

  const genderData = [
    {
      key: 'male',
      name: 'Male'
    },
    {
      key: 'female',
      name: 'Female'
    }
  ]

  const participantCategory = [
    {
      key: 'faculty',
      name: 'Faculty'
    },
    {
      key: 'student',
      name: 'Student'
    },
    {
      key: 'homeopath',
      name: 'Homeopath'
    },
    {
      key: 'other',
      name: 'Other'
    }
  ]

  return (
    <div id='event-registration-form' className='relative mt-8 min-h-screen w-full overflow-hidden'>
      {/* Split background */}
      <div className='absolute inset-0 h-1/2 w-full bg-white' />
      <div className='absolute bottom-0 h-1/2 w-full bg-[#E5F9F9]' />
      {(addressOne?.value || mobileOne?.value || mobileTwo?.value || emailOne?.value || emailTwo?.value) && (
        <div className='absolute bottom-0 h-1/6 w-full bg-mainColor' />
      )}

      {/* Main content */}
      <ScreenWrapper className='container relative mx-auto px-4'>
        <div className='flex min-h-[calc(100vh-200px)] items-center justify-center xl:justify-between'>
          {/* Form */}
          <div
            className={`z-10 ${(addressOne?.value || mobileOne?.value || mobileTwo?.value || emailOne?.value || emailTwo?.value) && 'lg:mb-96'} mb-5 w-full max-w-4xl rounded-3xl bg-mainColor p-8 text-white`}
          >
            <h2 className='main-title mb-6 text-center text-2xl font-bold text-white'>Event Registration</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                  control={form.control}
                  name='participant_category'
                  render={({ field }) => (
                    <FormItem className=''>
                      <FloatingSelect
                        options={participantCategory?.map(item => ({
                          value: item.name,
                          label: item.name
                        }))}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        label='Participant Category'
                        className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                        {...field}
                        labelSize={`${xsBreakpoint ? '!text-2xl ' : '!text-4xl '} !text-white/30 !font-normal`}
                      />
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label='Full Name'
                          {...field}
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                          labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                        />
                      </FormControl>
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem className='pb-2 lg:pb-4'>
                      <FormControl>
                        <FloatingLabelInput
                          label='WhatsApp Contact Number'
                          {...field}
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          labelBgColor='bg-mainColor  text-secondaryColor/30'
                          maxLength={10}
                          onInput={e => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')
                          }}
                          labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                        />
                      </FormControl>
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label='Email Address'
                          {...field}
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                          labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                        />
                      </FormControl>
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <FormItem className=''>
                      <FloatingSelect
                        options={genderData?.map(item => ({
                          value: item.key,
                          label: item.name
                        }))}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        label='Gender'
                        className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                        {...field}
                        labelSize={`${xsBreakpoint ? '!text-2xl ' : '!text-4xl '} !text-white/30 !font-normal`}
                      />
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='number_of_attendees'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label='Total Number of Attendees'
                          {...field}
                          className='!md:text-3xl rounded-none border-l-0 border-r-0 border-t-0 bg-transparent text-white'
                          labelBgColor='bg-mainColor w-full text-secondaryColor/30'
                          labelSize='text-2xl md:text-4xl text-white/30 font-normal'
                        />
                      </FormControl>
                      <FormMessage errorSpaceShow={true} className='lg:h-4' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='id_cards'
                  render={({ field }) => (
                    <FormItem>
                      <div className={cn(attendeeCount === 0 && 'pointer-events-none opacity-50')}>
                        <FileUploadCompact
                          config={{
                            allowedTypes: ['png', 'jpeg', 'jpg', 'pdf'],
                            maxSizeMB: 2,
                            multiple: true,
                            label: attendeeCount
                              ? `Upload ${attendeeCount} ID Card(s)`
                              : 'Enter number of attendees first'
                          }}
                          uploadedFiles={fileStates.id_cards || []}
                          setUploadedFiles={files => {
                            if (files.length > attendeeCount) {
                              toast.error(`You can upload only ${attendeeCount} file(s)`)

                              return
                            }

                            handleFileChange(files)
                          }}
                          onFilesChange={field.onChange}
                        />
                        <FormMessage errorSpaceShow className='lg:h-4' />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='consent'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-baseline space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          id='consent'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='flex shrink-0 border-white data-[state=checked]:bg-teal-500 data-[state=checked]:text-white'
                        />
                      </FormControl>
                      <div className='flex flex-col'>
                        <div className='leading-none'>
                          <FormLabel className='cursor-pointer text-2xl font-medium text-white' htmlFor='consent'>
                            I consent to the use and storage of my data as outlined in the Samuel Hahnemann Academy for
                            Homeopathy - SHAH privacy policy and data protection statement.
                          </FormLabel>
                        </div>
                        <FormMessage errorSpaceShow={true} className='lg:h-4' />
                      </div>
                    </FormItem>
                  )}
                />

                <div className='flex justify-center'>
                  <CustomButton
                    type='submit'
                    classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white'
                  >
                    Submit
                  </CustomButton>
                </div>
              </form>
            </Form>
          </div>

          {/* Image */}
          <div
            className={`right-0 z-20 hidden h-auto w-full max-w-[200px] shrink-0 lg:absolute lg:max-w-[500px] xl:right-0 xl:block xl:max-w-[700px] 2xl:right-56 ${addressOne?.value || mobileOne?.value || mobileTwo?.value || emailOne?.value || emailTwo?.value ? '!bottom-72' : 'bottom-0'}`}
          >
            <Image
              src={ImgSmilingDoc}
              alt='Medical Professional'
              layout='responsive'
              width={1000}
              height={1000}
              draggable={false}
              className='h-auto w-full max-w-[200px] object-contain lg:max-w-[500px] xl:max-w-[700px]'
              priority
            />
          </div>
        </div>

        {/* Contact Cards - Absolutely positioned at bottom */}
        {(addressOne?.value || mobileOne?.value || mobileTwo?.value || emailOne?.value || emailTwo?.value) && (
          <div className='bottom-48 left-0 right-0 z-30 w-full gap-4 px-4 lg:absolute lg:translate-y-1/2'>
            <Card className='border-0 bg-white shadow-lg'>
              <CardContent className='flex flex-col items-center justify-evenly gap-4 space-y-2 p-6 lg:flex-row'>
                {addressOne?.value && (
                  <>
                    <div className='min-w-[250px] max-w-[400px] text-center'>
                      <h3 className='main-description !text-center font-bold text-mainColor lg:text-5xl'>
                        How to Reach Us
                      </h3>
                      <p className='main-description-small my-3 max-w-[300px] !text-center text-gray-600'>
                        {addressOne?.value}
                      </p>
                      <div className='flex justify-center'>
                        <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                          Get Direction
                        </CustomButton>
                      </div>
                    </div>

                    {!smBreakpoint && (
                      <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-mainColor`} />
                    )}
                  </>
                )}

                {(mobileOne?.value || mobileTwo?.value) && (
                  <>
                    <div className='min-w-[250px] max-w-[400px] text-center'>
                      <h3 className='main-description !text-center text-xl font-bold text-mainColor lg:text-5xl'>
                        Contact Us
                      </h3>
                      <p className='main-description-small my-3 !text-center text-gray-600'>
                        {mobileOne?.value}
                        <br />
                        {mobileTwo?.value}
                      </p>{' '}
                      <div className='flex justify-center'>
                        <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                          Call Us
                        </CustomButton>
                      </div>
                    </div>

                    {!smBreakpoint && (
                      <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-mainColor`} />
                    )}
                  </>
                )}

                {(emailOne?.value || emailTwo?.value) && (
                  <div className='min-w-[250px] max-w-[400px] text-center'>
                    <h3 className='main-description !text-center text-xl font-bold text-mainColor lg:text-5xl'>
                      Query
                    </h3>
                    <p className='main-description-small my-3 truncate !text-center text-gray-600'>
                      <Link href={`mailto:${emailOne?.value}`} title={emailOne?.value}>
                        {emailOne?.value}
                      </Link>
                      <br />
                      <Link href={`mailto:${emailTwo?.value}`} title={emailTwo?.value}>
                        {emailTwo?.value}
                      </Link>
                    </p>{' '}
                    <div className='flex justify-center'>
                      <CustomButton defaultSize={false} size={smBreakpoint ? 'xs' : 'md'}>
                        Enquiry Now
                      </CustomButton>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </ScreenWrapper>
    </div>
  )
}
