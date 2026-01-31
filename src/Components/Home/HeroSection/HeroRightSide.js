import React from 'react'
import heroImage from '../../../assets/images/heroSection.png'

const HeroRightSide = () => {
  return (
    <div className=' d-flex flex-column w-100 p-2'>
        <img src={heroImage} style={{maxHeight: '100%',width: '100%', objectFit:'contain'}}/>
    </div>
  )
}

export default HeroRightSide 
