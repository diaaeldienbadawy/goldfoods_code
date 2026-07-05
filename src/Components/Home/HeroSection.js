import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const slides = [
    {
      video: "/video2.mp4.mp4",
      badge: language === 'en' ? "SEED EL BALAD | Premium Selection" : "سيد البلد | اختيار النخبة الفاخر",
      title: language === 'en' ? (
        <>
          The <span className="gold-text">Golden</span> Standard of Smoked Herring
        </>
      ) : (
        <>
          <span className="gold-text">المعيار</span> الذهبي للرنجة المدخنة
        </>
      ),
      desc: language === 'en' 
        ? "Sourced from the cold, clean waters of the Atlantic, bringing you the pinnacle of smoked herring craftsmanship with world-class quality."
        : "ننتقي أفضل الأسماك من المحيط الأطلسي لنقدم لك فخر الصناعة المصرية بجودة عالمية تستحق مائدتك.",
      btnText: language === 'en' ? "Discover Our Family" : "اكتشف عائلتنا",
      btnLink: "/product/seed-el-balad"
    },
    {
      video: "/video1.mp4.mp4",
      badge: language === 'en' ? "AUTHENTIC CRAFTSMANSHIP | Culinary Art" : "حرفية أصيلة | فن الطهي والتقديم",
      title: language === 'en' ? (
        <>
          Premium Fillet Smoked to <span className="gold-text">Golden</span> Perfection
        </>
      ) : (
        <>
          فيليه فاخر مدخن لدرجة <span className="gold-text">الكمال</span> الذهبية
        </>
      ),
      desc: language === 'en'
        ? "Naturally smoked over premium, chemical-free oak and beechwood, ensuring a rich, authentic flavor profile and a tender texture."
        : "شرائح رنجة مدخنة بأخشاب الزان والبلّوط الطبيعية بالكامل وخالية من أي كيماويات لطعم أصيل لا يُنسى.",
      btnText: language === 'en' ? "Browse Products" : "تصفح منتجاتنا",
      btnLink: "/product"
    },
    {
      video: "/video3.mp4.mp4",
      badge: language === 'en' ? "CULINARY HERITAGE | Authentic Taste" : "إرث عريق | الطعم الأصيل المميز",
      title: language === 'en' ? (
        <>
          Exceptional <span className="gold-text">Quality</span> Fit for Your Table
        </>
      ) : (
        <>
          <span className="gold-text">جودة</span> استثنائية تليق بسفرتك
        </>
      ),
      desc: language === 'en'
        ? "Crafted with precise, traditional salting techniques and slowly smoked to deliver a healthy, safe, and mouth-watering experience."
        : "نهتم بأدق التفاصيل من التمليح الخفيف الموزون لتقديم منتج صحي، آمن، ولذيذ يليق باللمة الطيبة.",
      btnText: language === 'en' ? "Contact Us" : "تواصل معنا",
      btnLink: "/contact-us"
    }
  ];

  // Set up video references list
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length);
  }, [slides.length]);

  // Handle slide auto-rotation
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per video slide
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  // Play/Pause active video and handle mute state
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        video.muted = isMuted;
        if (idx === currentSlide) {
          video.currentTime = 0;
          video.play().catch(err => console.log("Video play interrupted:", err));
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide, isMuted]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const handleDotClick = (idx) => {
    setCurrentSlide(idx);
    startTimer();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="hero-section position-relative w-100">
      
      {/* Slides mapping */}
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={`hero-video-slide ${idx === currentSlide ? 'active' : ''}`}
        >
          <video
            ref={el => videoRefs.current[idx] = el}
            className="hero-video-element"
            loop
            muted={isMuted}
            playsInline
            autoPlay={idx === 0}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* Modern Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Floating Interactive Controls */}
      <button 
        className="hero-control-btn prev" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>
      
      <button 
        className="hero-control-btn next" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      {/* Page Content Centered */}
      <div className="hero-content-container container">
        <div className="row w-100 justify-content-start">
          <div className="col-lg-8 col-md-10">
            {/* Key attribute changes triggers text animations */}
            <div className="hero-slide-text" key={`${currentSlide}-${language}`}>
              <span className="hero-badge">{slides[currentSlide].badge}</span>
              <h1 className="hero-title">
                {slides[currentSlide].title}
              </h1>
              <p className="hero-desc">{slides[currentSlide].desc}</p>
              
              <div className="hero-btn-group">
                <button 
                  onClick={() => navigate(slides[currentSlide].btnLink)} 
                  className="hero-primary-btn"
                >
                  {slides[currentSlide].btnText}
                </button>
                <button 
                  onClick={() => navigate('/product')} 
                  className="hero-secondary-btn"
                >
                  {t('allProducts')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
          ></div>
        ))}
      </div>

      {/* Floating Sound Toggle Control */}
      <button 
        className="hero-mute-btn" 
        onClick={toggleMute}
        title={isMuted ? t('Unmute Sound') : t('Mute Sound')}
      >
        <span className="material-symbols-outlined">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>

    </div>
  );
};

export default HeroSection;
