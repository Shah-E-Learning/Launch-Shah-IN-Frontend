import React from 'react'

interface IcSelectedPlayProps {
  width?: number | string
  height?: number | string
  color?: string
  className?: string
}

export default function IcSelectedPlay({
  width = 46,
  height = 46,
  color = '#023535',
  className = ''
}: IcSelectedPlayProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      viewBox='0 0 54 54'
      fill='none'
    >
      <rect width='54' height='54' rx='10' fill={color} />
      <g clipPath='url(#clip0_592_7871)'>
        <path
          d='M27.0008 11.5723C18.479 11.5723 11.5723 18.479 11.5723 27.0008C11.5723 35.5227 18.479 42.4294 27.0008 42.4294C35.5227 42.4294 42.4294 35.5227 42.4294 27.0008C42.4294 18.479 35.5227 11.5723 27.0008 11.5723ZM32.4912 28.4834L25.3736 32.5937C24.554 33.0698 23.5053 32.7866 23.0292 31.9669C22.8785 31.7078 22.8002 31.4124 22.8002 31.1111V22.8906C22.8002 21.9444 23.5656 21.179 24.5178 21.179C24.8191 21.179 25.1145 21.2573 25.3736 21.408L32.4912 25.5182C33.3109 25.9944 33.5941 27.037 33.118 27.8566C32.9674 28.1158 32.7504 28.3328 32.4912 28.4834Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_592_7871'>
          <rect width='30.8571' height='30.8571' fill='white' transform='translate(11.5723 11.5723)' />
        </clipPath>
      </defs>
    </svg>
  )
}
