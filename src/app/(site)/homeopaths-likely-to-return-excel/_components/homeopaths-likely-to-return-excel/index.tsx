'use client'

// ** React and Core Library Imports
import { useEffect } from 'react'

// ** Next.js and Internationalization Imports
import { usePathname } from 'next/navigation'

// ** Custom Component Imports
import ListItems from '@/components/cards/list-items'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const ShahCommunitiesView = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 200)
      }
    }
  }, [pathname])

  const ShahCommunitiesData = {
    title: 'The “Samuel Hahnemann” Communities – \nA unique Concept:',
    items: [
      {
        name: `There will be a closed community for each of the four individual groups of homeopaths, allowing members to discuss their challenges and support each other's growth. This initiative is based on the principles of "Sharing is Caring" and "United we win, divided we fall."`,
        name1: `Additionally, there will be an open “Samuel Hahnemann's Applied Homeopathy (SHAH)” community for all homeopaths from these four groups, facilitating strict homeopathic communications. The purpose of forming the Samuel Hahnemann community is to build collective trust and support each other to achieve shining success in their homeopathic careers. Solving case related clinical doubts and encouraging healthy homeopathic communication in the group amongst like-minded people to achieve the higher purpose of existence.`
      },
      {
        name: `Students will have lifetime access to these homeopathic communities, depending on their individual situations within the Samuel Hahnemann's Applied Homeopathy (SHAH) course.`
      },
      {
        name: `The Samuel Hahnemann communities will have four specific group centric and one general community as per the following:`,
        itemTopic: 'font-bold !text-4xl',
        subtopic: [
          {
            sub_name: `Preventing and offering a respectful return for homeopaths doing illegal allopathic (GP) practice (CLOSED GROUP)`
          },
          {
            sub_name: `Empowering females to start/re-start independent homeopathic practice at any stage of their lives (ONLY FOR FEMAELS)`
          },
          {
            sub_name: `Enhancing clinical knowledge of Government & semi government homeopaths serving a mass population (CLOSED GROUP)`
          },
          {
            sub_name: `Homeopathic academicians and teachers who are not healers to start independent clinical practice (CLOSED GROUP)`
          },
          {
            sub_name: `Samuel Hahnemann's Applied Homeopathy Community (OPEN GROUP FOR ALL)`
          }
        ]
      }
    ]
  }

  return (
    <>
      <div id='shah-communities'>
        <ScreenWrapper className='py-4 lg:py-8'>
          <ListItems
            listTitle={ShahCommunitiesData?.title}
            romanText='III.'
            listArray={ShahCommunitiesData?.items || []}
            titleSize='tracking-wide break-word'
            variant='secondary'
          />
        </ScreenWrapper>
      </div>
    </>
  )
}

export default ShahCommunitiesView
