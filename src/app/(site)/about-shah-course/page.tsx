// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import BasicIntroAboutUs from './_components/about-us/basic-intro'
import OurMissionOne from './_components/about-us/our-mission-one'
import PrefacePage from './_components/about-us/preface'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'The Mission'
}

const AboutUsPage = () => {
  return (
    <>
      <BasicIntroAboutUs />
      <OurMissionOne />
      <PrefacePage />
    </>
  )
}

export default AboutUsPage
