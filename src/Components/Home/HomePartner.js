import React from 'react'
import { useNav } from '../../hocks/layout/useNav'
import { useLanguage } from '../../context/LanguageContext';

const HomePartner = () => {
  const {nav, scrollTop} = useNav()
  const { language } = useLanguage()

  return (
    <div className='container' style={{ padding: '60px 15px' }}>
      <div 
        className='p-5 text-center position-relative overflow-hidden'
        style={{
          background: 'linear-gradient(135deg, #28527a 0%, #0f2b48 100%)',
          borderRadius: '30px',
          boxShadow: '0 20px 40px rgba(40, 82, 122, 0.15)',
          color: '#ffffff'
        }}
      >
        {/* Subtle decorative background shapes */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className='position-relative' style={{ zIndex: 1 }}>
          <span 
            className='d-inline-block text-uppercase fw-bold mb-3'
            style={{ 
              color: 'var(--primary-color)', 
              fontSize: '14px', 
              letterSpacing: '1.5px'
            }}
          >
            {language === 'en' ? 'Start Collaboration' : 'بدء شراكة عمل'}
          </span>
          
          <h2 
            className='fw-bold mb-4' 
            style={{ 
              fontSize: '36px', 
              color: '#ffffff',
              lineHeight: '1.4'
            }}
          >
            {language === 'en' ? 'Ready to Partner with Gold Foods?' : 'هل أنت جاهز للشراكة مع جولد فودز؟'}
          </h2>
          
          <p 
            className='mx-auto mb-5' 
            style={{ 
              maxWidth: '650px', 
              color: 'rgba(255, 255, 255, 0.85)', 
              fontSize: '16px',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{
              __html: language === 'en' 
                ? 'Join our network of satisfied customers and experience the difference of premium frozen food imports.'
                : 'انضم لشبكتنا الكبيرة من شركاء النجاح والعملاء الراضين والتمس الفرق الحقيقي لاستيراد وتعبئة الأغذية الفاخرة.'
            }}
          />

          <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>
            <button 
              className='solid-primary-button fw-bold f-call-to-action border-0' 
              style={{ 
                padding: '12px 40px',
                borderRadius: '30px',
                minWidth: '200px',
                transition: 'all 0.3s ease'
              }} 
              onClick={()=>{ nav('/contact-us'); scrollTop() }}
            >
              {language === 'en' ? 'Get In Touch' : 'تواصل معنا'}
            </button>
            <button 
              className='outlined-primary-button fw-bold f-call-to-action' 
              style={{ 
                padding: '12px 40px', 
                borderRadius: '30px',
                minWidth: '200px',
                borderColor: '#ffffff',
                color: '#ffffff',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }} 
              onClick={()=>{nav('/product');scrollTop()}}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.color = '#0f2b48';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              {language === 'en' ? 'View Products' : 'تصفح المنتجات'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePartner
