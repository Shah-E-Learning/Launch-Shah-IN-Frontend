// ** Next.js and Internationalization Imports
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// ** Custom Component Imports
import { Card } from '@/components/ui/card'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Assets Imports
import thankyouLogo from '@images/payment-success/ImgThankyou.svg'
import mainLogo from '@images/sh-icon-mh.png'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Payment Success'
}

export default function PaymentSuccess() {
  const t = useTranslations('paymentSuccess')

  return (
    <ScreenWrapper className='flex max-h-screen items-center justify-center p-4'>
      <Card className='w-full max-w-5xl rounded-3xl border-0 bg-lightBg p-5 md:p-8'>
        <div className='flex flex-col items-center text-center'>
          <div className='w-full space-y-6 md:max-w-2xl'>
            {/* Heart Icon */}
            <div className='flex justify-center'>
              <Image src={thankyouLogo} alt='Thank You' width={150} height={150} />
            </div>

            {/* Thank You Message */}
            <div className='space-y-4'>
              <h1 className='main-description-small font-bold text-mainColor lg:text-5xl'>
                {t('paymentSuccessTitle')}
              </h1>
              <p className='main-description-small font-medium text-mainColor'>{t('paymentSuccessSubTitle')}</p>
            </div>

            {/* Access Information */}
            <p className='main-description-small font-medium'>
              {t('paymentSuccessDescriptionOne')}
              <Link href='/my-order' className='text-secondaryColor hover:underline' aria-label='order-page'>
                {t('paymentSuccessDescriptionTwo')}
              </Link>{' '}
              {t('paymentSuccessDescriptionThree')}
            </p>

            {/* Contact Information */}
            <p className='main-description-small font-medium text-mainColor'>{t('paymentSuccessContactText')}</p>

            {/* All The Best */}
            <p className='main-description font-bold text-mainColor'>{t('paymentSuccessAllTheBest')}</p>

            {/* Logo */}
            <div className='flex justify-center pt-4'>
              <Image
                src={mainLogo} // Replace with your actual logo path
                alt='Main Logo'
                width={586}
                height={176}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </Card>
    </ScreenWrapper>
  )
}
