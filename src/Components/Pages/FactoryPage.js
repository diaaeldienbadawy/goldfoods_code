import React from 'react'
import PageHeader from '../Shared/PageHeader'
import PriefSection from '../Factory/PriefSection'
import QualitySection from '../Factory/QualitySection'
import HomePartner from '../Home/HomePartner'
import FactoryLocation from '../Factory/FactoryLocation'
import SeedElBaladFactoryHeader from '../Factory/SeedElBaladFactoryHeader'
import SeedElBaladProductionProcess from '../Factory/SeedElBaladProductionProcess'
import SeedElBaladProductsShowcase from '../Factory/SeedElBaladProductsShowcase'
import { useLanguage } from '../../context/LanguageContext';

const FactoryPage = () => {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('factory')}/> 
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