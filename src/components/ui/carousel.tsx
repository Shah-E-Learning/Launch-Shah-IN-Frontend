'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
   
  setApi?: (api: CarouselApi) => void
  showDots?: boolean
  showPlayPause?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  customClassName?: string
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollSnaps: number[]
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      showDots = false,
      showPlayPause = false,
      autoplay = false,
      autoplayInterval = 5000,
      customClassName,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
    const [isPlaying, setIsPlaying] = React.useState(autoplay)
    const [isHovered, setIsHovered] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
      setSelectedIndex(api.selectedScrollSnap())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

    const togglePlay = React.useCallback(() => {
      setIsPlaying(prev => !prev)
    }, [])

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return

      onSelect(api)
      setScrollSnaps(api.scrollSnapList())
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api.off('select', onSelect)
      }
    }, [api, onSelect])

    React.useEffect(() => {
      if (!isPlaying || !api || isHovered) return

      const intervalId = setInterval(() => {
        api.scrollNext()
      }, autoplayInterval)

      return () => clearInterval(intervalId)
    }, [isPlaying, api, autoplayInterval, isHovered])

    // React.useEffect(() => {
    //   if (!isPlaying) return

    //   const interval = setInterval(() => {
    //     setProgress(prev => {
    //       if (prev >= 100) return 0

    //       return prev + 100 / ((autoplayInterval / 1000) * 60) // 60fps
    //     })
    //   }, 1000 / 60)

    //   return () => clearInterval(interval)
    // }, [isPlaying, autoplayInterval])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          scrollSnaps
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          {children}

          {scrollSnaps?.length > 1 && (
            <div className={cn(customClassName)}>
              {showDots && (
                <div
                  className={`absolute -bottom-8 ${showPlayPause ? ' right-6 ' : 'left-1/2 '} -translate-x-1/2 flex gap-2 z-10`}
                >
                  {scrollSnaps?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        'h-2 rounded-full bg-mainColor/50 transition-all',
                        index === selectedIndex ? 'w-8' : 'w-2'
                      )}
                    >
                      {index === selectedIndex && isPlaying && !isHovered && (
                        <motion.div
                          className='h-full bg-mainColor rounded-full'
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: autoplayInterval / 1000, ease: 'linear' }}
                          key={`progress-${selectedIndex}-${isPlaying}-${isHovered}`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {showPlayPause && (
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute -bottom-12 right-0 bg-mainColor  backdrop-blur-sm hover:bg-secondaryColor/70 text-white rounded-full z-10'
                  onClick={togglePlay}
                >
                  <AnimatePresence mode='wait' initial={false}>
                    {isPlaying ? (
                      <motion.div
                        key='pause'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Pause className='h-4 w-4' />
                      </motion.div>
                    ) : (
                      <motion.div
                        key='play'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Play className='h-4 w-4' />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              )}
            </div>
          )}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className='overflow-hidden'>
        <div
          ref={ref}
          className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
          {...props}
        />
      </div>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role='group'
        aria-roledescription='slide'
        className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
        {...props}
      />
    )
  }
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute  h-8 w-8 rounded-full bg-secondaryColor hover:bg-mainColor text-white border-0',
          orientation === 'horizontal'
            ? '-left-3 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className='h-4 w-4' />
        <span className='sr-only'>Previous slide</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 rounded-full bg-secondaryColor hover:bg-mainColor text-white',
          orientation === 'horizontal'
            ? '-right-4 top-1/2 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className='h-4 w-4' />
        <span className='sr-only'>Next slide</span>
      </Button>
    )
  }
)
CarouselNext.displayName = 'CarouselNext'

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi }
