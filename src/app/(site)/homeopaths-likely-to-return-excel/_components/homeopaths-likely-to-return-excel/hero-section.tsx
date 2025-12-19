'use client'

// ** Next.js and Internationalization Imports
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// ** Custom Component Imports
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Application Service, Constants, and Type Imports
import { routes } from '@/constants/routes'

// ** Application Utility Functions
import { cn } from '@/lib/utils'

// ** Assets Imports
import ImgBasicIntro from '@images/allopathic/ImgBannerDoc.png'
import ImgRepertoryOne from '@images/homeopathic/repertory/ImgRepertoryOne.png'

const HeroCard = () => {
  const t = useTranslations('homeopathyLikelyToReturnExcel.heroSection')

  return (
    <div
      className={`container relative z-10 grid grid-cols-1 flex-col justify-center rounded-2xl bg-mainColor to-transparent px-4 text-white md:px-6 lg:grid-cols-12 lg:rounded-[50px] lg:px-16`}
    >
      {/* Left Content */}
      <div className={`order-2 space-y-2 py-4 lg:order-1 lg:col-span-8 lg:py-8`}>
        {/* Title */}
        {/* <TextAnimate
          startOnView={false}
          animation='slideLeft'
          as='h1'
          className={cn(`banner-text tracking-wide max-w-2xl`)}
        >
          {t('title')}
        </TextAnimate> */}
        <h1 className='banner-text'>{t('title')}</h1>{' '}
        <p
          className={cn('main-description text-muted-foreground mt-0 max-w-3xl py-3 font-normal !leading-snug lg:py-6')}
        >
          {t('description')}
        </p>
        {/*  Button */}
        <div className='w-max'>
          <Link prefetch={false} href={`${routes.home}#event-registration-form`} aria-label='clinical-diagnosis'>
            <CustomButton
              aria-label='Get started with allopath'
              classNameExtra=' font-semibold bg-white text-mainColor hover:bg-teal-50'
              className='mt-5'
            >
              {t('getStartedButton')}
            </CustomButton>
          </Link>
        </div>
      </div>

      {/* Right Image */}

      <div
        className={`relative order-1 flex items-center justify-center pt-5 text-center lg:order-2 lg:col-span-4 lg:pt-0 xl:items-end`}
      >
        <div className='relative'>
          <Image
            src={ImgBasicIntro}
            alt='Medical Professional'
            width={1000}
            height={1000}
            draggable={false}
            priority
            className='user-select-none relative max-w-[200px] animate-hero-image object-contain lg:max-w-full'
          />
          {/* // className='object-contain w-full h-auto max-w-[200px] lg:max-w-[500px] xl:max-w-[2000px] 2xl:max-w-[900px] self-end' */}
          <Image
            src={ImgRepertoryOne}
            alt='Medical Professional'
            width={500}
            height={500}
            draggable={false}
            className='user-select-none absolute bottom-0 right-5 h-16 w-16 translate-x-1/2 transform object-cover xl:bottom-20 xl:right-10 xl:h-32 xl:w-32'
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <ScreenWrapper className='bg-white py-4 lg:py-8'>
      <HeroCard />
    </ScreenWrapper>
  )
}

export default HeroSection
