import React from 'react'
import aboutImage from '../../assets/images/Group-431.png'
import checkImage from '../../assets/images/icons/check-mark.png'
import { useLanguage } from '../../context/LanguageContext';

const PriefSection = () => {
  const { language } = useLanguage()

  return (
    <div className='bg-highlight py-5'>
        <div className='container'>
          <div className='row m-0'>
            <div className='col-lg-6'>
                <div className='w-100 h-100'>
                    <img src={aboutImage} className='w-100 h-100' alt="My Icon" />
                </div>
            </div>
            <div className='col-lg-6 px-md-5 py-5 pb-3'>
                <div className=' h-100 d-flex flex-column justify-content-center align-items-start px-md-5'>
                    <h3>
                        {language === 'en' ? 'Everything you need' : 'كل ما تحتاجه'}
                    </h3>
                    <h2>
                        {language === 'en' ? 'Is in Gold Foods' : 'تجد في جولد فودز'}
                    </h2>
                    <p className='branch-text' style={{ maxWidth:'280px' }}>
                        {language === 'en' 
                          ? 'We take pride in delivering carefully sourced frozen products with consistency and care — ensuring quality you can trust and freshness your customers will appreciate.'
                          : 'نفخر بتقديم منتجات مجمدة منتقاة بعناية وبأعلى معايير الاتساق والسلامة، لنضمن جودة تثق بها وطزاجة يقدرها عملاؤك دائماً.'
                        }
                    </p>
                    <div className='d-flex flex-column justify-content-center'>
                        <Item text={language === 'en' ? 'Trusted Global Sourcing' : 'موردون عالميون موثوقون'}/>
                        <Item text={language === 'en' ? 'Wide Product Variety' : 'تنوع كبير في المنتجات'}/>
                        <Item text={language === 'en' ? 'Cold Chain Integrity' : 'تكامل تام لسلسلة التبريد'}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PriefSection

const Item = ({text}) => {
    return(
        <div className='d-flex flex-row justify-content-start py-3'>
            <div className='pe-3 my-auto'>
                <img src={checkImage} className='' alt="My Icon" />
            </div>
            <div className='my-auto'>
                <h3 className='my-auto' style={{ fontSize: '16px' ,fontWeight: 'bold' }}>
                    {text}
                </h3>
            </div>
        </div>
    )
}
