import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import Slider from '../Shared/Slider'
import { useLanguage } from '../../context/LanguageContext';

const HomeFactorySlider = () => {
    const { t } = useLanguage()
    return (
    <div className='container'>
        <div className='pt-3'>
                <SectionHeading
                    hint={t('manufacturingHub')}
                    title={t('insideFactory')}
                />
    
                <div className='d-flex justify-content-center m-auto py-5'>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default HomeFactorySlider
