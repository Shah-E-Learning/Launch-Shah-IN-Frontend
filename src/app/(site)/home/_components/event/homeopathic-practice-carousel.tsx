'use client'

// ** React and Core Library Imports
import { useState } from 'react'

// ** Next.js and Internationalization Imports
import Image from 'next/image'
import Link from 'next/link'

// ** UI Library Imports
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

// ** Custom Component Imports
import CustomButton from '@/components/ui/custom-button'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

// ** Application Service, Constants, and Type Imports
import { routes } from '@/constants/routes'

// ** Third-Party Library Imports
import { Play, Youtube } from 'lucide-react'

// ** Assets Imports
import ImgShah1 from '@images/event/Img1.png'
import ImgShah2 from '@images/event/Img2.png'
import ImgShah3 from '@images/event/Img3.png'
import ImgShah4 from '@images/event/Img4.png'
import ImgShah5 from '@images/event/Img5.png'

const practiceData = [
  {
    id: 0,
    title: `About Dr. Samuel Hahnemann's Applied Homeopathy (SHAH):`,
    image: ImgShah1,
    description: '',
    redirect: `${routes.homeopathicHomeopathsLikelyToReturnExcel}`,

    videoLink: 'https://youtu.be/ND-e6PsPENM',
    list: [
      {
        id: 1,
        title: 'Clinical diagnosis taught by experts in modern medicine'
      },
      {
        id: 2,
        title: 'Homeopathic treatment led by specialists in homeopathy'
      },
      {
        id: 3,
        title: 'An integrated online course to support the often-overlooked group of homeopaths'
      }
    ]
  },
  {
    id: 1,
    title: `Preventing homeopathic practitioners and students from engaging in unauthorized allopathic practice, while offering a credible pathway to return to independent homeopathic practice.`,
    image: ImgShah2,
    description: ``,
    videoLink: 'https://youtu.be/0tE8CtRvtM0',
    redirect: `${routes.homeopathicHomeopathsLikelyToReturnExcel}#course-1`,
    list: [
      {
        id: 1,
        title: `Homeopaths   practicing   allopathic   (GP)   medicine,
especially in villages and rural areas.`
      },
      {
        id: 2,
        title: `Female homeopaths doing part-time in allopathic
(GP) practice at home.`
      },
      {
        id: 3,
        title: `Homeopathic   students   pursuing   a   BHMS
considering starting allopathic (GP) practices in the
near future.`
      }
    ]
  },
  {
    id: 2,
    title: `Empowering female homeopaths to start or restart their homeopathic practice, and
supporting those who lost their shining homeopathic careers due to marriage and other life
changes.`,
    image: ImgShah3,
    description: ``,
    redirect: `${routes.homeopathicHomeopathsLikelyToReturnExcel}#course-2`,
    videoLink: 'https://youtu.be/tcpNWl5tqC0',
    list: [
      {
        id: 1,
        title: `Facing challenges in balancing their careers and 
lives after marriage`
      },
      {
        id: 2,
        title: `Have left homeopathy due to the demands of 
marriage and life journeys`
      },
      {
        id: 3,
        title: `Non-practicing homeopaths wo are working as 
teachers in colleges`
      }
    ]
  },
  {
    id: 3,
    title: `A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.`,
    image: ImgShah4,
    description: ``,
    videoLink: 'https://youtu.be/TytvadH1IMk',
    redirect: `${routes.homeopathicHomeopathsLikelyToReturnExcel}#course-3`,
    list: [
      {
        id: 1,
        title: `Teachers of theoretical subjects in colleges`
      },
      {
        id: 2,
        title: `Teachers of allopathic subjects in colleges`
      },
      {
        id: 3,
        title: `Non-practicing  teachers   do   not   receive   a   Non-
Practicing Allowance (NPA).`
      },
      {
        id: 4,
        title: `Homeopathic   teachers   practicing   allopathic
medicine simultaneously.`
      }
    ]
  },
  {
    id: 4,
    title: `A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.`,
    image: ImgShah5,
    description: ``,
    videoLink: 'https://youtu.be/kqhZ69phSgY',
    redirect: `${routes.homeopathicHomeopathsLikelyToReturnExcel}#course-4`,
    list: [
      {
        id: 1,
        title: `Government   homeopaths   are   serving   the   general
population through various government platforms.`
      },
      {
        id: 2,
        title: `Homeopathic practitioners who work in allopathic
hospitals   or   practice   allopathy   alongside
homeopathy.`
      },
      {
        id: 3,
        title: `Homeopaths eager to improve their skills for quick
and effective prescribing.`
      }
    ]
  }
]

const PracticeSliderCard = ({ item, index, onOpenVideo }: any) => {
  return (
    <>
      <div
        className='group grid h-max grid-cols-1 rounded-3xl bg-secondaryColor/10 p-4 text-mainColor md:gap-5 lg:grid-cols-12 lg:p-8'
        key={index}
      >
        {/* Image Section */}
        <div className='!relative my-4 flex items-center justify-center lg:col-span-5 lg:my-10'>
          <Image
            src={item?.image}
            alt='Medical Professional'
            width={719}
            height={750}
            quality={80}
            className='w-full rounded-lg border-white'
            priority
          />

          {/* Hover Overlay */}
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-lg bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
            <Youtube className='h-14 w-14 text-secondaryColor drop-shadow-lg' />
            <Button
              onClick={onOpenVideo}
              className='pointer-events-auto bg-white px-6 py-2 text-lg font-medium text-secondaryColor shadow-md transition hover:bg-gray-100'
            >
              Show more
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-col justify-center space-y-4 lg:col-span-7'>
          {item?.id !== 0 ? (
            <div className='flex gap-2'>
              <h2 className='text-3xl font-semibold tracking-wide text-mainColor lg:text-4xl 2xl:text-5xl'>
                {item?.id}.{' '}
              </h2>
              <h2 className='text-3xl font-semibold tracking-wide text-mainColor lg:text-4xl 2xl:text-5xl'>
                {item?.title}
              </h2>
            </div>
          ) : (
            <h2 className='text-3xl font-semibold tracking-wide text-mainColor lg:text-4xl 2xl:text-5xl'>
              {item?.title}
            </h2>
          )}

          {item?.id === 0 &&
            item?.list?.map((list: { id: number; title: string }, index: number) => (
              <ul className='list-disc space-x-3 ps-5 lg:ps-8' key={index}>
                <li className='text-xl font-normal tracking-wider text-mainColor sm:text-2xl md:text-3xl 2xl:text-4xl'>
                  {list?.title}
                </li>
              </ul>
            ))}

          <Link href={item?.redirect}>
            <CustomButton
              classNameExtra='bg-white text-mainColor hover:bg-secondaryColor hover:text-mainColor'
              className='mt-5'
            >
              Category of Homeopaths likely to return or excel
            </CustomButton>
          </Link>
        </div>
      </div>
    </>
  )
}

const HomeopathicPracticeCarousel = () => {
  const [openVideo, setOpenVideo] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const getYoutubeId = (url: string) => {
    const match = url.match(/(?:v=|\.be\/)([A-Za-z0-9_-]+)/)

    return match ? match[1] : ''
  }

  // const t = useTranslations('feedback.quotePage')

  // const ct = useTranslations('countSection')

  return (
    <>
      {/* <Separator orientation='horizontal' className='my-5 rounded-md bg-secondaryColor' /> */}
      {/* <ScreenWrapper className='rounded-xl'> */}
        {/* <ScreenWrapper className='relative bg-lightBg rounded-xl py-12 md:py-16'>
        <div className='absolute top-4 left-4 md:top-8 md:left-8 opacity-80'>
          <IcQuote className='w-16 h-16 md:w-28 md:h-28 ' />
        </div>

        <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-80 rotate-180'>
          <IcQuote className='w-16 h-16 md:w-28 md:h-28 ' />
        </div>

        <div className='flex flex-col justify-center  my-4 '>
          <div className='flex flex-col my-4 '>
            <h1 className='main-title font-medium text-mainColor mb-4 !text-center'>
              {t('quoteTitle')} <span className='main-title font-bold text-mainColor '>{t('quoteTitleBold')}</span>
            </h1>
            <p className='mt-0 font-medium !leading-snug text-muted-foreground main-description max-w-8xl md:!text-center text-mainColor '>
              {t('description4')}
              <br />
              {t('description')}
              <br />
              {t('description1')}
            </p>
          </div>
        </div>
      </ScreenWrapper> */}
        {/* <div className='py-6 md:py-12'>
          <Label className='main-title flex justify-center font-extrabold text-mainColor'>
            <h1 className='main-title mb-4 !text-center font-normal text-mainColor'>
              Learn <span className='main-title font-bold text-mainColor'>More About SHAH Course</span>
            </h1>
          </Label>
          <Carousel
            className='!h-full w-full'
            opts={{
              align: 'start',
              loop: true
            }}
            showDots={true}
            autoplay={true}
            autoplayInterval={3000}
          >
            <CarouselContent className='!h-full py-0'>
              {practiceData?.map((card: any, index: number) => (
                <CarouselItem key={index} className='flex items-center'>
                  <PracticeSliderCard
                    item={card}
                    index={index}
                    onOpenVideo={() => {
                      setSelectedItem(card)
                      setOpenVideo(true)
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}

        {/* <ScreenWrapper className='relative bg-lightBg rounded-xl py-12 md:py-16'>
        <div className='absolute top-4 left-4 md:top-8 md:left-8 opacity-80'>
          <IcQuote className='w-16 h-16 md:w-28 md:h-28 ' />
        </div>

        <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-80 rotate-180'>
          <IcQuote className='w-16 h-16 md:w-28 md:h-28 ' />
        </div>

        <div className='flex flex-col justify-center  my-4 '>
          <div className='flex flex-col my-4 '>
            <h1 className='main-title font-medium text-mainColor mb-4 !text-center'>
              {ct('countTitle')}
              <span className='main-title font-bold text-mainColor '>{ct('countTitleBold')}</span>
            </h1>

            <p className='main-description font-normal !text-center tracking-wide lg:leading-[3.1rem] md:leading-[2rem] mx-auto md:mb-12'>
              {ct('countDescription')}
              <br />
              {ct('countDescription1')}
              <br />
              {ct('countDescription2')}
              <br />
              {ct('countDescription3')}
              <br />
              {ct('countDescription4')}
            </p>
          </div>
        </div>
      </ScreenWrapper> */}
      {/* </ScreenWrapper> */}

      {/* Dialog for Video */}
      <Dialog open={openVideo} onOpenChange={setOpenVideo}>
        <DialogOverlay className='fixed inset-0 z-50 bg-black/70' />
        <DialogContent className='fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl outline-none'>
          <p className='mb-4 pr-8 text-lg font-bold text-mainColor'>{selectedItem?.title}</p>

          <div className='mb-6 aspect-video overflow-hidden rounded-lg bg-black'>
            {selectedItem && (
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(selectedItem.videoLink)}`}
                allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
                allowFullScreen
                referrerPolicy='strict-origin-when-cross-origin'
                className='h-full w-full'
              />
            )}
          </div>

          <Link href={selectedItem?.videoLink ?? '#'} target='_blank'>
            <Button className='flex w-full items-center justify-center gap-2 bg-mainColor py-3 text-white'>
              <Play className='h-5 w-5' />
              Watch Full Video on YouTube
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default HomeopathicPracticeCarousel
