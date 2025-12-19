// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import BoxDesign from './_components/homeopaths-likely-to-return-excel/box-design'
import HeroSection from './_components/homeopaths-likely-to-return-excel/hero-section'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Homeopaths likely to return/excel'
}

const ShahCommunitiesPage = () => {
  return (
    <>
      <HeroSection />
      <BoxDesign />
    </>
  )
}

export default ShahCommunitiesPage
