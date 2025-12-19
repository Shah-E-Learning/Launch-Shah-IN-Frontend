// ** React Imports
import React from 'react'

// ** Utils Imports
import { cn } from '@/lib/utils'

const ScreenWrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn('max-w-screen-3xl mx-auto h-full w-full px-4 md:px-20', className)}>{children}</div>
}

export default ScreenWrapper
