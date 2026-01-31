import React from 'react'
import RandomCube from '../Shared/RandomCube'
import CubsScreen from './HeroSection/CubsScreen'
import HeroLeftSide from './HeroSection/HeroLeftSide'
import HeroRightSide from './HeroSection/HeroRightSide'

const HeroSection = () => {
  return (
    <div className='hero-section position-relative w-100'>
      <CubsScreen/>
      <div className='z-5 position-relative'>
        <div className='container p-0 '>
          <div className='row flex-column-reverse flex-md-row'>
                        <div className='col-md-6'>
              <HeroLeftSide/>
            </div>
            <div className='col-md-6'>
              <HeroRightSide/>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
