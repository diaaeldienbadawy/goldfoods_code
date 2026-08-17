import React from 'react'
import PageHeader from '../Shared/PageHeader'
import ContactBox from '../contactUs/ContactBox'
import { useLanguage } from '../../context/LanguageContext'
import SEOMetadata from '../Shared/SEOMetadata'

const ContactUsPage = () => {
  const { t } = useLanguage()

  return (
    <>
      <SEOMetadata 
        title={t('seoContactTitle')}
        description={t('seoContactDesc')}
        canonical="/contact-us"
      />
      <PageHeader topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('contact')}/>
      <ContactBox/>
    </>
  )
}

export default ContactUsPage
