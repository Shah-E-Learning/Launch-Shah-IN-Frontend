'use client'

import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [showButton, setShowButton] = useState<boolean>(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='fixed bottom-2 right-5 z-50'>
      {showButton && (
        <button
          type='button'
          className='scroll-btn hover:bg-accent backdrop-opacity-3 transform animate-bounce cursor-pointer rounded-full bg-buttonColor p-2 text-white transition-all duration-1000 ease-in-out hover:scale-110'
          data-testid={'scrollTop'}
          onClick={scrollToTop}
        >
          <ArrowUp fontSize={'1.5rem'} />
        </button>
      )}
    </div>
  )
}
