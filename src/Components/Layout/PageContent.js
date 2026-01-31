import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import FactoryPage from '../Pages/FactoryPage'
import ContactUsPage from '../Pages/ContactUsPage'
import AboutUsPage from '../Pages/AboutUsPage'

const PageContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/product/*' element={<ProductPage/>} />
      <Route path="/factory" element={<FactoryPage/>} />
      <Route path="/contact-us" element={<ContactUsPage/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
    </Routes>
  )
}

export default PageContent
