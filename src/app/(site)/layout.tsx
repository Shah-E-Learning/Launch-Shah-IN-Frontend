// ** React and Core Library Imports
import React from 'react'

// ** Custom Component Imports
import WebsiteLayout from '@components/layout'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <WebsiteLayout>{children}</WebsiteLayout>
}

export default Layout
