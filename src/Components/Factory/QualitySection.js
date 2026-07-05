import React from 'react'
import bgImage from '../../assets/images/Vector-289-1.png'
import bgImage2 from '../../assets/images/Vector-289.png'
import checkImage from '../../assets/images/icons/check-mark.png'
import sectionImage from '../../assets/images/Group-433.png'
import WhyChoseUs from './WhyChoseUs'
import { useLanguage } from '../../context/LanguageContext';

const QualitySection = () => {
  const { language, t } = useLanguage()

  return (
    <div className='py-5 mt-5 position-relative'>
        <div className='position-absolute top-0 start-0 w-100 h-100 d-flex flex-column'>
            <div className='position-relative' style={{ transform:'translateY(3px)' }}>
                <img src={bgImage} className='w-100 h-100 object-fit-contain' alt="My Icon" />

            </div>
            <div className='position-relative h-100' style={{  backgroundImage: `url(${bgImage2})` , backgroundSize: 'cover' , backgroundRepeat: 'repeat-y' , backgroundPositionX: 'end'  }}></div>
        </div>

      <div className='container position-relative'>
        <div className='row flex-column-reverse flex-sm-row'>
            <div className='col-lg-6 '>
                <div style={{ maxWidth:'480px' }}>
                    <div className='py-md-5'>

                    </div>
                    <div className='py-4 py-md-5'>

                    </div>
                    <div className='py-md-5'>

                    </div>
                    <h3 className=' py-md-3'>
                        {t('factory')}
                    </h3>
                    <h2 className='fw-bold py-md-3' style={{ fontSize: '32px' }}>
                        {language === 'en' ? 'Our Herring Production Process' : 'خطوات تصنيع وإنتاج الرنجة لدينا'}
                    </h2>
                    <div className='d-flex flex-column justify-content-center'>
                        <Item 
                          title={language === 'en' ? 'Careful Selection' : 'الاختيار اليدوي الدقيق'} 
                          text={language === 'en' 
                            ? 'We start with the finest quality herring, sourced fresh or frozen and hand-selected for size and freshness.'
                            : 'نبدأ بأجود أسماك الرنجة، المستوردة طازجة أو مجمدة والمختارة يدوياً بعناية للحجم والجودة الممتازة.'
                          }
                        />
                        <Item 
                          title={language === 'en' ? 'Natural Salting' : 'التمليح الطبيعي الموزون'} 
                          text={language === 'en' 
                            ? 'Fish are salted using traditional methods with pure, chemical-free salt, ensuring perfect flavor and preservation.'
                            : 'يتم تمليح الأسماك باستخدام الطرق التقليدية بالملح الصافي الخالي من المواد الكيميائية لضمان النكهة المثالية.'
                          }
                        />
                        <Item 
                          title={language === 'en' ? 'Drying & Preparation' : 'التجفيف والتحضير للتدخين'} 
                          text={language === 'en' 
                            ? 'After salting, the fish are left to dry in a hygienic, climate-controlled environment to prepare for smoking.'
                            : 'بعد التمليح، تُترك الأسماك لتجف في بيئة صحية خاضعة للرقابة المناخية تمهيداً لبدء عملية التدخين.'
                          }
                        />
                        <Item 
                          title={language === 'en' ? 'Traditional Smoking' : 'التدخين الخشبي التقليدي'} 
                          text={language === 'en' 
                            ? 'Our herring is smoked over natural hardwoods like beech or oak, giving it that rich, smoky aroma without artificial additives.'
                            : 'يتم تدخين الرنجة فوق أخشاب الغابات الطبيعية مثل الزان أو البلوط، لتكتسب تلك الرائحة المدخنة المميزة بدون إضافات.'
                          }
                        />
                        <Item 
                          title={language === 'en' ? 'Cooling & Packing' : 'التبريد والتعبئة الصحية'} 
                          text={language === 'en' 
                            ? 'Once smoked, the herring is immediately cooled and hygienically packed to maintain freshness and quality.'
                            : 'بمجرد التدخين، يتم تبريد الرنجة فوراً وتعبئتها بطريقة صحية للمحافظة التامة على الطزاجة والجودة.'
                          }
                        />
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='d-flex justify-content-center m-auto'>
                    <img src={sectionImage} className='w-100' alt="My Icon" />
                </div>
            </div>
        </div>
      </div>

      <WhyChoseUs/>

    </div>
  )
}

export default QualitySection

const Item = ({title,text}) => {
    return(
        <div className='d-flex pt-3 py-md-3'>
            <div className='pe-3'>
                <img src={checkImage} className='' alt="My Icon" />
            </div>
            <div className=''>
                <p className=' fw-bold m-0'>
                    {title}
                </p>
                <p className=' branch-text'>
                    {text}
                </p>
            </div>
        </div>
    )
}