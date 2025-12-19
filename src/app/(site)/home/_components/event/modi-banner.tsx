// ** Next.js and Internationalization Imports
import Image from 'next/image'

// ** UI Library Imports
import { Separator } from '@/components/ui/separator'

// ** Custom Component Imports
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Assets Imports
import ImgGift from '@images/event/ImgGift.png'
import modiImage from '@images/event/ImgEventBg.png'

const bannerList = [
  {
    id: 1,
    title: 'Shri Devvrat Acharya',
    description: 'His Excellency, the Governor of Gujarat and Maharashtra',
    className: '!font-bold'
  },

  {
    id: 2,
    title: 'A First in Gujarat’s Homeopathic History: Governor to Attend Landmark Event',
    description: '',
    className: '!text-red-500'
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
              sizes='100vw'
              className='m-0 h-auto w-full max-w-[200px] transform self-end object-contain object-right-bottom lg:max-w-[699px] xl:max-w-[699px]'
            />
          </div>
          {/* Text Content Section - Moved to Right */}
          <div className='order-2 mx-4 my-4 space-y-2 lg:col-span-7 lg:my-10 lg:space-y-6'>
            <span className='!text-center text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:w-full lg:text-3xl xl:text-5xl'>
              CHIEF GUEST OF THE FUNCTION
            </span>
            <br />

            {bannerList?.map((item, index) => {
              return (
                <div className='mt-2 flex items-center justify-start !py-2 lg:mt-5' key={index}>
                  <Separator orientation='vertical' className={`me-4 h-12 w-1 border-2 !text-secondaryColor`} />
                  <div className='flex flex-col'>
                    <span
                      className={`text-muted-foreground !text-start text-xl font-medium leading-snug sm:text-2xl md:text-3xl ${item?.className}`}
                    >
                      {item?.title}
                    </span>
                    <span className='text-muted-foreground !text-start text-xl font-medium leading-snug'>
                      {item?.description}
                    </span>
                  </div>
                </div>
              )
            })}
            <span className='flex flex-col items-center justify-center gap-0 space-y-2 py-4 lg:space-y-6'>
              <span className='text-muted-foreground !text-center text-lg font-medium italic leading-snug sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>
                E-Course Launch:
              </span>{' '}
              <span className='!text-center text-xl leading-tight sm:text-2xl md:text-3xl lg:w-full lg:text-3xl xl:text-5xl'>
                <h1 className='leading-tight'>
                  <span className='font-bold'>S</span>
                  <span className='front-medium'>amuel</span> <span className='font-bold'>H</span>
                  <span className='front-medium'>ahnemann</span> <span className='font-bold'>A</span>
                  <span className='front-medium'>pplied</span> <span className='font-bold'>H</span>
                  <span className='front-medium'>omeopathy</span> <br /> <span className='font-bold'>(SHAH)</span>
                </h1>{' '}
              </span>
              <span className='text-muted-foreground !text-center text-lg font-medium italic leading-snug sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>
                E-Book Launch:
              </span>{' '}
              <span className='!text-center text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:w-full lg:text-3xl xl:text-5xl'>
                Dr. Hahnemann’s DIGITAL Organon of Medicine <br />
                <span className='font-medium'> (5th ed.)</span>
              </span>{' '}
            </span>
          </div>
        </div>
      </div>

      <div className='justify-center md:mt-16'>
        <Image
          src={'/images/event/Banner (1).jpg'}
          alt={'Banner'}
          width={1000}
          height={1000}
          draggable={false}
          className={`w-full rounded-md object-contain`}
          priority
          sizes='100vw'
          unoptimized
        />
      </div>
    </ScreenWrapper>
  )
}

export default ModiBanner
