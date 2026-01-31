import React from 'react'
import PageHeader from '../Shared/PageHeader'
import PriefSection from '../about/PriefSection'
import HomeProducts from '../Home/HomeProducts'
import QualitySection from '../about/QualitySection'
import HomePartner from '../Home/HomePartner'
import { useNav } from '../../hocks/layout/useNav'

const AboutUsPage = () => {
  const {nav} = useNav()
  return (
    <>
      <PageHeader topLinks={[{title:'Home' , like:'/'}]} pageTitle={'About Us'}/>
      <PriefSection/>
      <HomeProducts/>
      <div className='d-flex justify-content-center pb-5'>
        <button className='solid-primary-button fw-bold f-call-to-action py-2' onClick={()=>nav('/contact-us')}>Get In Touch</button>
      </div>
      <QualitySection/>
      <HomePartner/>
    </>
  )
}

export default AboutUsPage
