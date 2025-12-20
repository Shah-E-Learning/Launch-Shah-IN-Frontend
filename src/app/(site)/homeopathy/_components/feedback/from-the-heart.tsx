'use client'

// ** Custom Component Imports
import ListItems from '@components/cards/list-items'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const fromTheHeart = {
  title: `Empowering Homeopaths to Heal, Serve and Thrive:`,
  items: [
    {
      subtopicbullets: true,
      subtopic: [
        {
          sub_name: `Samuel Hahnemann’s Applied Homeopathy (SHAH) is a movement born to reignite the true spirit of homeopathy. `
        },
        {
          sub_name: `It empowers qualified homeopaths to begin or resume their independent practice with an investment of just ₹ 12,000 — using their available resources, honoring their life journey, and building a practice rooted in purpose. `
        },
        {
          sub_name: `SHAH transforms familiar knowledge into living clinical wisdom, helping practitioners heal with confidence and create a livelihood of up to ₹ 1,00,000 per month.`
        }
      ]
    }
  ]
}

const FromTheHeart = () => {
  return (
    <div>
      <ScreenWrapper className='py-4 lg:py-8'>
        <ListItems
          variant='secondary'
          listTitle={fromTheHeart?.title}
          listArray={fromTheHeart?.items || []}
          titleSize='tracking-wide break-word !text-center'
          mainStyle='!items-center justify-center'
        />
      </ScreenWrapper>
    </div>
  )
}

export default FromTheHeart
