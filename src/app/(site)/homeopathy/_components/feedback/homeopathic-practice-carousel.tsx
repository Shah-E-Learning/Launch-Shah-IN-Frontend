// ** React and Core Library Imports
import React from 'react'

// ** Next.js and Internationalization Imports
import Image from 'next/image'

// ** Custom Component Imports
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Assets Imports
import ImgShah from '@images/event/ImgShah.png'

const practiceData = [
  {
    id: 1,
    title: 'A course for academicians and teachers who are not healers to start their homeopathic practice',
    image: ImgShah,
    description: 'A course for academicians and teachers who are not healers to start their homeopathic practice',
    list: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 5,
        title: 'Lorem ipsum dolor sit amet'
      }
    ]
  },
  {
    id: 2,
    title: 'A course for academicians and teachers who are not healers to start their homeopathic practice',
    image: ImgShah,
    description: 'A course for academicians and teachers who are not healers to start their homeopathic practice',
    list: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 5,
        title: 'Lorem ipsum dolor sit amet'
      }
    ]
  }
]

const PracticeSliderCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <div className='grid grid-cols-1 rounded-3xl bg-mainColor p-4 md:gap-5 lg:grid-cols-12 lg:p-8' key={index}>
      <div className='my-4 flex items-start justify-center space-y-4 lg:col-span-6 lg:my-10 lg:space-y-10'>
        <Image
          src={item?.image}
          alt='Medical Professional'
          width={719}
          height={750}
          quality={80}
          className='h-auto w-full max-w-[300px] self-end object-contain object-right-bottom lg:max-w-[500px] xl:max-w-[750px]'
          priority
        />
      </div>
      <div className='space-y-4 lg:col-span-6'>
        <h2 className='my-5 text-3xl font-bold tracking-wide text-white lg:text-4xl 2xl:text-5xl'>{item?.title}</h2>

        {item?.list?.map((list: { id: number; title: string }, index: number) => {
          return (
            <ul className='list-inside list-disc space-x-3' key={index}>
              <li className='text-xl font-normal tracking-wider text-white sm:text-2xl md:text-3xl 2xl:text-4xl'>
                {list?.title}
              </li>
            </ul>
          )
        })}
        <CustomButton
          classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white '
          className='mt-5'
        >
          Watch Now
        </CustomButton>
      </div>
    </div>
  )
}

const HomeopathicPracticeCarousel = () => {
  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <Carousel
        className='mb-8 w-full'
        opts={{
          align: 'start',
          loop: true
        }}
        showDots={true}
        autoplay={true}
        autoplayInterval={3000}
      >
        <CarouselContent className=''>
          {practiceData?.map((card: any, index: number) => (
            <CarouselItem key={index} className=''>
              <PracticeSliderCard item={card} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* {practiceData?.map((item, index) => {
        return (
          <div className='grid grid-cols-1 lg:grid-cols-12 lg:p-8 p-4 gap-5 bg-mainColor rounded-3xl ' key={index}>
            <div className='lg:col-span-6 space-y-4 lg:space-y-10 my-4 lg:my-10 order-2 lg:order-1 flex justify-start items-start'>
              <Image
                src={item?.image}
                alt='Medical Professional'
                width={719}
                height={699}
                quality={80}
                className=' object-contain w-full h-auto max-w-[200px] self-end object-right-bottom lg:max-w-[500px] xl:max-w-[699px] '
                priority
              />
            </div>
            <div className='lg:col-span-6 space-y-4  order-1 lg:order-2 '>
              <h2 className='text-3xl lg:text-4xl 2xl:text-5xl tracking-wide leading-relaxed font-bold text-white my-5'>
                {item?.title}
              </h2>

              {item?.list?.map((list, index) => {
                return (
                  <ul className='list-disc list-inside space-x-3' key={index}>
                    <li className='text-xl sm:text-2xl md:text-3xl  2xl:text-4xl font-normal tracking-wider text-white'>
                      {list?.title}
                    </li>
                  </ul>
                )
              })}
              <CustomButton classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-white'>
                Watch Now
              </CustomButton>
            </div>
          </div>
        )
      })} */}
    </ScreenWrapper>
  )
}

export default HomeopathicPracticeCarousel
