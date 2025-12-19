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
      className={`py-4 pb-4 pt-2.5 transition-all duration-300 ease-in-out ${'bg-white'} ${stickyMenu ? 'bg-white! shadow-md' : ''}`}
    >
      <ScreenWrapper>
        <div className='flex flex-col items-center justify-center gap-5'>
          {/* Logo */}
          <div className='shrink-0'>
            <Link prefetch={false} href='/' className='flex items-center' aria-label='Samuel Hahnemann'>
              <Image src={ImgMainLogo} alt='Main Logo' width={350} height={94} className='max-h-20 w-auto' priority />
            </Link>
          </div>
          {/* <p className='text-center text-lg font-semibold'>
            A National Pre-launch One Day Seminar is a Non-Commercial Academic Initiative from SHAH
          </p> */}
        </div>
      </ScreenWrapper>
    </header>
  )
}
