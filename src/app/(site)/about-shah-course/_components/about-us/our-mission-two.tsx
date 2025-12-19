// ** React and Core Library Imports
import React from 'react'

// ** Next.js and Internationalization Imports
import Image from 'next/image'

// ** Application Utility Functions
import { cn } from '@/lib/utils'

// ** Assets Imports
import ListImage from '@images/about/ImgAboutOne.png'

const clinicalTipsData = {
  title: 'Our Mission',
  description:
    'Our mission is to deliver a comprehensive e-learning platform that combines expert-led content, modern technology, and interactive tools to make homeopathic education more effective, engaging, and practical. We aim to:',
  items: [
    {
      name: 'Provide structured courses designed for all levels of learners, from beginners to professionals.'
    },
    {
      name: `Foster critical thinking and practical application through case studies, real-world examples, and mentorship.`
    },
    {
      name: `Build a supportive global network for knowledge sharing, collaboration, and growth within the homeopathic community.`
    },
    {
      name: `Continuously innovate and adapt to advancements in education technology to enhance the learning experience.`
    }
  ]
}

const renderItems = (items: Array<{ name: string; subtopic?: Array<{ sub_name: string }> }>) =>
  items.map((method, index) => (
    <div key={index}>
      <li className='flex items-baseline gap-6'>
        <span className='main-description-small font-medium'>{index + 1}.</span>
        {/* <IcCheck className='shrink-0 w-4 h-4 sm:h-4 sm:w-4 md:h-6 md:w-6' stroke='white' /> */}
        <span className={cn('text-muted-foreground main-description-small font-medium !leading-snug text-mainColor')}>
          {method?.name?.split('■').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && <span style={{ color: 'purple' }}>■</span>}
            </React.Fragment>
          ))}
        </span>
      </li>

      {method?.subtopic && (
        <ul className={`ml-4 list-inside list-disc space-y-1`}>
          {method?.subtopic?.map((item: any, subIndex: number) => (
            <li key={subIndex} className={`items-baseline gap-6 pl-10 text-lg font-medium`}>
              <span
                className={cn('text-muted-foreground main-description-small font-medium !leading-snug text-mainColor')}
              >
                {item?.sub_name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))

const OurMissionTwo = () => {
  return (
    <div className='py-4 lg:py-8'>
      <div className={`relative z-10 bg-lightBg px-4 py-4 text-mainColor lg:px-20`}>
        <div className='grid grid-cols-1 xl:grid-cols-12'>
          <div className={`relative hidden items-center justify-center p-4 lg:col-span-5 xl:flex`}>
            <Image
              src={ListImage}
              alt='Basic Info'
              width={500}
              height={500}
              className='object-contain'
              priority
              quality={100}
            />
          </div>
          <div
            className='absolute inset-0 block bg-contain bg-center bg-no-repeat opacity-10 transition-all duration-300 group-hover:opacity-100 xl:hidden'
            style={{ backgroundImage: `url(${ListImage.src})` }}
          ></div>

          <div className={`items-center gap-8 space-y-5 lg:col-span-7 lg:py-10`}>
            <h2 className={cn(`main-title mb-0 font-bold leading-tight text-mainColor`)}>{clinicalTipsData?.title}</h2>

            <h2 className={cn(`main-description-small mb-0 font-medium leading-tight`)}>
              {clinicalTipsData?.description}
            </h2>
            <div className={`text-content mb-10`}>
              {' '}
              <ul className='list-inside !list-disc space-y-5'>
                {clinicalTipsData?.items && renderItems(clinicalTipsData?.items)}{' '}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMissionTwo
