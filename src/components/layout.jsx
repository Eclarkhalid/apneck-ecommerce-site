import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return <>
  <Header />
  <Outlet />
  <Footer />
  </>
}

export default layout