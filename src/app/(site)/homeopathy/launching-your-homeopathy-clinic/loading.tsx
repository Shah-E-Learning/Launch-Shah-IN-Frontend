// ** React and Core Library Imports
import React from 'react'

export default function Loading() {
  return (
    <div className='animate-pulse'>
      {/* Header Skeleton */}
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6'>
          <div className='h-10 w-40 rounded bg-gray-200' />
          <div className='hidden gap-8 lg:flex'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className='h-4 w-20 rounded bg-gray-200' />
            ))}
          </div>
          <div className='h-10 w-32 rounded bg-gray-200' />
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className='mx-auto max-w-7xl px-6 py-20'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='w-full space-y-6 lg:w-5/12'>
            <div className='h-10 w-3/4 rounded bg-gray-200' />
            <div className='h-6 w-full rounded bg-gray-200' />
            <div className='h-6 w-5/6 rounded bg-gray-200' />

            <div className='mt-8 flex gap-4'>
              <div className='h-12 w-40 rounded-full bg-gray-200' />
              <div className='h-12 w-40 rounded-full bg-gray-200' />
            </div>
          </div>

          <div className='mt-12 w-full lg:mt-0 lg:w-6/12'>
            <div className='aspect-4/3 w-full rounded-xl bg-gray-200' />
          </div>
        </div>
      </section>

      {/* Repeating Section Skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <section key={i} className='mx-auto max-w-7xl px-6 py-16'>
          <div className='mb-8 h-8 w-1/3 rounded bg-gray-200' />
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='h-48 rounded bg-gray-200' />
            <div className='h-48 rounded bg-gray-200' />
          </div>
        </section>
      ))}
    </div>
  )
}
