import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import InfoCards from '../components/InfoCards'
import Partners from '../components/Partners'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <InfoCards />
      <Partners />
    </div>
  )
}

export default Home
