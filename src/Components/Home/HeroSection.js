import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    video: "/video2.mp4.mp4",
    badge: "سيد البلد | Premium Selection",
    title: "المذاق الذهبي للرنجة المدخنة",
    desc: "ننتقي أفضل الأسماك من المحيط الأطلسي لنقدم لك فخر الصناعة المصرية بجودة عالمية تستحق مائدتك.",
    btnText: "اكتشف عائلتنا",
    btnLink: "/product/seed-el-balad"
  },
  {
    video: "/video1.mp4.mp4",
    badge: "سر الصنعة والمذاق | Culinary Craft",
    title: "رنجة مخلية معالجة بحرفية وشغف",
    desc: "شرائح رنجة مدخنة بأخشاب الزان والبلّوط الطبيعية بالكامل وخالية من أي كيماويات لطعم أصيل لا يُنسى.",
    btnText: "تصفح منتجاتنا",
    btnLink: "/product"
  },
  {
    video: "/video3.mp4.mp4",
    badge: "فخامة التقديم | Authentic Taste",
    title: "جودة فاخرة تزين كل سفرة",
    desc: "نهتم بأدق التفاصيل من التمليح الخفيف الموزون لتقديم منتج صحي، آمن، ولذيذ يليق باللمة الطيبة.",
    btnText: "تواصل معنا",
    btnLink: "/contact-us"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // Set up video references list
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length);
  }, []);

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
  }, []);

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
            <div className="hero-slide-text" key={currentSlide}>
              <span className="hero-badge">{slides[currentSlide].badge}</span>
              <h1 className="hero-title">
                {slides[currentSlide].title.split(' ')[0] === "المذاق" || slides[currentSlide].title.split(' ')[0] === "جودة" ? (
                  <>
                    <span className="gold-text">{slides[currentSlide].title.split(' ')[0]}</span>{' '}
                    {slides[currentSlide].title.split(' ').slice(1).join(' ')}
                  </>
                ) : (
                  slides[currentSlide].title
                )}
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
                  كل المنتجات
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
        title={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
      >
        <span className="material-symbols-outlined">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>

    </div>
  );
};

export default HeroSection;
