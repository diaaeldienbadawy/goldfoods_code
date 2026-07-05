import React, { useEffect, useState } from 'react'
import { useNav } from '../../hocks/layout/useNav'
import { useLanguage } from '../../context/LanguageContext';

const CategorysBar = () => {
    const [active , setActive] = useState(0)
    const {nav , location} = useNav()
    const { language, t } = useLanguage()

    useEffect(() => {
        if(location.pathname === '/product/seed-el-balad') setActive(1)
        else if(location.pathname === '/product/fish') setActive(2)
        else if(location.pathname === '/product/meat') setActive(3)
        else if(location.pathname === '/product/poulrty') setActive(4)
        else setActive(0)
    },[location.pathname])


    return (
        <div id='categorys-bar' className='bg-highlight w-100 py-3 pt-md-5 pb-md-3'>
            <div className='container'>
                <div className='d-flex justify-content-center flex-wrap align-items-center gap-2 gap-md-4'>
                    <h3 className={`${active === 0 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2`} onClick={()=>nav('/product')}>
                      {language === 'en' ? 'All' : 'الكل'}
                    </h3>
                    <h3 className={`${active === 1 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2`} onClick={()=>nav('/product/seed-el-balad')}>
                      {t('brandTitle')}
                    </h3>
                    <h3 className={`${active === 2 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2`} onClick={()=>nav('/product/fish')}>
                      {language === 'en' ? 'Fish' : 'أسماك مجمدة'}
                    </h3>
                    <h3 className={`${active === 3 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2`} onClick={()=>nav('/product/meat')}>
                      {language === 'en' ? 'Meat' : 'لحوم مجمدة'}
                    </h3>
                    <h3 className={`${active === 4 ? 'primary-color' : 'branch-text'} c-pointer f-headline-IV px-2`} onClick={()=>nav('/product/poulrty')}>
                      {language === 'en' ? 'Poultry' : 'دواجن مجمدة'}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CategorysBar
