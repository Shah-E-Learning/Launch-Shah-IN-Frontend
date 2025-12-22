'use client'

// ** Next Imports
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

// ** Constants

// ** Assets
import ScreenWrapper from '@components/wrapper/screen-wrapper'
import ImgMainLogo from '@images/sh-icon-mh.png'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@components/ui/sheet'
import { Menu } from 'lucide-react'

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
        <div className='flex flex-row items-center justify-between gap-5'>
          {/* Logo - Right Side */}
          <div className='shrink-0'>
            <Link prefetch={false} href='/' className='flex items-center' aria-label='Samuel Hahnemann'>
              <Image src={ImgMainLogo} alt='Main Logo' width={350} height={94} className='max-h-20 w-auto' priority />
            </Link>
          </div>
          {/* Navigation Links - Desktop */}
          <nav className='hidden items-center gap-6 lg:flex lg:gap-8'>
            <Link
              href='/#inaguration'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Inaguration
            </Link>
            <Link
              href='/#topics'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Topics
            </Link>
            <Link
              href='/#faculties'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Faculties
            </Link>
            <Link
              href='/#event-registration-form'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Registration
            </Link>
            <Link
              href='/#privileges'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Privileges
            </Link>
            <Link
              href='/#contact'
              className='text-xl font-semibold text-mainColor transition-colors duration-200 hover:text-secondaryColor'
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className='block lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <div className='cursor-pointer text-mainColor'>
                  <Menu className='h-8 w-8' />
                </div>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] border-secondaryColor bg-white'>
                <div className='mt-8 flex flex-col gap-6'>
                  <SheetClose asChild>
                    <Link
                      href='/#inaguration'
                      className='text-xl font-semibold text-mainColor hover:text-secondaryColor'
                    >
                      Inaguration
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/#topics' className='text-xl font-semibold text-mainColor hover:text-secondaryColor'>
                      Topics
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/#faculties' className='text-xl font-semibold text-mainColor hover:text-secondaryColor'>
                      Faculties
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href='/#event-registration-form'
                      className='text-xl font-semibold text-mainColor hover:text-secondaryColor'
                    >
                      Registration
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href='/#privileges'
                      className='text-xl font-semibold text-mainColor hover:text-secondaryColor'
                    >
                      Privileges
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/#contact' className='text-xl font-semibold text-mainColor hover:text-secondaryColor'>
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* <p className='text-center text-lg font-semibold'>
            A National Pre-launch One Day Seminar is a Non-Commercial Academic Initiative from SHAH
          </p> */}
        </div>
      </ScreenWrapper>
    </header>
  )
}
