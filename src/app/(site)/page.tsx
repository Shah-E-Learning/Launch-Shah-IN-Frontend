// ** React and Core Library Imports

// ** Next.js and Internationalization Imports
import { Metadata } from 'next'

// ** Custom Component Imports
import BannerSection from './home/_components/event/banner'
import EventRegistration from './home/_components/event/event-registration-form'
import ModiBanner from './home/_components/event/modi-banner'
import CardSection from './home/_components/event/about'
import { Separator } from '@components/ui/separator'

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
      <CardSection />
      <Separator orientation='horizontal' className='rounded-md bg-secondaryColor' />
      <EventRegistration />
      {/* <Separator orientation='horizontal' className='my-5 rounded-md bg-secondaryColor' /> */}

    </div>
  )
}

export default Home
