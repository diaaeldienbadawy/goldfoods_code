import React from 'react'
import PageHeader from '../Shared/PageHeader'
import ContactBox from '../contactUs/ContactBox'
import { useLanguage } from '../../context/LanguageContext'

const ContactUsPage = () => {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('contact')}/>
      <ContactBox/>
    </>
  )
}

export default ContactUsPage
