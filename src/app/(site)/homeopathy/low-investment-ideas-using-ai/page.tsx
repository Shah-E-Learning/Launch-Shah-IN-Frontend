// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import HomeopathicTreatmentCourseView from '../_components/launching-your-homeopathy-clinic/page'
import HeroSection from '../_components/low-investment-ideas-using-ai/hero-section'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Low Investment Ideas using AI'
}

const HomeopathicTreatmentCourse = () => {
  return (
    <div>
      <HeroSection />
      <HomeopathicTreatmentCourseView />
    </div>
  )
}

export default HomeopathicTreatmentCourse
