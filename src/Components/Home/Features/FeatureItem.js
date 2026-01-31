import React from 'react'

const FeatureItem = ({icon , title , description}) => {
  return (
    <div className='d-flex flex-column justify-content-between align-items-center h-100'>
        <div className=''>
            <img src={icon} alt="My Icon" className='feature-icon mb-3' />
        </div>
        <div className='text-center'>
          <h3 className=' fw-bold' style={{fontSize: '16px'}}>{title}</h3>
          <p className='f-body-text' style={{ fontSize: '12px' }}>{description}</p>
        </div>
    </div>
  )
}

export default FeatureItem
