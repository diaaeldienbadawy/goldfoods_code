import React from 'react';
import imgPouch from '../../assets/images/seed-el-balad/img_6.png';
import imgFillet from '../../assets/images/seed-el-balad/img_11.png';
import imgJars from '../../assets/images/seed-el-balad/img_3.png';
import imgVacuum from '../../assets/images/seed-el-balad/img_7.png';
import imgCans from '../../assets/images/seed-el-balad/img_10.png';

/**
 * SeedElBaladProductsShowcase Component
 * 
 * Renders a grid showing the different product categories and packaging options
 * for the Seed El Balad brand (pouches, jars, vacuum packs, canned fish, fresh fillets).
 * 
 * @returns {React.JSX.Element} The rendered product showcase component.
 */
const SeedElBaladProductsShowcase = () => {
  const categories = [
    {
      title: 'Smoked Herring Pouch / رنجة مدخنة (ظرف)',
      desc: 'Stand-up zipper pouches containing premium smoked herring. Sealed to preserve natural oils and smokiness with clear nutrition facts.',
      tag: 'Best Seller',
      image: imgPouch
    },
    {
      title: 'Fresh Fillet Slices / شرائح فيليه طازجة',
      desc: 'Skinless and boneless premium smoked herring fillets sliced and vacuum-sealed in pouches. Easy, clean, and ready to serve.',
      tag: 'Fillet Slices',
      image: imgFillet
    },
    {
      title: 'Gourmet Paste Jars / معجون رنجة فاخر (برطمانات)',
      desc: 'Rich, smooth smoked herring paste blended with premium spices, packed in glass jars and nestled on ice inside premium boxes.',
      tag: 'Gourmet Paste',
      image: imgJars
    },
    {
      title: 'Vacuum Sealed Boxes / رنجة مغلفة حرارياً',
      desc: 'Whole golden-smoked herrings vacuum-sealed in heavy food-grade film, packed in sturdy blue brand cartons for bulk export and retail.',
      tag: 'Vacuum Pack',
      image: imgVacuum
    },
    {
      title: 'Canned Herring / رنجة معلبة سهلة الفتح',
      desc: 'Easy-open cans containing smoked herring chunks in high-quality vegetable oil. Highly durable packaging for long-term storage.',
      tag: 'Canned Food',
      image: imgCans
    }
  ];

  return (
    <section className="seed-showcase-section" id="seed-products-showcase">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '14px', letterSpacing: '2px' }}>Product Range</span>
          <h2 className="fw-bold mt-2 text-dark" style={{ fontSize: '36px' }}>SEED EL BALAD Packagings & Varieties</h2>
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
