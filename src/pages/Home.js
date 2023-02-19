import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import InfoCards from '../components/InfoCards'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <InfoCards />
    </div>
  )
}

export default Home
