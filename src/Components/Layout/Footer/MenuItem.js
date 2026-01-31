import React from 'react'
import { useNav } from '../../../hocks/layout/useNav'

const MenuItem = ({icon , title , link , email , phone}) => {
  const {nav ,scrollTop} = useNav()
  return (icon?
                <div className='d-flex c-pointer' style={{ paddingBottom: '15px' }} onClick={()=>{ email? window.open(`mailto:${link}`) : (phone? window.open(`tel:${link}`) : nav(link)) ; scrollTop() } }>
                  <div className='d-flex bg-primary footer-icon w-100  mt-1'>
                    <img src={icon} className='m-auto' alt="My Icon" />
                  </div>
                  <div className='f-phone-number px-2 text-wrap w-100'>
                    {title}
                  </div>
                </div>

                :

                <div className='d-flex f-phone-number c-pointer' style={{ paddingBottom: '10px' }} onClick={()=>{ email? window.open(`mailto:${link}`) : (phone? window.open(`tel:${link}`) : nav(link)) ; scrollTop()}}>
                    {title}
                </div>
  )
}

export default MenuItem
