import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import item1 from '../../assets/images/frigorificos-tunidos4 2.png'
import item2 from '../../assets/images/nav-logo 3 2.png'
import item3 from '../../assets/images/logo 1 2.png'
import item4 from '../../assets/images/ZWAN-VAN-DER 2 2.png'

const HomeSuppliers = () => {

    const items = [item1 , item2 , item3 , item4]
  return (
    <div className='container'>
        <div className='pt-3'>
            <SectionHeading
                hint={'Trusted Partners'}
                title={'Our Suppliers'}
            />
            <div className='row d-flex justify-content-center m-0 py-5'>
                {
                    items.map((item , index) => 
                    <div className={`col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap justify-content-between mx-auto ${index === items.length - 1 ? 'me-lg-0' : ''} ${index === 0 ? 'ms-lg-0' : ''}`} key={index}>
                        <img src={item} className=' object-fit-contain w-100' style={{  aspectRatio: '16/9' }} alt="My Icon" />
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default HomeSuppliers
