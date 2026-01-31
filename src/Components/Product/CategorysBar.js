import React, { useEffect, useState } from 'react'
import { useNav } from '../../hocks/layout/useNav'

const CategorysBar = () => {
    const [active , setActive] = useState(0)
    const {nav , location} = useNav()
    useEffect(() => {
        if(location.pathname === '/product/fish') setActive(1)
        else if(location.pathname === '/product/meat') setActive(2)
        else if(location.pathname === '/product/poulrty') setActive(3)
        else setActive(0)
    },[location.pathname])


    return (
        <div id='categorys-bar' className='bg-highlight w-100 py-3 pt-md-5 pb-md-3'>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center '>
                    <h3 className={`${active === 0 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2 px-md-4`} onClick={()=>nav('/product')}>All</h3>
                    <h3 className={`${active === 1 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2 px-md-4`} onClick={()=>nav('/product/fish')}>Fish</h3>
                    <h3 className={`${active === 2 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2 px-md-4`} onClick={()=>nav('/product/meat')}>Meat</h3>
                    <h3 className={`${active === 3 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2 px-md-4`} onClick={()=>nav('/product/poulrty')}>Poulrty</h3>
                </div>
            </div>
        </div>
    )
}

export default CategorysBar
