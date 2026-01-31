import React from 'react'
import MenuTitle from './MenuTitle'
import MenuBody from './MenuBody'

const FooterMenu = ({title , items}) => {
  return (
    <div className='px-3'>
      <MenuTitle title={title}/>
      <MenuBody items={items}/>
    </div>
  )
}

export default FooterMenu
