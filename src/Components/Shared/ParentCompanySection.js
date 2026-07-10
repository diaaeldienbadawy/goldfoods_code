import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import goldFoodsLogo from '../../assets/images/logo.png';
import seedElBaladLogo from '../../assets/images/seed-el-balad/logo.png';
import './ParentCompanySection.css';

const ParentCompanySection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="parent-company-section py-5 my-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text Column */}
          <div className="col-lg-6">
            <div className="parent-company-text-wrapper">
              <span className="parent-company-tag text-uppercase fw-bold text-primary mb-2 d-inline-block">
                {t('parentCompanyTitle')}
              </span>
              <h2 className="fw-bold mb-4 parent-company-subtitle">
                {t('parentCompanySubtitle')}
              </h2>
              <div className="accent-bar mb-4"></div>
              <p className="parent-company-desc mb-3">
                {t('parentCompanyDesc1')}
              </p>
              <p className="parent-company-desc">
                {t('parentCompanyDesc2')}
              </p>
            </div>
          </div>

          {/* Logo Connection Column */}
          <div className="col-lg-6">
            <div className="logo-connection-container p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
              
              {/* Parent Logo Card */}
              <div className="logo-card parent-card shadow-sm d-flex flex-column align-items-center justify-content-center p-4">
                <div className="logo-img-wrapper d-flex align-items-center justify-content-center mb-3">
                  <img src={goldFoodsLogo} alt="Gold Foods Logo" className="logo-img parent-logo" />
                </div>
                <span className="logo-label text-center fw-semibold">
                  {t('parentLabel')}
                </span>
              </div>

              {/* Connection Indicator */}
              <div className="connection-arrow-wrapper d-flex align-items-center justify-content-center">
                <div className="arrow-line d-none d-md-block"></div>
                <span className="material-symbols-outlined connection-icon">
                  {language === 'ar' ? 'arrow_back' : 'arrow_forward'}
                </span>
                <div className="arrow-line d-none d-md-block"></div>
              </div>

              {/* Brand Logo Card */}
              <div className="logo-card brand-card shadow-sm d-flex flex-column align-items-center justify-content-center p-4">
                <div className="logo-img-wrapper d-flex align-items-center justify-content-center mb-3">
                  <img src={seedElBaladLogo} alt="Seed El Balad Logo" className="logo-img brand-logo" />
                </div>
                <span className="logo-label text-center fw-semibold">
                  {t('brandLabel')}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentCompanySection;
