import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext';

const ContactBox = () => {
  const { language, t } = useLanguage()
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setShowSuccess(true);
      // Trigger TikTok Pixel Contact event
      if (window.ttq) {
        window.ttq.track('Contact');
      }
    }
  }, []);

  return (
    <div className='py-5' style={{ backgroundColor: '#f8fafc' }}>
      <div className='container py-4'> 
        
        {showSuccess && (
          <div className="alert alert-success text-center mb-5 p-3 rounded-4 border-0 shadow-sm" style={{ backgroundColor: '#e2f0d9', color: '#385723' }}>
            <span className="material-symbols-outlined align-middle me-2">check_circle</span>
            <span className="fw-semibold align-middle">
              {language === 'en' 
                ? 'Thank you! Your message has been sent successfully. We will contact you soon.' 
                : 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك في أقرب وقت.'}
            </span>
          </div>
        )}

        {/* Section Header */}
        <div className='text-center mb-5'>
          <span 
            className='d-inline-block text-uppercase fw-bold mb-2'
            style={{ 
              color: 'var(--primary-color)', 
              fontSize: '14px', 
              letterSpacing: '1.5px'
            }}
          >
            {t('contact')}
          </span>
          <h1 className='fw-bold' style={{ color: 'var(--secondary-color)', fontSize: '38px' }}>
            {t('contactTitle')}
          </h1>
          <p className='text-muted mx-auto' style={{ maxWidth: '600px', fontSize: '16px' }}>
            {t('contactSub')}
          </p>
        </div>

        <div className='row justify-content-center align-items-stretch g-4 mt-2'>
          
          {/* Column 1: Contact Details & Info Cards */}
          <div className='col-lg-5 d-flex flex-column justify-content-between'>
            
            {/* Card 1: Main Office */}
            <div 
              className='p-4 mb-4 bg-white shadow-sm d-flex'
              style={{ borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <div 
                className='d-flex align-items-center justify-content-center bg-primary text-white'
                style={{ width: '50px', height: '50px', borderRadius: '12px', flexShrink: 0 }}
              >
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <div className={language === 'ar' ? 'pe-3' : 'ps-3'}>
                <h5 className='fw-bold mb-1' style={{ color: 'var(--secondary-color)' }}>{t('officeAddress')}</h5>
                <p className='text-muted mb-0' style={{ fontSize: '14px', lineHeight: '1.6' }}>{t('officeDetails')}</p>
              </div>
            </div>

            {/* Card 2: Factory Address */}
            <div 
              className='p-4 mb-4 bg-white shadow-sm d-flex'
              style={{ borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <div 
                className='d-flex align-items-center justify-content-center bg-primary text-white'
                style={{ width: '50px', height: '50px', borderRadius: '12px', flexShrink: 0 }}
              >
                <span className="material-symbols-outlined">factory</span>
              </div>
              <div className={language === 'ar' ? 'pe-3' : 'ps-3'}>
                <h5 className='fw-bold mb-1' style={{ color: 'var(--secondary-color)' }}>{t('factoryAddress')}</h5>
                <p className='text-muted mb-0' style={{ fontSize: '14px', lineHeight: '1.6' }}>{t('factoryDetails')}</p>
              </div>
            </div>

            {/* Card 3: Direct Phone & Email */}
            <div 
              className='p-4 bg-white shadow-sm d-flex'
              style={{ borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <div 
                className='d-flex align-items-center justify-content-center bg-primary text-white'
                style={{ width: '50px', height: '50px', borderRadius: '12px', flexShrink: 0 }}
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div className={language === 'ar' ? 'pe-3' : 'ps-3'}>
                <h5 className='fw-bold mb-1' style={{ color: 'var(--secondary-color)' }}>{t('emailUs')} & {t('callUs')}</h5>
                <p className='mb-1' style={{ fontSize: '14px' }}>
                  <a href={`mailto:Ceo@gf-egypt.com`} className='text-muted text-decoration-none' style={{ transition: 'color 0.2s' }}>
                    Ceo@gf-egypt.com
                  </a>
                </p>
                <p className='mb-0' style={{ fontSize: '14px' }}>
                  <a href={`tel:${t('phoneNum')}`} className='text-muted text-decoration-none' dir="ltr" style={{ transition: 'color 0.2s' }}>
                    {t('phoneNum')}
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: Premium Contact Form */}
          <div className='col-lg-7'>
            <div 
              className='p-4 p-md-5 bg-white shadow-sm h-100'
              style={{ borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <form action="https://formsubmit.co/Ceo@gf-egypt.com" method='POST' className='m-0'>
                <input type="hidden" name="_next" value={'https://www.gf-egypt.com/contact-us?success=true'}/>
                <input type="text" name="_honey" style={{ display: 'none' }}/>

                <div className='row g-4'>
                  
                  {/* Name field */}
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='form-label fw-semibold text-muted' style={{ fontSize: '14px' }}>
                        {language === 'en' ? 'Full Name' : 'الاسم بالكامل'}
                      </label>
                      <input 
                        type="text" 
                        name='name' 
                        required
                        className='form-control px-3 py-2' 
                        style={{ 
                          borderRadius: '10px',
                          border: '1.5px solid #e2e8f0',
                          fontSize: '15px',
                          backgroundColor: '#f8fafc'
                        }} 
                        placeholder={language === 'en' ? 'Your full name' : 'ادخل اسمك الكامل'}
                      />
                    </div>                    
                  </div>

                  {/* Email field */}
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='form-label fw-semibold text-muted' style={{ fontSize: '14px' }}>
                        {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                      </label>
                      <input 
                        type="email" 
                        name='email' 
                        required
                        className='form-control px-3 py-2' 
                        style={{ 
                          borderRadius: '10px',
                          border: '1.5px solid #e2e8f0',
                          fontSize: '15px',
                          backgroundColor: '#f8fafc'
                        }} 
                        placeholder={language === 'en' ? 'name@example.com' : 'email@example.com'}
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label fw-semibold text-muted' style={{ fontSize: '14px' }}>
                        {language === 'en' ? 'Your Message' : 'نص الرسالة'}
                      </label>
                      <textarea 
                        name='message' 
                        required
                        rows="5"
                        className='form-control px-3 py-2' 
                        style={{ 
                          borderRadius: '10px',
                          border: '1.5px solid #e2e8f0',
                          fontSize: '15px',
                          resize: 'none',
                          backgroundColor: '#f8fafc'
                        }} 
                        placeholder={language === 'en' ? 'How can we help your business?' : 'كيف يمكننا مساعدة عملك التجاري؟'}
                      />
                    </div>    
                  </div>

                </div>

                {/* Form Buttons */}
                <div className='d-flex gap-3 mt-4 pt-2'>
                  <button 
                    className='solid-primary-button border-0 px-4 py-2 fw-semibold' 
                    type='submit' 
                    style={{ 
                      fontSize: '15px',
                      borderRadius: '30px',
                      transition: 'all 0.3s ease',
                      minWidth: '140px'
                    }}
                  >
                    {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                  </button>
                  
                  <button 
                    className='outlined-primary-button px-4 py-2 fw-semibold' 
                    type="reset"
                    style={{ 
                      fontSize: '15px',
                      borderRadius: '30px',
                      transition: 'all 0.3s ease',
                      minWidth: '140px'
                    }}
                  >
                    {language === 'en' ? 'Reset' : 'إعادة تعيين'}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactBox
