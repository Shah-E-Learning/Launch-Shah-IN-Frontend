'use client'

// Next.js imports
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Constants and assets
import { links } from '@/constants/config'
import { routes } from '@/constants/routes'

import { cn } from '@/lib/utils'

// SVG icon imports
import IcFacebook from '@/components/svg/IcFacebook'
import IcInstagram from '@/components/svg/IcInstagram'
import IcLinkedIn from '@/components/svg/IcLinkedIn'
import IcYoutube from '@/components/svg/IcYoutube'

import { Separator } from '@components/ui/separator'
import logo from '@images/ImgCardBg.png'
import moment from 'moment'
import ScreenWrapper from '@components/wrapper/screen-wrapper'
import { useMediaQuery } from '@hooks/use-media'

type FooterLink = {
  label: string
  link: string
}

const Homeopathic: FooterLink[] = [
  { label: 'Launching Your Homeopathy Clinic', link: routes.homeopathyLaunchingYourHomeopathyClinic },
  { label: 'Low Investment Ideas using AI', link: routes.homeopathyLowInvestmentIdeaUsingAI },
  { label: 'Homeopaths likely to return/excel', link: `${routes.homeopathicHomeopathsLikelyToReturnExcel}` }
]

const OtherUsefull: FooterLink[] = [
  { label: 'National Pre-launch Seminar', link: routes.home },
  { label: 'About SHAH Course', link: routes.theMission },
  { label: 'An Appeal to Indian Homeopaths', link: routes.homeopathicAnAppeal }
]

const Footer = () => {
  const pathname = usePathname()
  const smBreakpoint = useMediaQuery('(max-width: 1200px)')

  // Simplified isActiveLink function: only checks if pathname matches the link
  const isActiveLink = (path: string) => {
    return pathname === path
  }

  return (
    <ScreenWrapper className='bg-mainColor pb-4 pt-12 text-white'>
      <div className='flex flex-col items-start justify-start gap-2 md:flex-row md:items-center'>
        <Link href={routes.home} aria-label='Home' className='self-center md:self-start' prefetch={false}>
          <Image
            src={logo}
            alt='Main Logo'
            width={1000}
            height={1000}
            className='mb-4 h-28 w-20 shrink-0 mix-blend-plus-lighter md:h-[100px] md:w-[400px] lg:h-auto lg:w-[250px]'
            loading='lazy'
          />
        </Link>
        <Separator
          orientation='vertical'
          className='mx-4 mb-1 hidden h-[80px] w-auto rounded-md border-2 bg-white md:block'
        />
        <p className='text-xl leading-relaxed tracking-wide opacity-90 md:text-2xl lg:text-3xl'>
          The SHAH Course offers a structured, practice-oriented, and inspiring pathway for qualified homeopaths to
          confidently develop their professional practice by addressing core clinical challenges. It aims to bring back
          and empower 100,000 Indian practitioners to serve humanity with competence, achieve financial independence,
          and earn renewed social respect through successful homeopathic practice.
        </p>
      </div>
      <Separator orientation='horizontal' className='my-5 rounded-md bg-[#ffffff52]' />
      {/* <div className='my-8 grid grid-cols-1 gap-8 xl:grid-cols-12'>
       
         

        <div className='col-span-4'>
          <span className={cn('text-xl font-semibold md:text-2xl lg:text-3xl')}>Be a Proud Homeopath</span>
          <ul className='mt-4 space-y-4'>
            {Homeopathic?.map((item, index) => (
              <li key={index}>
                <Link
                  prefetch={false}
                  href={item.link}
                  aria-label='Allopathic'
                  className={cn(
                    'animated-underline text-xl opacity-75 transition-opacity hover:opacity-100 md:text-2xl lg:text-3xl',
                    isActiveLink(item.link) && 'font-semibold text-secondaryColor opacity-100'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-span-4'>
          <div>
            <span className='text-xl font-semibold md:text-2xl lg:text-3xl'>Useful Links</span>
            <ul className='mt-4 space-y-4'>
              {OtherUsefull?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    aria-label='about'
                    className={cn(
                      'animated-underline text-xl opacity-75 transition-opacity hover:opacity-100 md:text-2xl lg:text-3xl',
                      isActiveLink(item.link) && 'font-semibold text-secondaryColor opacity-100'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-4'>
          <div className=''>
            <h3 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Follow Us</h3>
            <div className='mt-4 flex items-center space-x-4'>
              <Link
                href={links.facebook}
                className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
                aria-label='Facebook'
                target='_blank'
              >
                <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-facebookColor transition-transform duration-300 group-hover:scale-100'></span>
                <span className='relative z-10'>
                  <IcFacebook width={20} height={20} color='white' />
                  <span className='sr-only'>Facebook</span>
                </span>
              </Link>
              <Link
                href={links.linkedIn}
                className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
                aria-label='LinkedIn'
                target='_blank'
              >
                <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-linkedinColor transition-transform duration-300 group-hover:scale-100'></span>
                <span className='relative z-10'>
                  <IcLinkedIn width={20} height={20} color='white' />
                  <span className='sr-only'>LinkedIn</span>
                </span>
              </Link>
              <Link
                href={links.instagram}
                className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
                aria-label='Instagram'
                target='_blank'
              >
                <span className='bg-linear-to-bl absolute inset-0 scale-0 transform from-purple-500 via-pink-500 to-yellow-500 transition-transform duration-300 group-hover:scale-100'></span>
                <span className='relative z-10'>
                  <IcInstagram width={20} height={20} color='white' />
                  <span className='sr-only'>Instagram</span>
                </span>
              </Link>
              <Link
                href={links.youTube}
                className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
                aria-label='YouTube'
                target='_blank'
              >
                <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-youtubeColor transition-transform duration-300 group-hover:scale-100'></span>
                <span className='relative z-10'>
                  <IcYoutube width={20} height={20} color='white' />
                  <span className='sr-only'>YouTube</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className='flex flex-col items-center justify-evenly gap-4 space-y-2 p-6 lg:flex-row'>
        <div className='flex min-w-[250px] max-w-[400px] flex-col items-center justify-start gap-2 text-center'>
          <span className={cn('text-xl font-semibold md:text-2xl lg:text-3xl')}>Be a Proud Homeopath</span>
          <ul className='mt-4 flex flex-col items-center justify-start gap-2 space-y-4'>
            {Homeopathic?.map((item, index) => (
              <li key={index}>
                <Link
                  prefetch={false}
                  href={item.link}
                  aria-label='Allopathic'
                  className={cn(
                    'animated-underline text-xl opacity-75 transition-opacity hover:opacity-100 md:text-2xl lg:text-3xl',
                    isActiveLink(item.link) && 'font-semibold text-secondaryColor opacity-100'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {!smBreakpoint && (
          <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-secondaryColor`} />
        )}

        <div className='flex min-w-[250px] max-w-[400px] flex-col items-center justify-center gap-2 text-center'>
          <span className='text-xl font-semibold md:text-2xl lg:text-3xl'>Useful Links</span>
          <ul className='mt-4 flex flex-col items-center justify-start gap-2 space-y-4'>
            {OtherUsefull?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  aria-label='about'
                  className={cn(
                    'animated-underline text-xl opacity-75 transition-opacity hover:opacity-100 md:text-2xl lg:text-3xl',
                    isActiveLink(item.link) && 'font-semibold text-secondaryColor opacity-100'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {!smBreakpoint && (
          <Separator orientation='vertical' className={`me-4 h-40 w-1 border-2 !text-secondaryColor`} />
        )}
        <div className='max-w-[400px]text-center flex min-w-[250px] flex-col items-center justify-start gap-2'>
          <h3 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Follow Us</h3>
          <div className='mt-4 flex items-center space-x-4'>
            <Link
              href={links.facebook}
              className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
              aria-label='Facebook'
              target='_blank'
            >
              <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-facebookColor transition-transform duration-300 group-hover:scale-100'></span>
              <span className='relative z-10'>
                <IcFacebook width={20} height={20} color='white' />
                <span className='sr-only'>Facebook</span>
              </span>
            </Link>
            <Link
              href={links.linkedIn}
              className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
              aria-label='LinkedIn'
              target='_blank'
            >
              <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-linkedinColor transition-transform duration-300 group-hover:scale-100'></span>
              <span className='relative z-10'>
                <IcLinkedIn width={20} height={20} color='white' />
                <span className='sr-only'>LinkedIn</span>
              </span>
            </Link>
            <Link
              href={links.instagram}
              className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
              aria-label='Instagram'
              target='_blank'
            >
              <span className='bg-linear-to-bl absolute inset-0 scale-0 transform from-purple-500 via-pink-500 to-yellow-500 transition-transform duration-300 group-hover:scale-100'></span>
              <span className='relative z-10'>
                <IcInstagram width={20} height={20} color='white' />
                <span className='sr-only'>Instagram</span>
              </span>
            </Link>
            <Link
              href={links.youTube}
              className='group relative overflow-hidden rounded-sm border p-1 transition-transform duration-300'
              aria-label='YouTube'
              target='_blank'
            >
              <span className='bg-linear-to-bl absolute inset-0 scale-0 transform bg-youtubeColor transition-transform duration-300 group-hover:scale-100'></span>
              <span className='relative z-10'>
                <IcYoutube width={20} height={20} color='white' />
                <span className='sr-only'>YouTube</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright and Social Icons */}
      <div className='font-Jost flex w-full flex-col items-center justify-between gap-4 border-t border-[#ffffff52] md:flex-row'>
        <div className='font-Jost flex w-full flex-col items-center justify-between gap-4 pt-4 md:container md:flex-row'>
          <p className='md:text-md font-Jost text-justify font-normal text-[#c8c8c8]'>
            © {moment().format('YYYY')} Samuel Hahnemann Academy for Homeopathy LLP | All Rights Reserved
          </p>
          <div className='gap-4'>
            <div className='flex flex-wrap justify-center gap-2 text-base font-normal tracking-widest'>
              <Link
                prefetch={false}
                href={links.footerSamuelhahnemannMain}
                target='_blank'
                className='hover:underline'
                aria-label='Samuel Hahnemann'
              >
                www.samuelihahnemann.org
              </Link>
              <span className='hidden md:inline'>|</span>
              <Link
                prefetch={false}
                href={links.footerDrKrutikShahMain}
                target='_blank'
                className='hover:underline'
                aria-label='Dr. Krutik Shah'
              >
                www.drkrulkshah.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default Footer
