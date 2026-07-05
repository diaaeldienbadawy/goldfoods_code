import React, { useEffect, useState, useRef } from 'react';
import { useNav } from '../../hocks/layout/useNav';
import { useLanguage } from '../../context/LanguageContext';
import fish1 from '../../assets/images/products/fishes/fish1.png';
import fish2 from '../../assets/images/products/fishes/fish2.png';
import fish3 from '../../assets/images/products/fishes/fish3.png';
import fish4 from '../../assets/images/products/fishes/fish4.png';
import fish5 from '../../assets/images/products/fishes/fish5.png';
import fish6 from '../../assets/images/products/fishes/fish6.png';

const HomeAnimatedFish = () => {
  const { language, t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimer = useRef(null);
  const { nav, scrollTop } = useNav();

  const fishs = [
    {
      fish: fish1,
      title: language === 'en' ? "Frozen Mackerel" : "ماكريل مجمد",
      scientific: "Scomber scombrus",
      origin: language === 'en' ? "North Atlantic Ocean, Norway" : "شمال المحيط الأطلسي، النرويج",
      facts: language === 'en' 
        ? ["Rich in Omega-3 fatty acids", "Firm texture & rich oils", "Ideal for grilling and smoking"]
        : ["غني بأحماض أوميغا 3 الدهنية الأساسية", "قوام متماسك ونسبة زيوت طبيعية مثالية", "ممتاز للشواء والتدخين والطهي"]
    },
    {
      fish: fish2,
      title: language === 'en' ? "Horse Mackerel" : "باغة (ماكريل الحصان)",
      scientific: "Trachurus trachurus",
      origin: language === 'en' ? "East Atlantic & Mediterranean" : "شرق المحيط الأطلسي والبحر المتوسط",
      facts: language === 'en'
        ? ["High quality protein source", "Distinctive savory flavor", "Highly popular in traditional Mediterranean dishes"]
        : ["مصدر بروتين ممتاز وسهل الهضم", "نكهة مميزة ومذاق شهي وغني", "شعبية كبيرة في أطباق البحر الأبيض المتوسط"]
    },
    {
      fish: fish3,
      title: language === 'en' ? "Silver Smelt" : "سيلفر سميلت",
      scientific: "Argentina silus",
      origin: language === 'en' ? "North Atlantic Waters" : "مياه شمال المحيط الأطلسي",
      facts: language === 'en'
        ? ["Delicate sweet flavor", "Very low fat content", "Excellent for light pan-frying"]
        : ["نكهة حلوة خفيفة ومستساغة جداً", "محتوى دهني منخفض للغاية وخفيف", "ممتاز للقلي الخفيف والتحمير السريع"]
    },
    {
      fish: fish4,
      title: language === 'en' ? "Frozen Herring" : "رنجة مجمدة",
      scientific: "Clupea harengus",
      origin: language === 'en' ? "North Sea, Netherlands" : "بحر الشمال، هولندا",
      facts: language === 'en'
        ? ["Premium fat ratio", "Tender meat texture", "Primary choice for smoking process"]
        : ["نسبة دسم طبيعية ممتازة ومثالية", "قوام طري ولحم متماسك وفاتح", "الاختيار الأول والأساسي لعمليات التدخين"]
    },
    {
      fish: fish5,
      title: language === 'en' ? "Frozen Salmon" : "سالمون مجمد",
      scientific: "Salmo salar",
      origin: language === 'en' ? "Cold waters of Norway" : "مياه النرويج الباردة والنقية",
      facts: language === 'en'
        ? ["Superfood rich in healthy nutrients", "Soft texture & premium color", "Fillet-grade export quality"]
        : ["غذاء خارق غني بالعناصر الغذائية الهامة والفسفور", "قوام ناعم وطعم غني مع لون طبيعي ممتاز", "جودة تصديرية فاخرة ومناسبة للفيليه"]
    },
    {
      fish: fish6,
      title: language === 'en' ? "Smoked Herring" : "رنجة مدخنة فاخرة",
      scientific: "Clupea harengus (Smoked)",
      origin: language === 'en' ? "Gold Foods Factory, Belbeis" : "مصنع جولد فودز، بلبيس",
      facts: language === 'en'
        ? ["Natural beechwood smoked", "Lightly salted to perfection", "Authentic traditional taste"]
        : ["مدخنة بخشب الزان البكر الطبيعي 100%", "تمليح خفيف متوازن يضمن نكهة رائعة وصحية", "طعم أصيل ومذاق تقليدي لا ينسى"]
    }
  ];

  const activeFish = fishs[index];

  // Start Autoplay cycle
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % fishs.length);
      }, 5000);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [isAutoPlaying, fishs.length]);

  // Handle manual tab select
  const handleSelect = (idx) => {
    setIndex(idx);
    setIsAutoPlaying(false); // Stop autoplay when user manually interacts
    // Restart autoplay after 10s of inactivity
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div className="container py-5 mt-4">
      <div className="text-center mb-5">
        <span className="text-uppercase tracking-wider fw-bold text-muted" style={{ fontSize: '13px', letterSpacing: '2px' }}>{t('importedVarieties')}</span>
        <h2 className="fw-bold mt-2 text-dark" style={{ fontSize: '36px' }}>{language === 'en' ? 'Our Premium Fish Species' : 'سلالات الأسماك الفاخرة لدينا'}</h2>
        <div className="mx-auto bg-primary mt-3" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
      </div>

      <div className="seed-fish-showcase-box bg-white shadow-sm p-4 p-md-5 rounded-4 border border-light">
        <div className="row align-items-center g-5">
          
          {/* Details Column */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="seed-fish-details" key={`${index}-${language}`}>
              <span className="seed-fish-badge-type mb-3">{t('subBrand')}</span>
              
              <h3 className="fw-bold text-dark mb-3 fs-32">
                {activeFish.title}
              </h3>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="seed-meta-pill">
                  <strong>{language === 'en' ? 'Scientific' : 'الاسم العلمي'}:</strong> <em>{activeFish.scientific}</em>
                </span>
                <span className="seed-meta-pill">
                  <strong>{language === 'en' ? 'Origin' : 'المنشأ'}:</strong> {activeFish.origin}
                </span>
              </div>

              <ul className="list-unstyled mb-5">
                {activeFish.facts.map((fact, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2 mb-3 text-muted">
                    <span className="seed-green-check-icon">✓</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="solid-primary-button f-call-to-action px-5 py-3 rounded-pill"
                onClick={() => { nav('/product'); scrollTop(); }}
              >
                {t('exploreSpecs')}
              </button>
            </div>
          </div>

          {/* Ocean Portal Visual Column */}
          <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
            <div className="seed-ocean-portal position-relative d-flex align-items-center justify-content-center">
              {/* Floating Bubbles */}
              <div className="bubbles-container">
                <div className="ocean-bubble b-1"></div>
                <div className="ocean-bubble b-2"></div>
                <div className="ocean-bubble b-3"></div>
                <div className="ocean-bubble b-4"></div>
                <div className="ocean-bubble b-5"></div>
              </div>

              {/* Water Wave Overlay Effect */}
              <div className="water-wave-overlay"></div>

              {/* Animated Fish Image - key={index} resets CSS animation on switch */}
              <div className="seed-ocean-fish-wrapper" key={index}>
                <img 
                  src={activeFish.fish} 
                  alt={activeFish.title} 
                  className="seed-ocean-fish-img img-fluid"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Tabs / Selection Slider */}
        <div className="seed-fish-tabs mt-5 pt-4 border-top border-light">
          <div className="d-flex flex-wrap justify-content-between w-100 gap-2">
            {fishs.map((f, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`seed-fish-tab-btn ${index === idx ? 'active' : ''}`}
              >
                <span className="tab-dot"></span>
                {f.title}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeAnimatedFish;
