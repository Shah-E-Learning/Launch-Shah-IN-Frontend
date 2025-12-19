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
import homeopaticBasicBg from '@images/homeopathic/homeopaticBasicBg.png'

const BasicIntroAboutUs = () => {
  const t = useTranslations('aboutUsPage.basicIntro')

  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <div className='relative overflow-hidden rounded-3xl text-mainColor'>
        <div className='container relative z-10 mx-auto grid gap-8 px-4 md:px-6 lg:px-16 xl:grid-cols-1'>
          {/* Left Content */}
          <div className='space-y-6 py-4 lg:py-16'>
            {/* Title */}
            <div className='space-y-2'>
              <h1 className='banner-text max-w-2xl text-mainColor'>{t('title')}</h1>
            </div>

            {/* Features List */}
            <p className='main-description text-muted-foreground max-w-3xl font-normal leading-tight'>
              {t('description')}
            </p>

            {/* CTA Button */}
            <div className='w-max'>
              <Link
                prefetch={false}
                href={`${routes.home}#event-registration-form`}
                aria-label='important-clinical-tips'
              >
                <CustomButton
                  aria-label='Get Started'
                  classNameExtra='bg-mainColor text-white hover:bg-secondaryColor font-semibold '
                  className='mt-5'
                >
                  {t('getStartedButton')}
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={homeopaticBasicBg}
          priority
          fill
          alt='Seminar Background'
          className='object-cover opacity-40 filter 2xl:opacity-100'
        />
      </div>
    </ScreenWrapper>
  )
}

export default BasicIntroAboutUs
