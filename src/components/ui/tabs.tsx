'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import * as TabsPrimitive from '@radix-ui/react-tabs'

const Tabs = TabsPrimitive.Root

const BOTTOM_INDICATOR_HEIGHT = 3

// TabsList component in animated-tabs.tsx
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { showBorder?: boolean }
>(({ className, showBorder = false, ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    bottom: 0,
    width: 0,
    height: BOTTOM_INDICATOR_HEIGHT
  })
  const tabsListRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (showBorder) {
      const updateIndicator = () => {
        if (tabsListRef.current) {
          const activeTab = tabsListRef.current.querySelector<HTMLElement>('[data-state="active"]')

          if (activeTab) {
            const activeRect = activeTab.getBoundingClientRect()
            const tabsRect = tabsListRef.current.getBoundingClientRect()
            setIndicatorStyle({
              left: activeRect.left - tabsRect.left,
              bottom: 0,
              width: activeRect.width,
              height: BOTTOM_INDICATOR_HEIGHT
            })
          }
        }
      }

      updateIndicator()
      window.addEventListener('resize', updateIndicator)
      const observer = new MutationObserver(updateIndicator)
      if (tabsListRef.current) {
        observer.observe(tabsListRef.current, {
          attributes: true,
          childList: true,
          subtree: true
        })
      }

      return () => {
        window.removeEventListener('resize', updateIndicator)
        observer.disconnect()
      }
    }
  }, [showBorder])

  return (
    <div className='relative' ref={tabsListRef}>
      <TabsPrimitive.List
        ref={ref}
        className={cn('relative inline-flex items-center bg-muted p-1 text-muted-foreground', className)}
        {...props}
      />
      {!!showBorder && (
        <div
          className='absolute z-20 rounded-t-3xl py-[2px] bg-mainColor shadow-sm transition-all duration-500 ease-in-out transform'
          style={indicatorStyle}
        />
      )}
    </div>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 ring-offset-mainColor transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-10',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-mainColor focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
