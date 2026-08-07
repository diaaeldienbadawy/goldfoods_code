import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('goldfoods_cookie_consent');
    if (!consent) {
      // Delay showing the banner by 1.5 seconds for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('goldfoods_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('goldfoods_cookie_consent', 'declined');
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    navigate('/privacy-policy');
    // Scroll to cookies section if they visit privacy policy
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent-banner shadow-lg p-4 rounded-4 border card-animate-in ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        {/* Info Column */}
        <div className="d-flex align-items-start gap-3">
          <div className="cookie-icon-wrapper bg-primary text-white rounded-3 p-2 d-flex align-items-center justify-content-center shrink-0">
            <span className="material-symbols-outlined fs-3">cookie</span>
          </div>
          <div>
            <h5 className="fw-bold mb-1 cookie-banner-title" style={{ fontSize: '16px' }}>
              {language === 'en' ? 'Cookie Preference' : 'تفضيلات ملفات تعريف الارتباط'}
            </h5>
            <p className="mb-0 text-muted small cookie-banner-text" style={{ lineHeight: '1.5' }}>
              {t('cookieMessage')}
            </p>
          </div>
        </div>

        {/* Buttons Column */}
        <div className="d-flex align-items-center gap-2 w-100-mobile shrink-0 justify-content-end">
          <button 
            type="button" 
            className="btn btn-link text-muted text-decoration-none fw-semibold py-2 px-3 decline-btn"
            onClick={handleDecline}
            style={{ fontSize: '14px' }}
          >
            {t('cookieDecline')}
          </button>
          
          <button 
            type="button" 
            className="btn btn-outline-secondary fw-semibold py-2 px-3 learn-more-btn"
            onClick={handleLearnMore}
            style={{ fontSize: '14px' }}
          >
            {t('cookieReadMore')}
          </button>

          <button 
            type="button" 
            className="btn btn-secondary solid-primary-button fw-bold py-2 px-4 accept-btn"
            onClick={handleAccept}
            style={{ fontSize: '14px', border: 'none' }}
          >
            {t('cookieAccept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
