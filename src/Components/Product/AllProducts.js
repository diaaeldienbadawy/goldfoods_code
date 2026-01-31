import React from 'react'
import ProductCard from '../Shared/ProductCard'
import { productCatregories } from '../../data/productCategories'

const AllProducts = () => {
  return (
    <div className='row justify-content-between py-5'>
        {
            productCatregories.map((product , index) =>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2'> 
                    <ProductCard 
                        key={index}
                        start={index === 0}
                        end={index === productCatregories.length - 1} 
                        productImage={product.image} 
                        subTitle={product.subtitle} 
                        title={product.title} 
                        Rating={product.rating}
                        isCateory={true}
                    />
                </div>
            )
        }
    </div>
  )
}

export default AllProducts
