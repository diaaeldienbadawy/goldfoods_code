import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import ProductCard from '../Shared/ProductCard'
import { productCatregories } from '../../data/productCategories'


const HomeProducts = () => {

  return (
    <div className='' style={{ padding: '70px 0' }}>
        <div className='container'>
            <SectionHeading
              hint={'Most Popular'}
              title={'Our Products'}
            />

            <div className='row justify-content-between pt-5'>
                {
                    productCatregories?.[0].products.map((product , index) =>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2'> 
                            <ProductCard 
                                key={index}
                                start={index === 0}
                                end={index === productCatregories?.[0].products.length - 1} 
                                productImage={product.image} 
                                subTitle={product.subtitle} 
                                title={product.title} 
                                Rating={product.rating}
                                isCateory={true}
                                link={product.link}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default HomeProducts
