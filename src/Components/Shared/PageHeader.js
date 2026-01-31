import React from 'react'
import bgImage from '../../assets/images/productsPageImage.png'
import BlueWave from './BlueWave'
import { useNav } from '../../hocks/layout/useNav'

const PageHeader = ({topLinks , pageTitle}) => {
    const {nav} = useNav()
  return (
    <div className='page-hero-section position-relative m-0' style={{ backgroundImage: `url(${bgImage})` }}>
       <div className='position-absolute w-100 h-100 d-flex flex-column justify-content-between' style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0) 0%, #4997E055 50%)' }}>
            <div className='container '>
                <div className='py-2 py-md-5'>
                    <h1 className=' fw-bold text-white py-md-5 fs-64'>{pageTitle}</h1>
                    <h3 className='text-white fw-medium d-flex'>
                        {
                            topLinks.map((link , index) => 
                            <span className='text-white c-pointer my-auto d-flex' key={index} onClick={()=>nav(link.like)}>
                                {link.title} 
                                <div className='d-flex flex-column justify-content-center'>
                                    <span class="material-symbols-outlined my-auto">
                                        chevron_right
                                    </span>
                                </div>

                            </span>)
                        }
                        <span className=' primary-color my-auto'>{pageTitle}</span>
                    </h3>
                </div>
            </div>
            <BlueWave/>
       </div>
    </div>
  )
}

export default PageHeader
