import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import InfoCards from '../components/InfoCards'
import Partners from '../components/Partners'
import Deals from '../components/HomeDeals'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Deals />
      <FeaturedProducts />
      <InfoCards />
      <Partners />
    </div>
  )
}

export default Home
