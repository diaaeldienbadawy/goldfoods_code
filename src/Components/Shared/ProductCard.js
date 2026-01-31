import React from 'react'
import fishImage from '../../assets/images/products/fish.png'
import productCardWave from '../../assets/images/product-card-wave.png'
import smallStar from '../../assets/images/icons/small-star.svg'
import { useNav } from '../../hocks/layout/useNav'

const ProductCard = ({start,end,productImage,subTitle , title , Rating,isCateory, link}) => {
    const {nav} = useNav()
  return (
    <div className={`product-card ${start ? 'ms-lg-0' : ''} ${end ? 'me-lg-0' : ''}`} >
        <img src={productImage} className='product-card-img' alt="My Icon" />
        <div className='product-card-wrapping' >
            <div className='position-relative bottom-0 w-100' style={{ height:'180px' }}>
                <img src={productCardWave} className='product-card-wave' alt="My Icon" />
                <div className='position-relative d-flex flex-column justify-content-end h-100 align-items-center py-4'>
                    <p className=' f-body-text body-text p-0 m-0 pb-1'>{subTitle}</p>
                    <p className=' f-title-card body-text p-0 m-0 pb-1'>{title}</p>
                    <div className='d-flex justify-content-center pb-1'>
                        <img src={smallStar} className='m-auto' style={{ width: '18px', height: '18px' }} alt="My Icon" />
                        <p className=' f-body-text body-text fw-bold m-auto px-2' >{Rating}</p>
                    </div>
                    {isCateory &&
                    <button className='outlined-primary-button fw-bold' style={{ fontSize: '10px' , lineHeight:'auto' , padding: '5px 35px' }} onClick={()=>nav(link)}>view all</button>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
