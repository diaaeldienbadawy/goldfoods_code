import React from 'react'
import PageHeader from '../Shared/PageHeader'
import PriefSection from '../Factory/PriefSection'
import QualitySection from '../Factory/QualitySection'
import HomePartner from '../Home/HomePartner'
import WhyChoseUs from '../Factory/WhyChoseUs'
import FactoryLocation from '../Factory/FactoryLocation'

const FactoryPage = () => {
  return (
    <>
      <PageHeader topLinks={[{title:'Home' , like:'/'}]} pageTitle={'Factory'}/> 
      <PriefSection/> 
      <QualitySection/>
      <FactoryLocation/>
      <HomePartner/>
    </>
  )
}

export default FactoryPage