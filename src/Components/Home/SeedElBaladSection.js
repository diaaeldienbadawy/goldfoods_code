import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/images/seed-el-balad/logo.jpeg';
import imgMain from '../../assets/images/seed-el-balad/img_3.jpeg';
import imgSecondary from '../../assets/images/seed-el-balad/img_6.jpeg';
import imgTertiary from '../../assets/images/seed-el-balad/img_7.jpeg';
import { useLanguage } from '../../context/LanguageContext';

/**
 * SeedElBaladSection Component
 * 
 * Renders a premium promotional section for the 'Seed El Balad' brand on the homepage.
 * It features a split layout:
 * - Left: Brand description, typography, logo, and a link to the Factory page.
 * - Right: A dynamic collage of product packaging and images with hover effects.
 * 
 * @returns {React.JSX.Element} The rendered brand section.
 */
const SeedElBaladSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  /**
   * Handles navigation to the Factory page.
   */
  const handleExploreClick = () => {
    navigate('/factory');
  };

  return (
    <section className="seed-el-balad-section" id="seed-el-balad">
      <div className="container seed-el-balad-content">
        <div className="row align-items-center">
          {/* Brand Story & Details */}
          <div className="col-lg-6 pr-lg-5">
            <span className="seed-brand-badge">{t('subBrand')}</span>
            
            <h2 className="seed-brand-title">
              <span className="primary-color">{t('brandTitle')}</span>
            </h2>
            
            <div className="seed-brand-subtitle">{t('authenticEgyptianHerring')}</div>
            
            <p className="seed-brand-story">
              {t('brandStory')}
            </p>
            
            <div className="seed-logo-container">
              <img src={logoImg} alt="Seed El Balad Logo" className="seed-logo-img" />
              <div className="seed-logo-text">
                <h4>{t('originalQuality')}</h4>
                <p>{t('noAdditives')}</p>
              </div>
            </div>
            
            <button className="seed-btn-explore" onClick={handleExploreClick}>
              {t('exploreProcess')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Interactive Image Collage */}
          <div className="col-lg-6">
            <div className="seed-collage-container">
              {/* Product box with jars */}
              <div className="seed-collage-card seed-card-main">
                <img src={imgMain} alt="Seed El Balad Premium Jars Box" />
              </div>
              
              {/* Zipper pouch packaging */}
              <div className="seed-collage-card seed-card-secondary">
                <img src={imgSecondary} alt="Seed El Balad Smoked Herring Pouch" />
              </div>
              
              {/* Vacuum sealed box packaging */}
              <div className="seed-collage-card seed-card-tertiary">
                <img src={imgTertiary} alt="Seed El Balad Vacuum Sealed Herring" />
              </div>
              
              {/* Floating Badge */}
              <div className="seed-card-badge-floating">
                <span>★</span> {t('pureOakSmoked')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedElBaladSection;
