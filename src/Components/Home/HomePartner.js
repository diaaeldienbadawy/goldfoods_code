import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import { useNav } from '../../hocks/layout/useNav'

const HomePartner = () => {
  const {nav, scrollTop} = useNav()
  return (
    <div className='' style={{ padding: '70px 0' }}>
        <div className='container'>
            <SectionHeading
                title={'Ready to Partner with Gold Foods?'}
                description={'Join our network of satisfied customers and experience the <br/>difference of premium frozen food imports.'}
            /> 
            <div className='row py-5'>
              <div className='col-md-6 p-2 d-flex justify-content-md-end justify-content-center'>
                <button className='solid-primary-button fw-bold f-call-to-action' style={{ padding: '7px 45px' }} onClick={()=>{ nav('/contact-us'); scrollTop() }}>Get In Touch</button>
              </div>
              <div className='col-md-6 p-2 d-flex justify-content-md-start justify-content-center'>
                <button className='outlined-primary-button fw-bold f-call-to-action' style={{ padding: '7px 45px' }} onClick={()=>{nav('/product');scrollTop()}}>View Products</button>
              </div>
            </div>   
        </div>
    </div>
  )
}

export default HomePartner
