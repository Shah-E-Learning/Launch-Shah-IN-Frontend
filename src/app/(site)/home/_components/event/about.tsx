'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import { routes } from '@/constants/routes'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CustomButton from '@/components/ui/custom-button'

import ScreenWrapper from '@components/wrapper/screen-wrapper'
import ImgShah2 from '@images/event/Img2.png'
import ImgShah3 from '@images/event/Img3.png'
import ImgShah4 from '@images/event/Img4.png'
import ImgShah5 from '@images/event/Img5.png'
import * as Dialog from '@radix-ui/react-dialog'
import { Play, X, Youtube } from 'lucide-react'

const cards = [
  {
    title: 'Lorem Ipsum Dolor',
    content:
      'Preventing homeopathic practitioners and students from engaging in unauthorized allopathic practice, while offering a credible pathway to return to independent homeopathic practice.',
    videoUrl: 'https://www.youtube.com/embed/0tE8CtRvtM0',
    image: ImgShah2,
     
  },
  {
    title: 'Lorem Ipsum Dolor',
    content:
      'Empowering female homeopaths to start or restart their homeopathic practice, and supporting those who lost their shining homeopathic careers due to marriage and other life changes.',
    videoUrl: 'https://www.youtube.com/embed/tcpNWl5tqC0',
    image: ImgShah3,
     
  },
  {
    title: 'Lorem Ipsum Dolor',
    content:
      'A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.',
    videoUrl: 'https://www.youtube.com/embed/TytvadH1IMk',
    image: ImgShah4,
     
  },
  {
    title: 'Lorem Ipsum Dolor',
    content:
      'A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.',
    // videoUrl: 'https://www.youtube.com/embed/kqhZ69phSgY',
    image: ImgShah5,
     
  }
]

interface Card {
  title: string
  content: string
  videoUrl?: string
  image: any
  type?: string | undefined
}

/* ────────────────────── Ripple Card ────────────────────── */
/* ────────────────────── Ripple Card ────────────────────── */
interface RippleCardProps {
  card: Card
}

const RippleCard: React.FC<RippleCardProps> = ({ card }) => {
  const [ripple, setRipple] = useState({ x: -1, y: -1, animate: false })
  const [open, setOpen] = useState(false)

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

  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  return (
    <>
      {/* ───── Card ───── */}
      <div
        className='group relative h-full cursor-pointer overflow-hidden rounded-3xl bg-[#f0f9f9] p-6 transition-all duration-300 ease-in-out hover:bg-mainColor border border-secondaryColor'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => { if (card.videoUrl) openDialog() }} // mobile tap → dialog
      >
        {/* Ripple */}
        <div
          className={`pointer-events-none absolute rounded-full bg-mainColor transition-all duration-500 ease-out group-hover:opacity-95 ${ripple.animate ? 'opacity-100' : 'opacity-0'
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
          <p className='main-description-small text-justify font-normal tracking-normal opacity-90 transition-colors duration-300 md:leading-[2rem] lg:leading-[3.1rem]'>
            {card.content}
          </p>
        </div>

        <p className='absolute bottom-4 right-4 text-end text-base font-bold text-secondaryColor'>{card.type}</p>

        {/* ───── Blur + Dark overlay (only on hover) ───── */}
        <div className='pointer-events-none absolute inset-0 bg-black/30 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100'></div>

        {/* ───── Hover UI (YouTube + Show more) ───── */}
        <div className='pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center gap-4 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
          {/* YouTube Icon */}
          <Youtube className='h-12 w-12 text-secondaryColor drop-shadow-lg' />
          {/* <div className='main-description flex justify-center mb-4 lg:h-[0px]'>
            <ImgYouTube />
          </div> */}
          {/* Show more button */}
          <Button
            onClick={e => {
              if (card.videoUrl) {
                e.stopPropagation() // stop card click
                openDialog()
              }
            }}
            className='pointer-events-auto cursor-pointer bg-white px-6 py-2 text-lg font-medium text-mainColor shadow-md transition hover:bg-gray-100'
          >
            {card.videoUrl ? "Show more" : "Comming soon"}
          </Button>
        </div>
      </div>

      {/* ───── Dialog (Image + CTA) ───── */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-50 bg-black/70' />
          <Dialog.Content
            className='fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl outline-none'
            onPointerDownOutside={closeDialog}
            onEscapeKeyDown={closeDialog}
          >
            {/* Close X */}
            <Dialog.Close className='absolute right-4 top-4 text-gray-500 hover:text-gray-800'>
              <X className='h-6 w-6' />
            </Dialog.Close>

            {/* Title / Content */}
            <p className='mb-4 text-lg font-bold text-mainColor'>{card.content}</p>

            {/* Image */}
            <div className='mb-6 aspect-video overflow-hidden rounded-lg bg-black'>
              <iframe
                src={card.videoUrl}
                title={card.title}
                allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
                allowFullScreen
                className='h-full w-full'
              ></iframe>
            </div>
            {/* <div className='flex justify-center my-6'>
              <Image
                src={card.image}
                alt='Course preview'
                width={719}
                height={750}
                quality={80}
                className='w-full max-w-[300px] md:max-w-[500px] border rounded-lg'
                priority
              />
            </div> */}

            {/* CTA → opens YouTube in new tab */}
            {card.videoUrl && <Link href={card.videoUrl} target='_blank' rel='noopener noreferrer' className='block'>
              <Button className='flex w-full items-center justify-center gap-2 rounded-lg bg-mainColor py-3 text-white transition hover:bg-mainColor/90'>
                <Play className='h-5 w-5' />
                Watch Full Course
              </Button>
            </Link>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

/* ────────────────────── Main Section ────────────────────── */
const CardSection: React.FC = () => {
  return (
    <ScreenWrapper className='py-10 lg:py-10 bg-[#f0f9f9]' id='topics'>
      <div className='mb-8 text-center'>
        <h2 className='main-title mb-4 font-bold text-mainColor'>Addressing Clinical Issues: Practical Solutions</h2>
        {/* <h3 className='main-title my-5 font-medium text-mainColor'>{t('wellnessSubtitle')}</h3>
        <p className='main-description mx-auto !text-center font-normal tracking-wide md:leading-[2rem] lg:leading-[3.1rem]'>
          {t('wellnessDescription')}
        </p> */}
      </div>

      {/* Desktop Grid */}
      <div className='hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
        {cards.map((c, i) => (
          <RippleCard key={i} card={c} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className='md:hidden'>
        <Carousel
          className='w-full'
          opts={{ align: 'start', loop: true }}
          showDots={true}
          autoplay={true}
          autoplayInterval={3000}
        >
          <CarouselContent>
            {cards.map((c, i) => (
              <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                <div className='p-1'>
                  <RippleCard card={c} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <div className='mt-[5rem] flex flex-wrap justify-center gap-5'>
        <Link href={routes.homeopathyLowInvestmentIdeaUsingAI} aria-label='experts-of-allopathy'>
          <CustomButton
            size='xs'
            aria-label='Check out experts of allopathy'
            className='font-semibold'
            classNameExtra='bg-secondaryColor text-white hover:bg-mainColor font-semibold'
          >
            Low Investment Ideas using AI
          </CustomButton>
        </Link>
        <Link href={routes.home} aria-label='experts-of-allopathy'>
          <CustomButton
            size='xs'
            aria-label='Check out experts of allopathy'
            className='font-semibold'
            classNameExtra='bg-secondaryColor text-white hover:bg-mainColor font-semibold'
          >
            National Pre-launch Seminar
          </CustomButton>
        </Link>
      </div> */}
    </ScreenWrapper>
  )
}

export default CardSection
