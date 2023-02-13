import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const SharedLayout = () => {
  return (
    <>
      <SideBar/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout
