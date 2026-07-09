import React, { useEffect, useRef, useState } from 'react'

const Slider = () => {
    const videos = [
        '/factory-video3.mp4',
        '/factory-video2.mp4',
        '/factory-video1.mp4'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(err => {
                console.log("Autoplay prevented:", err);
            });
        }
    }, [currentIndex]);

    const handleEnded = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='slider-container shadow-lg' style={{ border: '2px solid rgba(212, 175, 55, 0.2)', backgroundColor: '#0d1b2a' }}>
            <div className='slide'>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    autoPlay
                    onEnded={handleEnded}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src={videos[currentIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='dots-container'>
                {
                    videos.map((_, i) => (
                        <div 
                            className={`dot ${i === currentIndex ? 'active' : ''}`} 
                            key={i} 
                            onClick={() => handleDotClick(i)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;