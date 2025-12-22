

'use client'

import { useEffect } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

const isProduction = process.env.NEXT_PUBLIC_NODE_ENV! === 'production'

const AnalyticsListener = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const fullPath = pathname + (searchParams ? `?${searchParams.toString()}` : '')
    if (!!isProduction && typeof window.gtag === 'function') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: fullPath
      })
    }
  }, [pathname, searchParams])

  return null
}

export const logEvent = (name: string, params?: Record<string, any>) => {
  if (!!isProduction && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

export default AnalyticsListener
