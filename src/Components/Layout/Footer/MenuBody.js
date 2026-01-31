import React from 'react'
import MenuItem from './MenuItem'

const MenuBody = ({items}) => {
  return (
    <div className='f-body-text py-2 m-0 '>
        {items.map((item , index) => <MenuItem key={index} icon={item.icon} title={item.title} link={item.link} email={item.email} phone={item.phone}/>) } 
    </div>
  )
}

export default MenuBody
