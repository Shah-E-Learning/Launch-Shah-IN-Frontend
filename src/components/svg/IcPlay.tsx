import React from 'react'

interface IcPlayProps {
  width?: number | string
  height?: number | string
  color?: string
  className?: string
}

export default function IcPlay({ width = 46, height = 46, color = '#023535', className = '' }: IcPlayProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      viewBox='0 0 54 54'
      fill='none'
    >
      <rect x='0.5' y='0.5' width='53' height='53' rx='9.5' stroke={color} />
      <g clipPath='url(#clip0_592_7881)'>
        <path
          d='M32.7413 28.9164L32.7425 28.9157C33.0767 28.7214 33.356 28.4421 33.5503 28.108L33.5504 28.1078C34.167 27.0463 33.7977 25.6989 32.7424 25.0859L32.7413 25.0853L25.6249 20.9757C25.6247 20.9756 25.6244 20.9754 25.6242 20.9753C25.2875 20.7797 24.9055 20.679 24.5178 20.679C23.2906 20.679 22.3002 21.6671 22.3002 22.8906V31.1111C22.3002 31.4991 22.4011 31.8813 22.5969 32.2182C23.2103 33.274 24.5636 33.6421 25.6242 33.0264C25.6244 33.0263 25.6246 33.0262 25.6247 33.026L32.7413 28.9164ZM12.0723 27.0008C12.0723 18.7551 18.7551 12.0723 27.0008 12.0723C35.2466 12.0723 41.9294 18.7551 41.9294 27.0008C41.9294 35.2466 35.2466 41.9294 27.0008 41.9294C18.7551 41.9294 12.0723 35.2466 12.0723 27.0008Z'
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_592_7881'>
          <rect width='30.8571' height='30.8571' fill='white' transform='translate(11.5723 11.5723)' />
        </clipPath>
      </defs>
    </svg>
  )
}
