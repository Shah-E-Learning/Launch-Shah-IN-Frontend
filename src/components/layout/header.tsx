'use client'

// ** Next Imports
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

// ** Constants

// ** Assets
import ScreenWrapper from '@components/wrapper/screen-wrapper'
import ImgMainLogo from '@images/sh-icon-mh.png'

export default function MainHeader() {
  // ** State to manage the sheet open/close state
  const [stickyMenu, setStickyMenu] = useState(false)

  const handleStickyMenu = () => {
    if (window.scrollY >= 50) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu)

    return () => {
      window.removeEventListener('scroll', handleStickyMenu)
    }
  }, [])

  return (
    <header
      className={`sticky left-0 top-0 z-50 py-4 pb-4 pt-2.5 transition-all duration-300 ease-in-out ${'bg-white'} ${stickyMenu ? 'bg-white! shadow-md' : ''}`}
    >
      <ScreenWrapper>
        <div className='flex items-center justify-center'>
          {/* Logo */}
          <div className='shrink-0'>
            <Link prefetch={false} href='/' className='flex items-center' aria-label='Samuel Hahnemann'>
              <Image src={ImgMainLogo} alt='Main Logo' width={350} height={94} className='max-h-16 w-auto' priority />
            </Link>
          </div>
        </div>
      </ScreenWrapper>
    </header>
  )
}
