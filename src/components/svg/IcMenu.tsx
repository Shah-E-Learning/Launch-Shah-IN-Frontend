'use client'

import { motion, useAnimation } from 'motion/react'

interface IcMenuProps {
  width?: number | string
  height?: number | string
  color?: string
  className?: string
}

export default function IcMenu({ width = 30, height = 30, color = '#023535', className = '' }: IcMenuProps) {
  const controls = useAnimation()

  return (
    <div
      className='cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center'
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <motion.path
          d='M17 12H7'
          variants={{
            normal: { translateX: 0 },
            animate: {
              translateX: [0, 3, -3, 2, -2, 0],
              transition: {
                ease: 'linear',
                translateX: {
                  duration: 1
                }
              }
            }
          }}
          animate={controls}
        />
        <path d='M19 18H5' />
        <path d='M21 6H3' />
      </svg>
    </div>
  )
}
