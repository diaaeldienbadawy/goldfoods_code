import React from 'react'
import HeroSection from '../Product/HeroSection'
import CategorysBar from '../Product/CategorysBar'
import { productCatregories } from '../../data/productCategories'
import HomePartner from '../Home/HomePartner'
import { Route, Routes } from 'react-router-dom'
import ProductsList from '../Product/ProductsList'
import { fishProductsList } from '../../data/fishProductsList'
import { meatProductsList } from '../../data/meatProductList'
import { chickenProductsList } from '../../data/chickenProductList'
import PageHeader from '../Shared/PageHeader'

const ProductPage = () => {
  return (
    <>
        {/* <HeroSection/> */}
        <PageHeader  topLinks={[{title:'Home' , like:'/'}]} pageTitle={'Products'}/>
        <CategorysBar/>
        <div className='w-100 bg-highlight'>
          <div className='container'>
            <Routes>
              <Route path="/" element={<ProductsList products={productCatregories} isCateory={true}/>} />
              <Route path='/fish' element={<ProductsList products={fishProductsList} />} />
              <Route path='/meat' element={<ProductsList products={meatProductsList} />} />
              <Route path='/poulrty' element={<ProductsList products={chickenProductsList} />} />
            </Routes>
          </div>
        </div>
        <HomePartner/>
    </>
  )
}

export default ProductPage