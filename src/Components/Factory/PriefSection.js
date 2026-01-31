import React from 'react'
import processImage from '../../assets/images/Slider/slider1.png'
import Slider from '../Shared/Slider'

const PriefSection = () => {
  return (
    <div className='bg-highlight py-md-5'>
        <div className='container'>
            <div className='w-100 text-center py-5'>
                <h3 className='py-2'>
                    Production Process
                </h3>
                <h1 className='py-2'>
                    Our Herring Factory
                </h1>
                <p className='branch-text py-4 m-auto' style={{ maxWidth: '900px' }}>
                    At Gold Foods, we proudly operate one of the most advanced herring smoking facilities in the region. Combining years of experience with modern techniques, we ensure every product delivers rich, authentic flavor and meets the highest food safety standards.
                </p>
                <div className='d-flex ratio ratio-16x9 w-100 rounded-5 overflow-hidden mt-4'>
                    {/* <img src={processImage} className='w-100 h-100' alt="My Icon" /> */}
                    <Slider/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriefSection
