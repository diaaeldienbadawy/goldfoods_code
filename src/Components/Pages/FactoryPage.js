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
import SEOMetadata from '../Shared/SEOMetadata'
import FactorySeoSection from '../Factory/FactorySeoSection'

const FactoryPage = () => {
  const { t } = useLanguage()

  return (
    <>
      <SEOMetadata 
        title={t('seoFactoryTitle')}
        description={t('seoFactoryDesc')}
        canonical="/factory"
      />
      <PageHeader topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('factory')}/> 
      <div className="container py-3">
        <SeedElBaladFactoryHeader/>
      </div>
      <PriefSection/> 
      <FactorySeoSection/>
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