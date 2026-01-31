import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import Slider from '../Shared/Slider'

const HomeFactorySlider = () => {
    return (
    <div className='container'>
        <div className='pt-3'>
                <SectionHeading
                    hint={'About Us'}
                    title={'Our Factory'}
                />
    
                <div className='d-flex justify-content-center m-auto py-5'>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default HomeFactorySlider
