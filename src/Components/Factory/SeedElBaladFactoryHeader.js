import React from 'react';
import logoImg from '../../assets/images/seed-el-balad/logo.jpeg';

/**
 * SeedElBaladFactoryHeader Component
 * 
 * Renders the top brand header/banner for the Factory Page, highlighting the
 * Seed El Balad production facility, certifications, and logo.
 * 
 * @returns {React.JSX.Element} The rendered factory header component.
 */
const SeedElBaladFactoryHeader = () => {
  return (
    <div className="seed-factory-banner text-center" id="seed-factory-header">
      <div className="container seed-factory-banner-content">
        <div className="seed-factory-logo-badge">
          <img src={logoImg} alt="SEED EL BALAD Logo" />
        </div>
        
        <h1 className="fw-bold mb-3">سيد البلد &bull; SEED EL BALAD Facility</h1>
        
        <p className="lead mx-auto mb-4" style={{ maxWidth: '750px' }}>
          Inside our state-of-the-art smoking chambers, we smoke premium herrings to golden perfection. Discover how we preserve traditional Egyptian tastes while keeping the highest European food safety standards.
        </p>
        
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-2">
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>100% Natural Hardwood Smoke</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Zero Artificial Additives</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <svg className="seed-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>HACCP & ISO Certified Production</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedElBaladFactoryHeader;
