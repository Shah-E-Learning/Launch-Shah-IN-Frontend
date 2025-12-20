// ** React and Core Library Imports
import { ReactNode } from 'react'

// ** Next.js and Internationalization Imports
import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

// ** Custom Component Imports
import NextProgress from '@components/wrapper/next-progress'
import ScrollTop from '@components/wrapper/scroll-to-top'

// ** Style Imports
import './globals.css'
import { Toaster } from 'sonner'

export type ChildrenType = {
  children: ReactNode
}

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    default: 'Samuel Hahnemann',
    template: '%s | Samuel Hahnemann'
  },

  description:
    'Samuel Hahnemann is a platform that provides a wide range of courses and services in the field of homeopathy and allopathy.',
  twitter: {
    card: 'summary_large_image'
  }
}

const RootLayout = async ({ children }: ChildrenType) => {
  const messages = await getMessages()

  const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production'

  return (
    <html lang='en'>
      <head>{!isProduction && <meta name='robots' content='noindex, nofollow' />}</head>

      <body className={`${darkerGrotesque.className}`}>
        <NextProgress />
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position='top-right' duration={5000} richColors toastOptions={{ className: 'top-30! lg:top-35!' }} />
        </NextIntlClientProvider>
        <ScrollTop />
      </body>
    </html>
  )
}

export default RootLayout
