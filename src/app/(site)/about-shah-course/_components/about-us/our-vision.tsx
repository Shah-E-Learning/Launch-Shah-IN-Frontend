'use client'

// ** Next.js and Internationalization Imports
import { useTranslations } from 'next-intl'

const OurVision = () => {
  const t = useTranslations('aboutUsPage.ourVision')

  return (
    <div className='!mt-11'>
      <h1 className='main-title mb-0 mb-6 font-bold leading-tight text-mainColor'>{t('title')}</h1>
      <div className='my-4 flex justify-center'>
        <p className='text-muted-foreground main-description-small max-w-9xl mt-0 font-medium !leading-[50px] text-mainColor'>
          {t('description')}
        </p>
      </div>
    </div>
  )
}

export default OurVision
