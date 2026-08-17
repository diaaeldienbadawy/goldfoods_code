import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import ProductCard from '../Shared/ProductCard'
import { productCatregories } from '../../data/productCategories'
import { useLanguage } from '../../context/LanguageContext';

const HomeProducts = () => {
  const { t } = useLanguage()

  // Helper to translate product data dynamically
  const getTranslatedProduct = (product) => {
    if (product.link === '/product/seed-el-balad') {
      return {
        title: t('brandTitle'),
        subtitle: t('subBrand')
      };
    } else if (product.link === '/product/fish') {
      return {
        title: t('mackerelTitle'),
        subtitle: t('factory')
      };
    } else if (product.link === '/product/meat') {
      return {
        title: t('meatTitle'),
        subtitle: t('factory')
      };
    } else if (product.link === '/product/poultry' || product.link === '/product/poulrty') {
      return {
        title: t('poultryTitle'),
        subtitle: t('factory')
      };
    }
    return {
      title: product.title,
      subtitle: product.subtitle
    };
  };

  return (
    <div className='' style={{ padding: '70px 0' }}>
        <div className='container'>
            <SectionHeading
              hint={t('importedVarieties')}
              title={t('ourProducts')}
            />

            <div className='row justify-content-between pt-5'>
                {
                    productCatregories?.[0].products.map((product , index) => {
                        const translated = getTranslatedProduct(product);
                        return (
                            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2' key={index}> 
                                <ProductCard 
                                    start={index === 0}
                                    end={index === productCatregories?.[0].products.length - 1} 
                                    productImage={product.image} 
                                    subTitle={translated.subtitle} 
                                    title={translated.title} 
                                    Rating={product.rating}
                                    isCateory={true}
                                    link={product.link}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default HomeProducts
