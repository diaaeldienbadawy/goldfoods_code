import React from 'react'
import CategorysBar from '../Product/CategorysBar'
import { productCatregories } from '../../data/productCategories'
import HomePartner from '../Home/HomePartner'
import { Route, Routes } from 'react-router-dom'
import ProductsList from '../Product/ProductsList'
import { fishProductsList } from '../../data/fishProductsList'
import { meatProductsList } from '../../data/meatProductList'
import { chickenProductsList } from '../../data/chickenProductList'
import PageHeader from '../Shared/PageHeader'
import SeedElBaladProductsShowcase from '../Factory/SeedElBaladProductsShowcase'
import { useLanguage } from '../../context/LanguageContext';

const ProductPage = () => {
  const { t } = useLanguage()

  return (
    <>
        <PageHeader  topLinks={[{title: t('home') , like:'/'}]} pageTitle={t('product')}/>
        <CategorysBar/>
        <div className='w-100 bg-highlight py-5'>
          <div className='container'>
            <Routes>
              <Route path="/" element={<ProductsList products={productCatregories} isCateory={true}/>} />
              <Route path='/seed-el-balad' element={<SeedElBaladProductsShowcase />} />
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