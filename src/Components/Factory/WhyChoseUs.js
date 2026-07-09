import React, { useEffect, useState } from 'react'
import checkImage from '../../assets/images/icons/check-mark.png'
import { useLanguage } from '../../context/LanguageContext';

const WhyChoseUs = () => {
  const { language, t } = useLanguage()

  const whyUsImages = [
    '/factory-why-us1.jpg.jpeg',
    '/factory-why-us2.jpg.jpeg',
    '/factory-why-us3.jpg.jpeg'
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % whyUsImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [whyUsImages.length]);

  return (
    <div className='py-md-5 mt-5 position-relative' style={{ backgroundColor: 'var(--highlight-color)', borderRadius: '30px' }}>
      <div className='container'>
        <div className='row py-5 align-items-center'>
            <div className='col-md-6 mb-4 mb-md-0'>
                <div className='m-auto ratio ratio-16x9 rounded-5 overflow-hidden position-relative shadow-lg' style={{ maxWidth: '600px', border: '2px solid rgba(212, 175, 55, 0.25)' }}>
                    {whyUsImages.map((src, i) => (
                      <img 
                        key={i}
                        src={src} 
                        className='w-100 h-100 position-absolute top-0 start-0 object-fit-cover' 
                        style={{ 
                          opacity: i === activeImageIndex ? 1 : 0, 
                          transition: 'opacity 1.2s ease-in-out',
                          zIndex: i === activeImageIndex ? 1 : 0
                        }} 
                        alt={`Why Choose Us ${i + 1}`} 
                      />
                    ))}
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
