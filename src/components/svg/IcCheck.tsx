import React from 'react'

const IcCheck = ({
  className,
  stroke = 'white',
  fill = '#0FC2C0'
}: {
  className?: string
  stroke?: string
  fill?: string
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='28'
      viewBox='0 0 30 28'
      fill='none'
      className={`'w-4 h-4' ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.09398 12.8274L10.9271 16.0032L26.172 1.64165C27.8186 0.0904983 30.3409 2.24423 29.067 4.07769L13.7936 26.0684C13.0902 27.083 11.615 27.1688 10.7884 26.2692L1.09136 15.8984C-0.244634 14.4695 1.29216 12.097 3.09398 12.8274Z'
        stroke={stroke}
        strokeWidth='2'
        strokeMiterlimit='22.9256'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.3418 16.5845L12.1288 23.843L22.876 8.36914L11.5036 19.0827L5.3418 16.5845Z'
        fill={fill}
      />
    </svg>
  )
}

export default IcCheck
