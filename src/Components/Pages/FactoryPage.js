import React from 'react'
import PageHeader from '../Shared/PageHeader'
import PriefSection from '../Factory/PriefSection'
import QualitySection from '../Factory/QualitySection'
import HomePartner from '../Home/HomePartner'
import FactoryLocation from '../Factory/FactoryLocation'
import SeedElBaladFactoryHeader from '../Factory/SeedElBaladFactoryHeader'
import SeedElBaladProductionProcess from '../Factory/SeedElBaladProductionProcess'
import SeedElBaladProductsShowcase from '../Factory/SeedElBaladProductsShowcase'

const FactoryPage = () => {
  return (
    <>
      <PageHeader topLinks={[{title:'Home' , like:'/'}]} pageTitle={'Factory'}/> 
      <div className="container py-3">
        <SeedElBaladFactoryHeader/>
      </div>
      <PriefSection/> 
      <SeedElBaladProductionProcess/>
      <div className="container py-5">
        <SeedElBaladProductsShowcase/>
      </div>
      <QualitySection/>
      <FactoryLocation/>
      <HomePartner/>
    </>
  )
}

export default FactoryPage