import React from 'react';
import logoImg from '../../assets/images/seed-el-balad/logo.jpeg';
import { useLanguage } from '../../context/LanguageContext';

/**
 * SeedElBaladFactoryHeader Component
 * 
 * Renders the top brand header/banner for the Factory Page, highlighting the
 * Seed El Balad production facility, certifications, and logo.
 * 
 * @returns {React.JSX.Element} The rendered factory header component.
 */
const SeedElBaladFactoryHeader = () => {
  const { language } = useLanguage()

  return (
    <div className="seed-factory-banner text-center" id="seed-factory-header">
      <div className="container seed-factory-banner-content">
        <div className="seed-factory-logo-badge">
          <img src={logoImg} alt="SEED EL BALAD Logo" />
        </div>
        
        <h1 className="fw-bold mb-3">
          {language === 'en' ? 'SEED EL BALAD Production Facility' : 'منشأة إنتاج سيد البلد SEED EL BALAD'}
        </h1>
        
        <p className="lead mx-auto mb-4" style={{ maxWidth: '750px' }}>
          {language === 'en' 
            ? 'Inside our state-of-the-art smoking chambers, we smoke premium herrings to golden perfection. Discover how we preserve traditional Egyptian tastes while keeping the highest European food safety standards.'
            : 'داخل غرف التدخين المتطورة لدينا، نقوم بتدخين أسماك الرنجة الفاخرة للوصول إلى اللون الذهبي الممتاز. استكشف كيف نحافظ على المذاق المصري التقليدي بأعلى معايير سلامة الأغذية الأوروبية.'
          }
        </p>
        
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-2">
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{language === 'en' ? '100% Natural Hardwood Smoke' : 'تدخين طبيعي 100% بأخشاب الغابات'}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{language === 'en' ? 'Zero Artificial Additives' : 'خالٍ تماماً من الإضافات الصناعية'}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{language === 'en' ? 'HACCP & ISO Certified Production' : 'إنتاج معتمد بشهادات الهاسب والآيزو'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedElBaladFactoryHeader;
