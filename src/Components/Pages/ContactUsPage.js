import React from 'react'
import PageHeader from '../Shared/PageHeader'
import ContactBox from '../contactUs/ContactBox'

const ContactUsPage = () => {
  return (
    <>
      <PageHeader topLinks={[{title:'Home' , like:'/'}]} pageTitle={'Contact Us'}/>
      <ContactBox/>
    </>
  )
}

export default ContactUsPage
