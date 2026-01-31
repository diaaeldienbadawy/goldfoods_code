import React from 'react'
import SecImage from '../../assets/images/pexels-javierbalseiro-16664053 1.png'
import checkImage from '../../assets/images/icons/check-mark.png'

const WhyChoseUs = () => {
  return (
    <div className='py-md-5 mt-5 position-relative' style={{ backgroundImage: `url(${SecImage})`, backgroundSize: '' , backgroundRepeat: 'repeat' , backgroundPositionX: 'start' }}>
      <div className='container'>
        <div className='row py-5'>
            <div className='col-md-6'>
                <div className='d-flex m-auto ratio ratio-16x9 rounded-5 overflow-hidden' style={{ maxWidth: '600px' }}>
                    <img src={SecImage} className='w-100 h-100' alt="My Icon" />
                </div>
            </div>
            <div className='col-md-6 px-md-5'>
                <div>
                    <h3 className='pt-4 py-md-3'>
                        Our Factory
                    </h3>
                    <h2 className='fw-bold pt-2 py-md-3'>
                        Why Choose Our Herring?                    
                    </h2>
                    <div className=''>
                        <Item text={'100% natural process – no preservatives or artificial flavors'}/>
                        <Item text={'Rich, authentic smoked taste'}/>
                        <Item text={'Daily production with strict hygiene standards'}/>
                        <Item text={'Certified quality and food safety procedures'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs


const Item = ({text}) => {
    return(
        <div className='d-flex pt-2 py-md-3'>
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
