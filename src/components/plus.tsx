import React from 'react'

interface PlusProps {
  height?: string | number
  width?: string | number
}

const Plus: React.FC<PlusProps> = ({ height = 32, width = 32 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={typeof width === 'number' ? width : '32'}
      height={typeof height === 'number' ? height : '32'}
      fill='white'
      className={typeof width === 'string' ? `w-${width} h-${height}` : undefined}
      viewBox='0 0 24 24'
    >
      <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
    </svg>

    // <svg
    //   xmlns='http://www.w3.org/2000/svg'
    //   width={typeof width === 'number' ? width : '32'}
    //   height={typeof height === 'number' ? height : '32'}
    //   viewBox='0 0 31 32'
    //   fill='none'
    //   className={typeof width === 'string' ? `w-${width} h-${height}` : undefined}
    // >
    //   <path
    //     fillRule='evenodd'
    //     clipRule='evenodd'
    //     d='M23.2298 6.56806L5.85547 23.9424L7.3447 25.4316L24.719 8.05729L23.2298 6.56806Z'
    //     fill='white'
    //   />
    //   <path
    //     fillRule='evenodd'
    //     clipRule='evenodd'
    //     d='M23.9706 8.80223C20.4679 12.3049 14.5269 12.0865 11.2427 8.80223L10.498 8.05762L11.9873 6.56839L12.7319 7.313C15.2249 9.80597 19.8335 9.96085 22.4814 7.313L23.226 6.56839L24.7152 8.05762L23.9706 8.80223Z'
    //     fill='white'
    //   />
    //   <path
    //     fillRule='evenodd'
    //     clipRule='evenodd'
    //     d='M22.4831 7.31279C18.9804 10.8155 19.1989 16.7565 22.4831 20.0407L23.2277 20.7853L24.7169 19.2961L23.9723 18.5515C21.4784 16.0575 21.3245 11.4499 23.9723 8.80202L24.7169 8.0574L23.2277 6.56818L22.4831 7.31279Z'
    //     fill='white'
    //   />
    // </svg>
  )
}

export default Plus
