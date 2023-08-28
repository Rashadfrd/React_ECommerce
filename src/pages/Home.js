import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import InfoCards from '../components/InfoCards'
import Deals from '../components/HomeDeals'
import NewsLetter from '../components/NewsLetter'
import HomeProducts from '../components/HomeProducts'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Deals />
      <HomeProducts />
      <NewsLetter />
      <InfoCards />
    </div>
  )
}

export default Home
