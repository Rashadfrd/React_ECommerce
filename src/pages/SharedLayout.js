import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Header'
import SideBar from '../components/Sidebar'

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
