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

// ** Assets Imports
import doctorImage from '@images/homeopathic/ImgClinicalTipsDoctor.png'

const HeroCard = () => {
  const t = useTranslations('homeopathicLawInvestmentIdeas.heroSection')

  return (
    <div className='relative overflow-hidden rounded-3xl'>
      <div className='container relative z-10 mx-auto grid grid-cols-1 gap-2 bg-lightBg to-transparent ps-4 md:ps-6 lg:grid-cols-12 lg:gap-8 lg:pe-0 lg:ps-16'>
        {/* Left Content */}
        <div className='order-2 space-y-5 pb-4 pt-2 lg:order-1 lg:col-span-7 xl:py-16'>
          {/* Title */}
          <div className='space-y-2'>
            <h1 className='banner-text max-w-4xl text-center lg:text-left'>{t('title')}</h1>
          </div>

          {/* Features List */}
          <p className='main-description text-muted-foreground max-w-3xl !text-center font-normal leading-tight lg:!text-justify'>
            {t('description')}

            <br />
            {t('description1')}
          </p>

          {/* CTA Button */}
          <div className='flex w-full justify-center lg:block lg:w-max'>
            <Link href={`${routes.home}#event-registration-form`} aria-label='homeopathic-organon-medicine'>
              <CustomButton classNameExtra='w-max font-semibold' className='lg:mt-7'>
                {t('getStartedButton')}
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        {/* <div
          className='xl:hidden block absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 group-hover:opacity-100 transition-all duration-300'
          style={{ backgroundImage: `url(${doctorImage.src})` }}
        ></div> */}

        <div className='relative order-1 flex w-full items-end justify-center pt-4 text-center lg:order-2 lg:col-span-5 lg:pt-0'>
          <Image
            src={doctorImage}
            alt='Medical Professional'
            layout='responsive'
            width={1000}
            height={1000}
            draggable={false}
            className='z-10 h-auto w-full max-w-[210px] animate-hero-image object-contain lg:max-w-[400px] lg:pr-16 xl:max-w-[600px]'
            priority
          />
          <div className='absolute right-0 hidden h-full w-1/2 bg-secondaryColor lg:flex'></div>
        </div>
        <div className='absolute top-0 flex h-1/3 w-full bg-secondaryColor lg:hidden lg:h-1/2'></div>
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
