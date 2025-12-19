'use client'

import { JSX, useEffect, useRef, useState } from 'react'

interface BoxRevealProps {
  children: JSX.Element
  width?: 'fit-content' | '100%'
  boxColor?: string
  duration?: number
}

export const BoxReveal = ({ children, width = 'fit-content', duration = 500 }: BoxRevealProps) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`relative ${width === '100%' ? 'w-full' : 'w-fit-content'} overflow-hidden`}>
      {/* Main content */}
      <div
        className={`transition-all  ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } duration-${duration} delay-100 ease-out`}
      >
        {children}
      </div>

      {/* Background box */}
      {/* <div
        className={`absolute inset-0 z-20 bg-[${boxColor}] transition-all ${
          isInView ? 'translate-x-0' : 'translate-x-full'
        } duration-${duration} ease-in`}
        style={{
          top: '4px',
          bottom: '4px',
          left: '0',
          right: '0'
        }}
      /> */}
    </div>
  )
}
