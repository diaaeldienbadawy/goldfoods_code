import React from 'react';
import imgPouch from '../../assets/images/seed-el-balad/img_6.jpeg';
import imgFillet from '../../assets/images/seed-el-balad/img_11.jpeg';
import imgJars from '../../assets/images/seed-el-balad/img_3.jpeg';
import imgVacuum from '../../assets/images/seed-el-balad/img_7.jpeg';
import imgCans from '../../assets/images/seed-el-balad/img_10.jpeg';
import { useLanguage } from '../../context/LanguageContext';

/**
 * SeedElBaladProductsShowcase Component
 * 
 * Renders a grid showing the different product categories and packaging options
 * for the Seed El Balad brand (pouches, jars, vacuum packs, canned fish, fresh fillets).
 * 
 * @returns {React.JSX.Element} The rendered product showcase component.
 */
const SeedElBaladProductsShowcase = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t('pouchTitle'),
      desc: t('pouchDesc'),
      tag: t('pouchTag'),
      image: imgPouch
    },
    {
      title: t('filletTitle'),
      desc: t('filletDesc'),
      tag: t('filletTag'),
      image: imgFillet
    },
    {
      title: t('jarsTitle'),
      desc: t('jarsDesc'),
      tag: t('jarsTag'),
      image: imgJars
    },
    {
      title: t('vacuumTitle'),
      desc: t('vacuumDesc'),
      tag: t('vacuumTag'),
      image: imgVacuum
    },
    {
      title: t('cannedTitle'),
      desc: t('cannedDesc'),
      tag: t('cannedTag'),
      image: imgCans
    }
  ];

  return (
    <section className="seed-showcase-section" id="seed-products-showcase">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '14px', letterSpacing: '2px' }}>{t('productRange')}</span>
          <h2 className="fw-bold mt-2 text-dark" style={{ fontSize: '36px' }}>{t('varietiesTitle')}</h2>
          <div className="mx-auto bg-primary mt-3" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
        </div>
        
        <div className="row justify-content-center g-4">
          {categories.map((cat) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={cat.title}>
              <div className="seed-category-card card">
                <div className="seed-category-img-wrapper">
                  <span className="seed-category-tag">{cat.tag}</span>
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="seed-category-body">
                  <h3 className="seed-category-title">{cat.title}</h3>
                  <p className="seed-category-desc">{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeedElBaladProductsShowcase;
