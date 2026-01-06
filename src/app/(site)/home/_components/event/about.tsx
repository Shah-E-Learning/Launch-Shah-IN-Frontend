'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ScreenWrapper from '@components/wrapper/screen-wrapper'
import ImgShah2 from '@images/event/Img2.png'
import ImgShah3 from '@images/event/Img3.png'
import ImgShah4 from '@images/event/Img4.png'
import ImgShah5 from '@images/event/Img5.png'
import * as Dialog from '@radix-ui/react-dialog'
import { Download, Play, X, Youtube, Image as ImageIcon } from 'lucide-react'

const brochureUrl = '/images/topic/Real-World Clinical Topics of National Homeopathic Seminar.pdf'

const cards = [
  {
    title: 'The Homeopathic Reset',
    content:
      'Providing a credible pathway for homeopathic practitioners engaged in unauthorized allopathic practice to start or restart their homeopathic practice, while preventing such practices among students.',
    videoUrl: 'https://www.youtube.com/embed/0tE8CtRvtM0',
    image: ImgShah2,
    topicImage: '/images/topic/Topics Flyer1.jpg'
  },
  {
    title: 'She Heals, She Leads',
    content:
      'Empowering female students and homeopaths to start or restart their homeopathic practice, and supporting those who lost their shining homeopathic careers due to marriage and other life changes.',
    videoUrl: 'https://www.youtube.com/embed/tcpNWl5tqC0',
    image: ImgShah3,
    topicImage: '/images/topic/Topics Flyer2.jpg'
  },
  {
    title: 'When teaching meets healing',
    content:
      'A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.',
    videoUrl: 'https://www.youtube.com/embed/kqhZ69phSgY',
    image: ImgShah4,
    topicImage: '/images/topic/Topics Flyer3.jpg'
  },
  {
    title: 'The Homeopathic Launchpad',
    content:
      'A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.',
    image: ImgShah5,
    topicImage: '/images/topic/Topics Flyer4.jpg'
  }
]

interface Card {
  title: string
  content: string
  videoUrl?: string
  image: any
  type?: string
  topicImage: string
}

/* ────────────────────── Ripple Card ────────────────────── */
interface RippleCardProps {
  card: Card
  index: number
}

const RippleCard: React.FC<RippleCardProps> = ({ card, index }) => {
  const [ripple, setRipple] = useState({ x: -1, y: -1, animate: false })
  const [openVideo, setOpenVideo] = useState(false)
  const [openTopic, setOpenTopic] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      animate: true
    })
  }

  const handleMouseLeave = () => {
    setRipple({ x: -1, y: -1, animate: false })
  }

  const downloadImage = (url: string) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'downloaded-image.jpg'
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
      })
      .catch(error => console.error('Error downloading image:', error))
  }

  return (
    <>
      <div
        className='group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-secondaryColor bg-[#f0f9f9] p-6 transition-all duration-300 ease-in-out hover:bg-mainColor'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (card.videoUrl) setOpenVideo(true)
          else setOpenTopic(true)
        }}
      >
        {/* Ripple */}
        <div
          className={`pointer-events-none absolute rounded-full bg-mainColor transition-all duration-500 ease-out group-hover:opacity-95 ${
            ripple.animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: ripple.animate ? '300%' : '0',
            height: ripple.animate ? '300%' : '0',
            left: ripple.x,
            top: ripple.y,
            transform: `translate(-50%, -50%) scale(1)`,
            transition: `transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.5s ease, height 0.5s ease`
          }}
        ></div>

        {/* Background SVG */}
        <div className="absolute inset-0 bg-[url('/images/ImgCardBg.svg')] bg-contain bg-center bg-no-repeat opacity-10 transition-opacity duration-300 group-hover:bg-[url('/images/ImgCardBgHover.svg')] group-hover:opacity-100"></div>

        {/* Card Text */}
        <div className='relative z-10 text-mainColor group-hover:text-white'>
          <p className='main-description-small !text-left font-bold tracking-normal text-black opacity-90 transition-colors duration-300 md:leading-[2rem] lg:leading-[3.1rem]'>
            {index + 1}. {card.title}
          </p>
          <p className='main-description-small !text-left font-semibold tracking-normal opacity-90 transition-colors duration-300 md:leading-[2rem] lg:leading-[3.1rem]'>
            {card.content}
          </p>
        </div>

        {/* Hover UI */}
        <div className='pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center gap-4 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
          <Youtube className='h-12 w-12 text-secondaryColor drop-shadow-lg' />

          <div className='flex flex-col items-center justify-center gap-3'>
            <Button
              onClick={e => {
                e.stopPropagation()
                if (card.videoUrl) {
                  setOpenVideo(true)
                }
              }}
              className='pointer-events-auto cursor-pointer bg-white px-6 py-2 text-lg font-medium text-mainColor shadow-md transition hover:bg-gray-100'
            >
              {card.videoUrl ? 'Show more' : 'Coming Soon'}
            </Button>

            <Button
              onClick={e => {
                e.stopPropagation()
                setOpenTopic(true)
              }}
              className='pointer-events-auto flex cursor-pointer items-center gap-2 bg-secondaryColor px-6 py-2 text-lg font-medium text-white shadow-md transition hover:bg-secondaryColor/90'
            >
              <ImageIcon className='h-5 w-5' />
              Show Topic
            </Button>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog.Root open={openVideo} onOpenChange={setOpenVideo}>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-50 bg-black/70 animate-in fade-in' />
          <Dialog.Content
            className='fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl outline-none duration-200 animate-in fade-in zoom-in-95'
            onPointerDownOutside={() => setOpenVideo(false)}
            onEscapeKeyDown={() => setOpenVideo(false)}
          >
            <Dialog.Close className='absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-800'>
              <X className='h-6 w-6' />
            </Dialog.Close>

            <p className='mb-4 pr-8 text-lg font-bold text-mainColor'>{card.content}</p>

            <div className='mb-6 aspect-video overflow-hidden rounded-lg bg-black'>
              <iframe
                src={card.videoUrl}
                title={card.title}
                allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
                allowFullScreen
                className='h-full w-full'
              ></iframe>
            </div>

            {card.videoUrl && (
              <Link href={card.videoUrl} target='_blank' rel='noopener noreferrer' className='block'>
                <Button className='flex w-full items-center justify-center gap-2 rounded-lg bg-mainColor py-3 text-white transition hover:bg-mainColor/90'>
                  <Play className='h-5 w-5' />
                  Watch Full Course
                </Button>
              </Link>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Topic Dialog */}
      <Dialog.Root open={openTopic} onOpenChange={setOpenTopic}>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-50 bg-black/80 animate-in fade-in' />
          <Dialog.Content className='fixed left-1/2 top-1/2 z-50 flex h-[90vh] w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white p-6 shadow-2xl outline-none duration-200 animate-in fade-in zoom-in-95'>
            <div className='mb-4 flex items-center justify-between border-b pb-4'>
              <h3 className='text-xl font-bold text-mainColor'>{card.title} - Topic</h3>
              <Dialog.Close asChild>
                <Button variant='ghost' size='icon' className='rounded-full hover:bg-gray-100'>
                  <X className='h-6 w-6' />
                </Button>
              </Dialog.Close>
            </div>

            <div className='flex flex-1 flex-col items-center justify-center overflow-y-auto rounded-lg bg-gray-50 p-2'>
              <div className='relative h-full w-full'>
                <img src={card.topicImage} alt={`${card.title} Flyer`} className='h-full w-full object-contain' />
              </div>
            </div>

            <div className='mt-4 border-t pt-4'>
              <Button
                onClick={() => downloadImage(card.topicImage)}
                className='w-full gap-2 bg-secondaryColor text-white hover:bg-secondaryColor/90'
              >
                <Download className='h-5 w-5' /> Download Topic Flyer
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

/* ────────────────────── Main Section ────────────────────── */
const CardSection: React.FC = () => {
  const downloadPdf = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = 'Real-World Clinical Topics of National Homeopathic Seminar.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <ScreenWrapper className='bg-[#f0f9f9] py-10 lg:py-10' id='topics'>
      <div className='mb-8 text-center'>
        <h2 className='main-title mb-4 font-bold text-mainColor'>
          Addressing Homoeopathic Practice issues: Practical Solutions
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
        {cards.map((c, i) => (
          <RippleCard key={i} card={c} index={i} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className='hidden'>
        <Carousel className='w-full' opts={{ align: 'start', loop: true }} showDots={true}>
          <CarouselContent>
            {cards.map((c, i) => (
              <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                <div className='p-1'>
                  <RippleCard card={c} index={i} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Download Seminar Brochure Button */}
      <div className='mt-12 flex justify-center'>
        <Button
          onClick={() => downloadPdf(brochureUrl)}
          className='flex items-center gap-3 rounded-full bg-mainColor px-8 py-6 text-xl font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-mainColor/90 hover:shadow-2xl active:scale-95'
        >
          <Download className='h-6 w-6' />
          Download Seminar Brochure
        </Button>
      </div>
    </ScreenWrapper>
  )
}

export default CardSection
