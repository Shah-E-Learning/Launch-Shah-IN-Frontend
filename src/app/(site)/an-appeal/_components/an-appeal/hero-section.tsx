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
import ImgProfileStethoscope from '@images/ImgProfileStethoscope.png'

const AnAppealHero = () => {
  // ** i18
  const t = useTranslations('anAppeal.heroSection')

  return (
    <ScreenWrapper className='relative bg-white py-4 !text-center lg:py-8'>
      <h1 className='main-title my-5 font-extrabold text-mainColor'>{t('title')}</h1>

      <div className='mb-4 flex justify-center lg:mb-0'>
        <p className='main-description text-muted-foreground max-w-7xl py-0 !text-center font-medium !leading-snug lg:py-6'>
          {t('description')}
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-10'>
        <Link href={`${routes.home}#event-registration-form`} aria-label='case-studies'>
          <CustomButton aria-label='Get started with clinical diagnosis'>{t('getStartedButton')}</CustomButton>
        </Link>
      </div>

      <div
        className='absolute inset-0 block bg-contain bg-center bg-no-repeat opacity-20 transition-all duration-300 group-hover:opacity-100 xl:hidden'
        style={{ backgroundImage: `url(${ImgProfileStethoscope.src})` }}
      ></div>

      <div className='relative hidden h-[500px] justify-center xl:flex'>
        <Image
          src={ImgProfileStethoscope}
          alt='Medical Professional'
          width={500}
          height={988}
          className='absolute mt-10 !h-[700px] !w-[650px] bg-top align-bottom'
          priority
        />
      </div>
    </ScreenWrapper>
  )
}

export default AnAppealHero
