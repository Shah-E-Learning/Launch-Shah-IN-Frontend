// ** React and Core Library Imports

// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import BannerSection from './home/_components/event/banner'
import EventRegistration from './home/_components/event/event-registration-form'
import ModiBanner from './home/_components/event/modi-banner'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Inaugural Ceremony'
}

const Home = () => {
  return (
    <div>
      <BannerSection />
      <ModiBanner />
      {/* <HomeopathicPracticeCarousel /> */}
      <EventRegistration />
    </div>
  )
}

export default Home
