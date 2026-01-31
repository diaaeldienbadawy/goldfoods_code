import React from 'react'
import aboutImage from '../../assets/images/Group-431.png'
import checkImage from '../../assets/images/icons/check-mark.png'

const PriefSection = () => {
  return (
    <div className='bg-highlight py-5'>
        <div className='container'>
          <div className='row m-0'>
            <div className='col-lg-6'>
                <div className='w-100 h-100'>
                    <img src={aboutImage} className='w-100 h-100' alt="My Icon" />
                </div>
            </div>
            <div className='col-lg-6 px-md-5 py-5 pb-3'>
                <div className=' h-100 d-flex flex-column justify-content-center align-items-start px-md-5'>
                    <h3>
                        Everything you need
                    </h3>
                    <h2>
                        Is in Gold Foods
                    </h2>
                    <p className='branch-text' style={{ maxWidth:'280px' }}>
                        We take pride in delivering carefully sourced frozen products with consistency and care — ensuring quality you can trust and freshness your customers will appreciate.
                    </p>
                    <div className='d-flex flex-column justify-content-center'>
                        <Item text={'Trusted Global Sourcing'}/>
                        <Item text={'Wide Product Variety'}/>
                        <Item text={'Cold Chain Integrity'}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default PriefSection

const Item = ({text}) => {
    return(
        <div className='d-flex flex-row justify-content-start py-3'>
            <div className='pe-3 my-auto'>
                <img src={checkImage} className='' alt="My Icon" />
            </div>
            <div className='my-auto'>
                <h3 className='my-auto' style={{ fontSize: '16px' ,fontWeight: 'bold' }}>
                    {text}
                </h3>
            </div>
        </div>
    )
}
