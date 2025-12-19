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
import ImgFeedbackMainBanner from '@images/feedback/ImgFeedbackMainBanner.png'
import doctorImage from '@images/feedback/ImgMainBanner.png'

const BasicIntroFeedback = () => {
  const t = useTranslations('feedback.basicIntro')

  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <div className='relative overflow-hidden rounded-3xl bg-mainColor text-white'>
        <div className='container relative z-10 mx-auto grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-12 lg:px-16'>
          {/* Left Content */}
          <div className='order-2 mb-4 flex flex-col justify-center space-y-5 lg:order-1 lg:col-span-7 lg:mb-0'>
            {/* Title */}
            <div className='space-y-2'>
              <h1 className='main-title max-w-2xl font-bold text-white'>{t('title')}</h1>
            </div>

            {/* Features List */}
            <p className='main-description text-muted-foreground max-w-3xl font-normal leading-tight'>
              {t('description')}
            </p>
            <p className='main-description text-muted-foreground max-w-3xl font-normal leading-tight'>
              {t('description1')}
            </p>
            <p className='main-description text-muted-foreground max-w-3xl font-normal leading-tight'>
              {t('description2')}
            </p>

            {/* CTA Button */}
            <div className='w-max'>
              <Link href={`${routes.home}#event-registration-form`} aria-label='important-clinical-tips'>
                <CustomButton
                  classNameExtra='bg-white text-mainColor hover:bg-secondaryColor font-semibold '
                  className='lg:mt-5'
                >
                  {t('getStartedButton')}
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className='relative order-1 flex w-full items-end justify-center pt-4 text-center lg:order-2 lg:col-span-5 lg:pt-0'>
            <Image
              src={doctorImage}
              alt='Medical Professional'
              layout='responsive'
              width={1000}
              height={1000}
              draggable={false}
              className='z-10 h-auto w-full max-w-[200px] object-contain lg:max-w-[400px] lg:pr-16 xl:max-w-[600px]'
              priority
            />
          </div>
        </div>
        <Image
          src={ImgFeedbackMainBanner}
          priority
          fill
          alt='Seminar Background'
          className='hidden object-cover filter lg:block'
        />
      </div>
    </ScreenWrapper>
  )
}

export default BasicIntroFeedback
