import React from 'react'
import bgImage from '../../assets/images/productsPageImage.png'
import BlueWave from '../Shared/BlueWave'

const HeroSection = () => {
  return (
    <div className='product-hero-section position-relative' style={{ backgroundImage: `url(${bgImage})` }}>
       <div className='position-absolute w-100 h-100 d-flex flex-column justify-content-between' style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0) 0%, #4997E055 50%)' }}>
            <div className='container'>
                <div className='py-5'>
                    <h1 className=' fw-bold text-white py-md-5' style={{ fontSize: '64px' }}>Products</h1>
                    <h3 className='text-white fw-medium'>
                        <span className='text-white'>Home</span> {' / '} <span className=' primary-color'>Products</span>
                    </h3>
                </div>
            </div>
            <BlueWave/>
       </div>
    </div>
  )
}

export default HeroSection
