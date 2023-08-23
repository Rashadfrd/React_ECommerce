import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import InfoCards from '../components/InfoCards'
import Partners from '../components/Partners'
import Deals from '../components/HomeDeals'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Deals />
      <NewsLetter />
      <InfoCards />
      <Partners />
    </div>
  )
}

export default Home
