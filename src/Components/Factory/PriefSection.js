import React from 'react'
import Slider from '../Shared/Slider'
import { useLanguage } from '../../context/LanguageContext';

const PriefSection = () => {
  const { language } = useLanguage()

  return (
    <div className='bg-highlight py-md-5'>
        <div className='container'>
            <div className='w-100 text-center py-5'>
                <h3 className='py-2'>
                    {language === 'en' ? 'Production Process' : 'خطوات الإنتاج والتحضير'}
                </h3>
                <h1 className='py-2'>
                    {language === 'en' ? 'Our Herring Factory' : 'مصنع إنتاج وتمليح الرنجة'}
                </h1>
                <p className='branch-text py-4 m-auto' style={{ maxWidth: '900px' }}>
                    {language === 'en' 
                      ? 'At Gold Foods, we proudly operate one of the most advanced herring smoking facilities in the region. Combining years of experience with modern techniques, we ensure every product delivers rich, authentic flavor and meets the highest food safety standards.'
                      : 'نفخر في شركة جولد فودز بتشغيل أحد أكثر مرافق تدخين الرنجة تقدماً وتطوراً في المنطقة. بالجمع بين سنوات الخبرة الطويلة والتقنيات الحديثة، نضمن أن يقدم كل منتج نكهة غنية وأصيلة ويلبي أعلى معايير سلامة الأغذية.'
                    }
                </p>
                <div className='d-flex ratio ratio-16x9 w-100 rounded-5 overflow-hidden mt-4'>
                    <Slider/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriefSection
