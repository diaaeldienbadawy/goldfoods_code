import React from 'react';
import imgStage1 from '../../assets/images/seed-el-balad/img_2.jpeg';
import imgStage2 from '../../assets/images/seed-el-balad/img_4.jpeg';
import imgStage3 from '../../assets/images/seed-el-balad/img_21.jpeg';
import imgStage4 from '../../assets/images/seed-el-balad/img_22.jpeg';

/**
 * SeedElBaladProductionProcess Component
 * 
 * Renders a visual 4-step production timeline demonstrating the manufacturing
 * stages of Seed El Balad Smoked Herring, from raw material handling to gourmet plates.
 * 
 * @returns {React.JSX.Element} The rendered timeline component.
 */
const SeedElBaladProductionProcess = () => {
  const steps = [
    {
      num: '1',
      title: 'Sourcing & Hanging / الاختيار والتعليق',
      desc: 'We select premium, fatty herring imported from sustainable Atlantic fisheries. The fish are salted naturally and carefully arranged on stainless steel racks in a clean, temperature-controlled environment.',
      image: imgStage1,
      alt: 'Raw herring arranged on racks'
    },
    {
      num: '2',
      title: 'Natural Beechwood Smoking / التدخين الطبيعي',
      desc: 'Racks are placed in smoking chambers. We slowly smoke the herring for hours over natural beechwood and oak chips. This process gives it its golden color and authentic rich aroma without any liquid smoke or chemical additives.',
      image: imgStage2,
      alt: 'Hanging herring during smoking process'
    },
    {
      num: '3',
      title: 'Premium Packing / التعبئة والتغليف',
      desc: 'Once cooled, the smoked herring is packed under strict hygiene conditions. We offer vacuum packs, sealed zipper pouches, canned preserves, and jars, immediately stored to lock in the fresh flavor.',
      image: imgStage3,
      alt: 'Finished SEED EL BALAD boxes and packages'
    },
    {
      num: '4',
      title: 'Gourmet Serving / التقديم والطهي',
      desc: 'The final product is ready to eat, featuring a rich taste, perfect oiliness, and high nutritional value. Best served with lemon slices, tahini, onions, and fresh bread.',
      image: imgStage4,
      alt: 'Plated smoked herring fillets'
    }
  ];

  return (
    <section className="seed-process-section" id="seed-process-timeline">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '14px', letterSpacing: '2px' }}>How We Do It</span>
          <h2 className="fw-bold mt-2" style={{ fontSize: '36px' }}>SEED EL BALAD Production Journey</h2>
          <div className="mx-auto bg-primary mt-3" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
        </div>
        
        <div className="seed-timeline">
          {steps.map((step, idx) => (
            <div className="seed-timeline-item" key={step.num}>
              <div className="seed-timeline-badge">{step.num}</div>
              
              <div className={`row align-items-center ${idx % 2 === 0 ? '' : 'flex-lg-row-reverse'}`}>
                {/* Text Card */}
                <div className="col-lg-6 mb-4 mb-lg-0 px-lg-5">
                  <div className="seed-timeline-card">
                    <h3 className="fw-bold mb-3" style={{ fontSize: '22px', color: 'var(--text-h1-h2)' }}>{step.title}</h3>
                    <p className="seed-category-desc">{step.desc}</p>
                  </div>
                </div>
                
                {/* Image Showcase */}
                <div className="col-lg-6 px-lg-5">
                  <div className="seed-timeline-image shadow-sm">
                    <img src={step.image} alt={step.alt} className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeedElBaladProductionProcess;
