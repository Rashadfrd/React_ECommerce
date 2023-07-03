import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Header'
import SideBar from '../components/Sidebar'
import Sliderr from '../components/Slider'

const SharedLayout = () => {
  return (
    <>
      <SideBar/>
      <Navbar />
      <Outlet />
      <Sliderr />
      <Footer />
    </>
  )
}

export default SharedLayout
