// ** Next.js and Internationalization Imports
import { MetadataRoute } from 'next'

// ** Application Service, Constants, and Type Imports
import { routes } from '@/constants/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITEMAP_URL || ''

  // ⚡ Only generate in production
  if (process.env.NODE_ENV !== 'production') {
    return []
  }

  // Flatten nested objects (like profile: { edit, view })
  const flatRoutes = Object.values(routes).flatMap(route => {
    if (typeof route === 'string') return [route]
    if (typeof route === 'object') return Object.values(route)

    return []
  })

  // Filter out dynamic routes like :id
  const cleanRoutes = flatRoutes.filter((path: any) => !path.includes(':'))

  return cleanRoutes.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8
  }))
}
