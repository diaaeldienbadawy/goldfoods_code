import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/images/seed-el-balad/logo.png';
import imgMain from '../../assets/images/seed-el-balad/img_3.png';
import imgSecondary from '../../assets/images/seed-el-balad/img_6.png';
import imgTertiary from '../../assets/images/seed-el-balad/img_7.png';

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
            <span className="seed-brand-badge">Premium Sub-Brand</span>
            
            <h2 className="seed-brand-title">
              <span className="primary-color">سيد البلد</span> <span className="d-block d-md-inline primary-color">SEED EL BALAD</span>
            </h2>
            
            <div className="seed-brand-subtitle">Authentic Egyptian Smoked Herring</div>
            
            <p className="seed-brand-story">
              Our flagship brand, <strong>SEED EL BALAD</strong>, represents the pinnacle of smoked herring craftsmanship. Sourced from the cold, clean waters of the Atlantic, our herring is processed daily at the Gold Foods factory using traditional salting techniques and slowly smoked over premium, chemical-free oak and beechwood. This ensures a rich, authentic flavor profile and a tender texture that Egyptians have loved for generations.
            </p>
            
            <div className="seed-logo-container">
              <img src={logoImg} alt="Seed El Balad Logo" className="seed-logo-img" />
              <div className="seed-logo-text">
                <h4>Original Quality</h4>
                <p>100% natural smoking process. No artificial additives or colors.</p>
              </div>
            </div>
            
            <button className="seed-btn-explore" onClick={handleExploreClick}>
              Explore Production Process
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
                <span>★</span> Pure Oak Smoked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedElBaladSection;
