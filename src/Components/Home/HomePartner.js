import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import { useNav } from '../../hocks/layout/useNav'
import { useLanguage } from '../../context/LanguageContext';

const HomePartner = () => {
  const {nav, scrollTop} = useNav()
  const { language } = useLanguage()

  return (
    <div className='' style={{ padding: '70px 0' }}>
        <div className='container'>
            <SectionHeading
                title={language === 'en' ? 'Ready to Partner with Gold Foods?' : 'هل أنت جاهز للشراكة مع جولد فودز؟'}
                description={language === 'en' 
                  ? 'Join our network of satisfied customers and experience the <br/>difference of premium frozen food imports.'
                  : 'انضم لشبكتنا الكبيرة من شركاء النجاح والعملاء الراضين والتمس الفرق الحقيقي لاستيراد وتعبئة الأغذية الفاخرة.'
                }
            /> 
            <div className='row py-5'>
              <div className='col-md-6 p-2 d-flex justify-content-md-end justify-content-center'>
                <button className='solid-primary-button fw-bold f-call-to-action' style={{ padding: '7px 45px' }} onClick={()=>{ nav('/contact-us'); scrollTop() }}>{language === 'en' ? 'Get In Touch' : 'تواصل معنا'}</button>
              </div>
              <div className='col-md-6 p-2 d-flex justify-content-md-start justify-content-center'>
                <button className='outlined-primary-button fw-bold f-call-to-action' style={{ padding: '7px 45px' }} onClick={()=>{nav('/product');scrollTop()}}>{language === 'en' ? 'View Products' : 'تصفح المنتجات'}</button>
              </div>
            </div>   
        </div>
    </div>
  )
}

export default HomePartner
