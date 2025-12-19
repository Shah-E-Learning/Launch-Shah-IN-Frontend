import { NextConfig } from 'next'
import withNextIntl from 'next-intl/plugin'

const string = process.env.NEXT_PUBLIC_API_URL!
const urlString = string.slice(string.lastIndexOf('/') + 1)

// Updated frameSrc to include YouTube
const frameSrc =
  "'self' https://player.vdocipher.com https://api.razorpay.com https://www.youtube.com https://youtu.be https://www.google.com https://www.openstreetmap.org"
const contentSecurityValue = `frame-src ${frameSrc};`

const linodeString = process.env.NEXT_PUBLIC_AWS_LINK!
const awsUrl = linodeString?.replace(/^https?:\/\//, '').replace(/\/$/, '')

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: awsUrl
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run'
      },
      {
        protocol: 'https',
        hostname: 'example.com'
      },
      {
        protocol: 'https',
        hostname: urlString
      }
    ]
  },
  reactStrictMode: false,
  experimental: {
    ...(process.env.NODE_ENV === 'development'
      ? {
          serverActions: {
            allowedOrigins: ['localhost:18122', '*.inc1.devtunnels.ms']
          }
        }
      : {})
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityValue
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
      }
    ]
  }
}

export default withNextIntl()(nextConfig)
