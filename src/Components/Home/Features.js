import React from 'react'

import BlueWave from '../Shared/BlueWave'
import groubIcon from '../../assets/images/icons/Group.svg'
import starIcon from '../../assets/images/icons/Vector.svg'
import checkStarIcon from '../../assets/images/icons/material-symbols_star.svg'
import supportIcon from '../../assets/images/icons/pepicons-pop_checkmark-filled.svg'
import FeatureItem from './Features/FeatureItem'
import SectionHeading from '../Shared/SectionHeading'

const Features = () => {
  const features = [
    {
      icon: groubIcon,
      title: 'Fast Delivery',
      description: 'Efficient logistics and cold chain management'
    },
    {
      icon: starIcon,
      title: 'Permium Quality',
      description: 'Sourced from the best suppliers worldwide'
    },
    {
      icon: checkStarIcon,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every step'
    },
    {
      icon: supportIcon,
      title: 'Expert Support',
      description: 'Dedicated team for your business needs'
    }
  ]
  return (
    <>
      <BlueWave/>
      <div className='pb-4 px-0 m-0 bg-highlight pt-5 pt-md-0'>
        <div className='container'>
          <SectionHeading
            hint={'Our Features'}
            title={'Quality is Our First Priority'}
          />
          <div className='row d-flex justify-content-between py-5'>
            {
              features.map((feature , index) => (
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                  <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                </div>
              ))
            }
          </div>
          {/* <div className='d-flex justify-content-center'>
            <button className='outlined-primary-button'>
              View all
            </button>
          </div> */}
        </div>
      </div>

    </>

  )
}

export default Features
