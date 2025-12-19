// ** Next.js and Internationalization Imports
import Image from 'next/image'

// ** Custom Component Imports
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Assets Imports
import samuelHahnemann from '@images/course-comparison/ImgSamuelHahnemann.svg'
import bgImage from '@images/event/ImgBg.png'
import Link from 'next/link'
import { routes } from '@constants/routes'

function BannerSection() {
  // ** i18

  return (
    <ScreenWrapper className='py-4'>
      <div className='relative z-10 grid grid-cols-1 gap-2 rounded-[30px] bg-mainColor to-transparent text-white md:ps-6 lg:grid-cols-12 lg:gap-8 lg:ps-16'>
        {/* Left Content */}
        <div className='order-2 space-y-4 py-4 lg:order-1 lg:col-span-7 lg:py-16'>
          {/* Title */}
          <div className='text-center text-3xl sm:text-4xl lg:text-4xl xl:text-7xl'>
            <h1 className='leading-tight'>
              <span className='font-bold'>S</span>
              <span className='front-medium'>amuel</span> <span className='font-bold'>H</span>
              <span className='front-medium'>ahnemann</span> <span className='font-bold'>A</span>
              <span className='front-medium'>cademy for</span> <span className='font-bold'>H</span>
              <span className='front-medium'>omeopathy</span> - <span className='font-bold'>SHAH</span>
            </h1>
          </div>

          <div className='flex justify-center'>
            <span className='main-description text-muted-foreground text-center! font-normal leading-snug'>
              Welcomes you in
            </span>
          </div>

          <p className='text-center text-3xl font-bold tracking-wide sm:text-4xl lg:text-4xl xl:text-7xl'>
            Inaugural Ceremony
          </p>

          <div className='flex justify-center'>
            <span className='main-description text-muted-foreground text-center! font-normal leading-snug'>of</span>
          </div>

          {/* <p className='font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-7xl text-center tracking-wide'>
            World’s Most Advanced E-Learning Program
          </p> */}

          <div className='text-center text-3xl sm:text-4xl lg:text-4xl xl:text-7xl'>
            <h1 className='leading-tight'>
              <span className='font-bold'>S</span>
              <span className='front-medium'>amuel</span> <span className='font-bold'>H</span>
              <span className='front-medium'>ahnemann's</span> <span className='font-bold'>A</span>
              <span className='front-medium'>pplied</span> <span className='font-bold'>H</span>
              <span className='front-medium'>omeopathy</span> - <span className='font-bold'>(SHAH)</span>
            </h1>
          </div>

          <div className='flex justify-center pt-5'>
            <Link href={`${routes.home}#event-registration-form`}>
              <CustomButton
                aria-label='Register Now'
                classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white'
              >
                Register Now
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className='relative order-1 flex items-end justify-center text-center lg:order-2 lg:col-span-5'>
          <Image
            src={samuelHahnemann}
            alt='Medical Professional'
            width={719}
            height={699}
            className='h-auto w-full max-w-[200px] object-contain lg:max-w-[500px] xl:max-w-[699px]'
            priority
          />
          {/* <Image
            src={bgImage}
            alt='Medical Professional'
            width={500}
            height={800}
            className='absolute -right-28 bottom-0 xl:block hidden -z-10 bg-no-repeat bg-center bg-contain max-w-[200px] lg:max-w-[500px] xl:max-w-[699px] object-cover group-hover:opacity-100 transition-all duration-300 '
            priority
          /> */}

          <Image
            src={bgImage}
            alt='Medical Professional'
            width={389}
            height={642}
            className='absolute bottom-0 right-0 -z-10 hidden xl:block 2xl:h-full'
            priority
          />
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default BannerSection
