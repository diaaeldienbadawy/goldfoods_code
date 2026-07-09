import React from 'react'
import bgImage from '../../assets/images/Vector-288.png'
import checkImage from '../../assets/images/icons/check-mark.png'
import { useLanguage } from '../../context/LanguageContext';

const QualitySection = () => {
  const { language, t } = useLanguage()

  return (
    <div className='py-5 mt-5' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' , backgroundRepeat: 'no-repeat' , backgroundPositionX: 'start' }}>
      <div className='container'>
        <div className='row flex-column-reverse flex-md-row align-items-center'>
            <div className='col-lg-6 pt-5'>
                <div style={{ maxWidth:'480px' }}>
                    <div className='py-md-5'>

                    </div>
                    <div className='py-md-5'>

                    </div>
                    <div className='d-flex flex-column'>

                    </div>
                    <h3>
                        {t('ourFeatures')}
                    </h3>
                    <h2 className='fw-bold' style={{ fontSize: '32px' }}>
                        {t('featuresTitle')}
                    </h2>
                    <div className='d-flex flex-column justify-content-center'>
                        <Item text={language === 'en' 
                          ? 'At Gold Foods, we’re more than importers — we’re caretakers of trust, ensuring every shipment meets our standards and our customers’ expectations.'
                          : 'في جولد فودز، نحن أكثر من مجرد مستوردين؛ نحن حماة الثقة، ونضمن أن تلبي كل شحنة معاييرنا وتوقعات عملائنا.'
                        }/>
                        <Item text={language === 'en' 
                          ? 'From supplier selection to delivery, we operate with pride and passion — because at Gold Foods, excellence is not optional.'
                          : 'من اختيار الموردين إلى التوصيل، نعمل بشغف وفخر لأن التميز في جولد فودز ليس خياراً بل هو التزامنا الأساسي.'
                        }/>
                        <Item text={language === 'en' 
                          ? 'All imported goods adhere to food safety regulations and quality assurance protocols for hassle-free distribution.'
                          : 'تلتزم جميع البضائع المستوردة بلوائح سلامة الغذاء وبروتوكولات ضمان الجودة لتوزيع آمن وسلس.'
                        }/>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <img 
                      src="/about-quality.jpg" 
                      className='w-100 rounded-5 shadow-lg' 
                      style={{ border: '2px solid rgba(212, 175, 55, 0.25)', objectFit: 'cover' }} 
                      alt="Gold Foods Factory and Branded Trucks" 
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QualitySection

const Item = ({text}) => {
    return(
        <div className='d-flex py-3'>
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
