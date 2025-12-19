// ** Next.js and Internationalization Imports
import Image from 'next/image'

// ** UI Library Imports
import { Separator } from '@/components/ui/separator'

// ** Custom Component Imports
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Assets Imports
import ImgGift from '@images/event/ImgGift.png'
import modiImage from '@images/event/ImgModi.png'

const bannerList = [
  {
    id: 1,
    title: 'Vasudhaiva Kutumbakam',
    description: ''
  },
  {
    id: 2,
    title: 'Vocal for Local & Local to Global',
    description: ''
  },
  {
    id: 3,
    title: 'Holistic Health Care ',
    description: '“Different Medical Disciplines on One Platform” '
  },
  {
    id: 4,
    title: 'Ayushman Bharat Digital Mission',
    description:
      'Taking medical education and services to the tribal areas and to the villages to serve the underprivileged people of India'
  },
  {
    id: 5,
    title: 'Women Education and Women Empowerment'
  },
  {
    id: 6,
    title: 'Atmanirbhar Bharat'
  },
  {
    id: 7,
    title: 'Ek Hai to Safe Hai'
  },
  {
    id: 8,
    title: 'Viksit Bharat 2047'
  }
]

const ModiBanner = () => {
  return (
    <ScreenWrapper className='py-4 lg:pt-8'>
      <div className='modi-banner overflow-hidden rounded-3xl bg-[#FFF3DD] text-mainColor'>
        <div className='relative flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <Image
            src={ImgGift}
            alt='Gift'
            width={400}
            height={400}
            quality={80}
            className='absolute left-0 top-0 max-w-[100px] object-contain lg:max-w-[200px] xl:-left-10 xl:-top-8 xl:max-w-[600px]'
            priority
          />
        </div>
        <div className='grid grid-cols-1 gap-0 lg:grid-cols-12'>
          {/* Image Section - Moved to Left */}
          <div className='order-1 !m-0 flex items-end justify-center !p-0 lg:col-span-5 xl:justify-start'>
            <Image
              src={modiImage}
              alt='Medical Professional'
              width={719}
              height={699}
              quality={80}
              className='m-0 h-auto w-full max-w-[200px] scale-x-[-1] transform self-end object-contain object-right-bottom lg:max-w-[699px] xl:max-w-[699px]'
              priority
            />
          </div>
          {/* Text Content Section - Moved to Right */}
          <div className='order-2 mx-4 my-4 space-y-4 lg:col-span-7 lg:my-10 lg:space-y-4'>
            <div className='text-3xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:w-full'>
              SAMUEL HAHNEMANN’S APPLIED HOMEOPATHY (SHAH)
            </div>
            <span className='text-muted-foreground my-2 !text-center text-xl font-medium leading-snug md:text-2xl'>
              is an initiative inspired by the vision of <br />
              <span className='text-3xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:w-full'>
                The Honourable Prime Minister of Bharat Shri Narendra Modi Sir
              </span>{' '}
              <br /> A strong believer of
            </span>
            {bannerList?.map((item, index) => {
              return (
                <div className='flex items-center justify-start' key={index}>
                  <Separator orientation='vertical' className={`me-4 h-12 w-1 border-2 !text-secondaryColor`} />
                  <div className='flex flex-col'>
                    <span className='text-muted-foreground !text-start text-xl font-medium leading-snug sm:text-2xl md:text-3xl'>
                      {item?.title}
                    </span>
                    <span className='text-muted-foreground !text-start text-xl font-medium leading-snug'>
                      {item?.description}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <ScreenWrapper className='pd:my-16 relative mt-12 flex justify-center rounded-xl bg-mainColor py-12 md:mt-16'>
        <Image
          src={'/images/ImgBanner.jpg'}
          alt={'Banner'}
          width={1000}
          height={1000}
          draggable={false}
          className={`user-select-none rounded-md object-contain`}
          priority
          quality={100}
        />
      </ScreenWrapper>
    </ScreenWrapper>
  )
}

export default ModiBanner
