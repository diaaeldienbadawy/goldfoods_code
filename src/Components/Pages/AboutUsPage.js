import React from 'react'
import PageHeader from '../Shared/PageHeader'
import PriefSection from '../about/PriefSection'
import HomeProducts from '../Home/HomeProducts'
import QualitySection from '../about/QualitySection'
import ParentCompanySection from '../Shared/ParentCompanySection'
import HomePartner from '../Home/HomePartner'
import { useNav } from '../../hocks/layout/useNav'
import { useLanguage } from '../../context/LanguageContext';
import SEOMetadata from '../Shared/SEOMetadata'

const AboutUsPage = () => {
  const {nav} = useNav()
  const { language, t } = useLanguage()

  return (
    <>
      <SEOMetadata 
        title={t('seoAboutTitle')}
        description={t('seoAboutDesc')}
        canonical="/about-us"
      />
      <PageHeader topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('aboutUs')}/>
      <PriefSection/>
      <HomeProducts/>
      <div className='d-flex justify-content-center pb-5'>
        <button className='solid-primary-button fw-bold f-call-to-action py-2' onClick={()=>nav('/contact-us')}>
          {language === 'en' ? 'Get In Touch' : 'تواصل معنا'}
        </button>
      </div>
      <QualitySection/>
      <ParentCompanySection/>
      <HomePartner/>
    </>
  )
}

export default AboutUsPage
