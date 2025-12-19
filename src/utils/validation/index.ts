import * as z from 'zod'

export const formSchema = z.object({
  group: z.string({ message: 'Please select a group' }).min(1, 'Group selection is required'),
  rate_the_regret: z.number({ message: 'Please select a this' }).min(1, 'This selection is required'),
  callback: z.string().optional(),
  attend_any_course: z.string().optional(),
  join_community: z.string({ message: 'Please select a option' }).min(1, 'Selection is required'),
  questions: z
    .array(
      z.object({
        question: z.string().min(1, 'Question is required')
      })
    )
    .min(1, 'At least one question is required'),
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  expectation: z.string().min(1, 'Please share your expectations'),
  detachment: z.string().min(1, 'Please share your thoughts'),

  // career: z.string().min(1, 'Please share your career aspirations'),
  rating: z
    .number({ message: 'Please select a rating' })
    .min(1, { message: 'Rating is required' })
    .max(10, { message: 'Rating must be between 1 and 10' })
})

export type FormValues = z.infer<typeof formSchema>
