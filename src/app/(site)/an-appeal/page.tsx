// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import AppealPage from './_components/an-appeal/appeal'
import AnAppealHero from './_components/an-appeal/hero-section'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'An Appeal'
}

const AnAppeal = () => {
  return (
    <>
      <AnAppealHero />
      <AppealPage />
    </>
  )
}

export default AnAppeal
