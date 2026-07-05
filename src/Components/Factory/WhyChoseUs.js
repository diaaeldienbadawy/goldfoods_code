import React from 'react'
import SecImage from '../../assets/images/pexels-javierbalseiro-16664053 1.png'
import checkImage from '../../assets/images/icons/check-mark.png'
import { useLanguage } from '../../context/LanguageContext';

const WhyChoseUs = () => {
  const { language, t } = useLanguage()

  return (
    <div className='py-md-5 mt-5 position-relative' style={{ backgroundImage: `url(${SecImage})`, backgroundSize: '' , backgroundRepeat: 'repeat' , backgroundPositionX: 'start' }}>
      <div className='container'>
        <div className='row py-5'>
            <div className='col-md-6'>
                <div className='d-flex m-auto ratio ratio-16x9 rounded-5 overflow-hidden' style={{ maxWidth: '600px' }}>
                    <img src={SecImage} className='w-100 h-100' alt="My Icon" />
                </div>
            </div>
            <div className='col-md-6 px-md-5'>
                <div>
                    <h3 className='pt-4 py-md-3'>
                        {t('factory')}
                    </h3>
                    <h2 className='fw-bold pt-2 py-md-3'>
                        {language === 'en' ? 'Why Choose Our Herring?' : 'لماذا تختار الرنجة الخاصة بنا؟'}
                    </h2>
                    <div className=''>
                        <Item text={language === 'en' ? '100% natural process – no preservatives or artificial flavors' : 'عملية طبيعية 100% - بدون مواد حافظة أو نكهات صناعية'}/>
                        <Item text={language === 'en' ? 'Rich, authentic smoked taste' : 'طعم مدخن غني وأصيل وطبيعي'}/>
                        <Item text={language === 'en' ? 'Daily production with strict hygiene standards' : 'إنتاج يومي طازج بمعايير صحية وتعقيم صارم'}/>
                        <Item text={language === 'en' ? 'Certified quality and food safety procedures' : 'إجراءات جودة وسلامة غذاء معتمدة محلياً ودولياً'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs

const Item = ({text}) => {
    return(
        <div className='d-flex pt-2 py-md-3'>
            <div className='pe-3'>
                <img src={checkImage} className='' alt="My Icon" />
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <p className=' branch-text'>
                    {text}
                </p>
            </div>
        </div>
    )
}
