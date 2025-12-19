import React from 'react'
import Header from './header'
import Footer from './footer'

const WebsiteLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}

export default WebsiteLayout
