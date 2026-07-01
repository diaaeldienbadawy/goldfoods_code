import React from 'react'
import HeroSection from '../Home/HeroSection'
import Features from '../Home/Features'
import HomeProducts from '../Home/HomeProducts'
import SeedElBaladSection from '../Home/SeedElBaladSection'
import HomeFactorySlider from '../Home/HomeFactorySlider'
import HomeSuppliers from '../Home/HomeSuppliers'
import HomeAnimatedFish from '../Home/HomeAnimatedFish'
import HomePartner from '../Home/HomePartner'

const HomePage = () => {
  return (
    <>
      <HeroSection/> 
      <Features/>
      <HomeProducts/>
      <SeedElBaladSection/>
      <HomeFactorySlider/>
      <HomeSuppliers/>
      <HomeAnimatedFish/>
      <HomePartner/>  
    </>
  )
}

export default HomePage
