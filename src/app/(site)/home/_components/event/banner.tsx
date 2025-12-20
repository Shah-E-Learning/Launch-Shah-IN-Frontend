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
        {/* <div className='order-2 space-y-4 py-4 lg:order-1 lg:col-span-7 lg:py-16'>
          <div className='text-center text-xl sm:text-2xl lg:text-3xl xl:text-7xl'>
            <h1 className='leading-tight'>
              <span className='font-bold'>S</span>
              <span className='front-medium'>amuel</span> <span className='font-bold'>H</span>
              <span className='front-medium'>ahnemann</span> <span className='font-bold'>A</span>
              <span className='front-medium'>cademy for</span> <span className='font-bold'>H</span>
              <span className='front-medium'>omeopathy</span> - <span className='font-bold'>SHAH</span>
            </h1>
          </div>

          <div className='flex justify-center !py-5'>
            <span className='main-description text-muted-foreground text-center! font-normal leading-snug'>
              welcome you
            </span>
          </div>

          <p className='text-center font-serif text-xl font-bold !leading-[2.5rem] tracking-wide text-amber-500 sm:text-2xl lg:text-3xl lg:!leading-[6rem] xl:text-7xl'>
            A National Pre-launch One Day Seminar
          </p>

          <div className='pt-5! flex justify-center'>
            <span className='main-description text-muted-foreground text-center! font-normal leading-snug'>on</span>
          </div>

          <div className='text-center text-xl font-bold tracking-wide sm:text-2xl lg:text-3xl xl:text-7xl'>
            <h1 className='leading-tight'>
              “The Hahnemann First - Honouring the Origin. <br />
              Advancing the Practice.”
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
        </div> */}

        <div className='order-2 space-y-6 py-6 lg:order-1 lg:col-span-7 lg:py-16'>
          {/* Title */}
          <div className='text-center'>
            <h1 className='text-xl leading-relaxed sm:text-xl sm:leading-relaxed md:text-2xl md:leading-snug lg:text-3xl lg:leading-normal xl:text-5xl xl:leading-[4rem] 2xl:text-6xl 2xl:leading-[4.5rem]'>
              <span className='font-bold'>S</span>
              <span className='font-medium'>amuel</span> <span className='font-bold'>H</span>
              <span className='font-medium'>ahnemann</span> <span className='font-bold'>A</span>
              <span className='font-medium'>cademy for</span> <span className='font-bold'>H</span>
              <span className='font-medium'>omeopathy</span> - <span className='font-bold'>SHAH</span>
            </h1>
          </div>

          {/* Welcome */}
          <div className='flex justify-center pt-2'>
            <span className='main-description text-muted-foreground text-center'>welcomes you</span>
          </div>

          {/* Seminar Title */}
          <p className='text-center font-serif text-xl font-bold leading-relaxed tracking-wide text-amber-500 sm:text-xl sm:leading-relaxed md:text-2xl md:leading-snug lg:text-3xl lg:leading-[3.5rem] xl:text-5xl xl:leading-[4.5rem]'>
            A National Pre-launch <br /> One Day Seminar
          </p>

          {/* On */}
          <div className='flex justify-center'>
            <span className='main-description text-muted-foreground text-center'>on</span>
          </div>

          {/* Quote */}
          <div className='text-center'>
            <h2 className='text-xl font-bold leading-relaxed tracking-wide sm:text-lg sm:leading-relaxed md:text-xl md:leading-snug lg:text-2xl lg:leading-normal xl:text-4xl xl:leading-[3.5rem] 2xl:text-5xl 2xl:leading-[4.5rem]'>
              “The Hahnemann First – Honouring the Origin.
              <br className='hidden sm:block' />
              Advancing the Practice.”
            </h2>
          </div>

          {/* CTA */}
          <div className='flex justify-center pt-6'>
            <Link href={`${routes.home}#event-registration-form`}>
              <CustomButton
                aria-label='Register Now'
                classNameExtra='
          bg-white
          text-mainColor
          hover:bg-secondaryColor
          hover:text-white
          px-6
          py-2
          text-sm
          sm:text-base
          lg:text-lg
        '
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
