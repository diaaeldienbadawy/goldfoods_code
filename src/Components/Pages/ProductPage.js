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
import SEOMetadata from '../Shared/SEOMetadata'

const ProductPage = () => {
  const { t } = useLanguage()

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('product'),
    "description": t('seoProductDesc'),
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('mackerelTitle') || "Mackerel",
        "url": "https://www.gf-egypt.com/product/fish"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('brandTitle') || "Seed El Balad",
        "url": "https://www.gf-egypt.com/product/seed-el-balad"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t('meatTitle') || "Frozen Meat",
        "url": "https://www.gf-egypt.com/product/meat"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": t('poultryTitle') || "Poultry",
        "url": "https://www.gf-egypt.com/product/poultry"
      }
    ]
  };

  return (
    <>
        <SEOMetadata 
          title={t('seoProductTitle')}
          description={t('seoProductDesc')}
          canonical="/product"
          schema={productCatalogSchema}
        />
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
              <Route path='/poultry' element={<ProductsList products={chickenProductsList} />} />
            </Routes>
          </div>
        </div>
        <HomePartner/>
    </>
  )
}

export default ProductPage