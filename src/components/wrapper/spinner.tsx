'use client'

import { siteConfig } from '@/config/site'
import Image from 'next/image'

const FallbackSpinner = () => {
  return (
    <div className='fixed inset-0 z-[3000] h-dvh bg-white'>
      <div className='relative z-[3999] flex h-full w-full items-center justify-center'>
        <Image
          src={siteConfig.images.mainLogo}
          alt='Tonny Logo'
          width={200}
          height={200}
          priority
          className='select-none'
        />
      </div>
    </div>
  )
}

export default FallbackSpinner
