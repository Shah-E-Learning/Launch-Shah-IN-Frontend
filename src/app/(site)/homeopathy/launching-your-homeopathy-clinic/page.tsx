// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import HomeopathicPracticeCarousel from '../../home/_components/event/homeopathic-practice-carousel'
import FeedbackForm from '../_components/feedback/feedback-form'
import FromTheHeart from '../_components/feedback/from-the-heart'
import HeroSection from '../_components/launching-your-homeopathy-clinic/hero-section'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Launching Your Homeopathy Clinic'
}

const FeedBackPage = () => {
  return (
    <>
      <HeroSection />
      <FromTheHeart />
      <FeedbackForm />
      <div className='!mb-10'>
        <HomeopathicPracticeCarousel />
      </div>
    </>
  )
}

export default FeedBackPage
