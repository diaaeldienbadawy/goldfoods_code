import React from 'react'
import { useNav } from '../../../hocks/layout/useNav'

const HeroLeftSide = () => {
  const {nav , scrollTop} = useNav()
  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100 px-3'>
      <h1 className='f-heading fw-bold fs-64'>Your Gateway to Frozen <span className='primary-color'>Excellence</span></h1>
      <p className='py-4 f-body-II pb-md-5'>
        Specialized in importing high-quality frozen mackerel, fish varieties,and premium meats to global markets
      </p>
      <div className='row pb-5 pb-md-0'> 
        <div className='col-auto p-2 d-flex justify-content-md-start'>
          <button className='solid-primary-button f-call-to-action' onClick={()=>{nav('/about-us');scrollTop()}}>Explore more</button>
        </div>
        
        <div className='col p-2 d-flex justify-content-md-start'>
          <button className='outlined-primary-button f-call-to-action' onClick={()=>{nav('/contact-us');scrollTop()}}>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default HeroLeftSide
