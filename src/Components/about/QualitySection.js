import React from 'react'
import bgImage from '../../assets/images/Vector-288.png'
import checkImage from '../../assets/images/icons/check-mark.png'
import sectionImage from '../../assets/images/Group-432.png'

const QualitySection = () => {
  return (
    <div className='py-5 mt-5' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' , backgroundRepeat: 'no-repeat' , backgroundPositionX: 'start' }}>
      <div className='container'>
        <div className='row flex-column-reverse flex-md-row'>
            <div className='col-lg-6 pt-5'>
                <div style={{ maxWidth:'480px' }}>
                    <div className='py-md-5'>

                    </div>
                    <div className='py-md-5'>

                    </div>
                    <div className='d-flex flex-column'>

                    </div>
                    <h3>
                        Our Feature
                    </h3>
                    <h2 className='fw-bold' style={{ fontSize: '32px' }}>
                        Quality is Our First Priority
                    </h2>
                    <div className='d-flex flex-column justify-content-center'>
                        <Item text={'At Gold Foods, we’re more than importers — we’re caretakers of trust, ensuring every shipment meets our standards and our customers’ expectations.'}/>
                        <Item text={'From supplier selection to delivery, we operate with pride and passion — because at Gold Foods, excellence is not optional.'}/>
                        <Item text={'All imported goods adhere to food safety regulations and quality assurance protocols for hassle-free distribution.'}/>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='h-100 d-flex justify-content-center'>
                    <img src={sectionImage} className='w-100 h-100' alt="My Icon" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QualitySection

const Item = ({text}) => {
    return(
        <div className='d-flex py-3'>
            <div className='pe-3'>
                <img src={checkImage} className='' alt="My Icon" />
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <p className=' branch-text'>
                    {text}
                </p>
            </div>
        </div>
    )
}
