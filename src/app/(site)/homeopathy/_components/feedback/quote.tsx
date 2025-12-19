'use client'

// ** Next.js and Internationalization Imports
import { useTranslations } from 'next-intl'

// ** Custom Component Imports
import IcQuote from '@/components/svg/IcQuote'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const QuotePage = () => {
  const t = useTranslations('feedback.quotePage')

  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <ScreenWrapper className='relative rounded-xl bg-lightBg py-12 md:py-16'>
        {/* Top-left quote mark */}
        <div className='absolute left-4 top-4 opacity-80 md:left-8 md:top-8'>
          <IcQuote className='h-16 w-16 md:h-28 md:w-28' />
        </div>

        {/* Bottom-right quote mark */}
        <div className='absolute bottom-4 right-4 rotate-180 opacity-80 md:bottom-8 md:right-8'>
          <IcQuote className='h-16 w-16 md:h-28 md:w-28' />
        </div>

        <div className='my-4 flex justify-center'>
          <p className='text-muted-foreground main-description max-w-8xl mt-0 font-medium !leading-snug text-mainColor md:!text-center'>
            {t('description')}
            <br />
            {t('description1')}
          </p>
        </div>
      </ScreenWrapper>
    </ScreenWrapper>
  )
}

export default QuotePage
