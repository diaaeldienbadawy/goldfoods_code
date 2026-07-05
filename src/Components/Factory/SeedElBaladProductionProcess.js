import React from 'react';
import imgStage1 from '../../assets/images/seed-el-balad/img_2.jpeg';
import imgStage2 from '../../assets/images/seed-el-balad/img_4.jpeg';
import imgStage3 from '../../assets/images/seed-el-balad/img_21.jpeg';
import imgStage4 from '../../assets/images/seed-el-balad/img_22.jpeg';
import { useLanguage } from '../../context/LanguageContext';

/**
 * SeedElBaladProductionProcess Component
 * 
 * Renders a visual 4-step production timeline demonstrating the manufacturing
 * stages of Seed El Balad Smoked Herring, from raw material handling to gourmet plates.
 * 
 * @returns {React.JSX.Element} The rendered timeline component.
 */
const SeedElBaladProductionProcess = () => {
  const { language } = useLanguage()

  const steps = [
    {
      num: '1',
      title: language === 'en' ? 'Sourcing & Hanging' : 'الاختيار والتعليق',
      desc: language === 'en' 
        ? 'We select premium, fatty herring imported from sustainable Atlantic fisheries. The fish are salted naturally and carefully arranged on stainless steel racks in a clean, temperature-controlled environment.'
        : 'نختار أسماك الرنجة الفاخرة المستوردة من مصايد الأطلسي المستدامة. يتم تمليح الأسماك طبيعياً وترتيبها بعناية على رفوف من الفولاذ المقاوم للصدأ في بيئة نظيفة ومراقبة الحرارة.',
      image: imgStage1,
      alt: 'Raw herring arranged on racks'
    },
    {
      num: '2',
      title: language === 'en' ? 'Natural Beechwood Smoking' : 'التدخين الطبيعي',
      desc: language === 'en'
        ? 'Racks are placed in smoking chambers. We slowly smoke the herring for hours over natural beechwood and oak chips. This process gives it its golden color and authentic rich aroma without any liquid smoke or chemical additives.'
        : 'توضع الرفوف في أفران التدخين المخصصة. نقوم بتدخين الرنجة ببطء لساعات فوق رقائق خشب الزان والبلوط الطبيعي. تمنحها هذه العملية لونها الذهبي ورائحتها الغنية دون أي إضافات كيميائية.',
      image: imgStage2,
      alt: 'Hanging herring during smoking process'
    },
    {
      num: '3',
      title: language === 'en' ? 'Premium Packing' : 'التعبئة والتغليف',
      desc: language === 'en'
        ? 'Once cooled, the smoked herring is packed under strict hygiene conditions. We offer vacuum packs, sealed zipper pouches, canned preserves, and jars, immediately stored to lock in the fresh flavor.'
        : 'بمجرد تبريد الرنجة المدخنة، يتم تعبئتها تحت ظروف صحية صارمة للغاية. نوفر تغليفاً حرارياً، أظرفاً بسحاب، معلبات، وبرطمانات، تُخزن فوراً للحفاظ على النكهة الطازجة.',
      image: imgStage3,
      alt: 'Finished SEED EL BALAD boxes and packages'
    },
    {
      num: '4',
      title: language === 'en' ? 'Gourmet Serving' : 'التقديم والطهي',
      desc: language === 'en'
        ? 'The final product is ready to eat, featuring a rich taste, perfect oiliness, and high nutritional value. Best served with lemon slices, tahini, onions, and fresh bread.'
        : 'المنتج النهائي جاهز تماماً للأكل، ويتميز بطعم غني ودسم مثالي وقيمة غذائية عالية. يقدم مع شرائح الليمون، الطحينة، البصل، والخبز الطازج.',
      image: imgStage4,
      alt: 'Plated smoked herring fillets'
    }
  ];

  return (
    <section className="seed-process-section" id="seed-process-timeline">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '14px', letterSpacing: '2px' }}>{language === 'en' ? 'How We Do It' : 'كيف نقوم بذلك'}</span>
          <h2 className="fw-bold mt-2" style={{ fontSize: '36px' }}>{language === 'en' ? 'SEED EL BALAD Production Journey' : 'رحلة إنتاج سيد البلد SEED EL BALAD'}</h2>
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
