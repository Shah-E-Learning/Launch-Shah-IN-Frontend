// ** React and Core Library Imports
import React from 'react'

// ** Custom Component Imports
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const SampleVideo = () => {
  return (
    <ScreenWrapper className='aspect-video w-full overflow-hidden rounded-xl py-4 lg:py-8'>
      <iframe
        src={'https://www.youtube.com/embed/ND-e6PsPENM?si=8JydD7cz3lmyPsGY?autoplay=1&mute=1'}
        className='aspect-video h-full w-full rounded-xl shadow-md'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </ScreenWrapper>
  )
}

export default SampleVideo
