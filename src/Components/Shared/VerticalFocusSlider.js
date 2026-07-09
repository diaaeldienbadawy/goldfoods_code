import React, { useEffect, useState } from 'react';
import './VerticalFocusSlider.css';

const VerticalFocusSlider = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="vertical-focus-slider-wrapper">
            {images.map((src, idx) => {
                let offset = idx - activeIndex;
                const half = Math.floor(images.length / 2);
                
                // Circular wrap offset calculation
                if (offset < -half) offset += images.length;
                if (offset > half) offset -= images.length;

                const isVisible = Math.abs(offset) <= 1;

                let translateY = '0px';
                let scale = 0.8;
                let opacity = 0;
                let zIndex = 0;

                if (offset === 0) {
                    translateY = 'var(--translate-active)';
                    scale = 1.15;
                    opacity = 1;
                    zIndex = 10;
                } else if (offset === -1) {
                    translateY = 'var(--translate-top)';
                    scale = 0.85;
                    opacity = 0.65;
                    zIndex = 5;
                } else if (offset === 1) {
                    translateY = 'var(--translate-bottom)';
                    scale = 0.85;
                    opacity = 0.65;
                    zIndex = 5;
                }

                return (
                    <div
                        key={idx}
                        className={`vertical-slider-item ${offset === 0 ? 'active' : ''}`}
                        style={{
                            transform: `translateY(${translateY}) scale(${scale})`,
                            opacity: opacity,
                            zIndex: zIndex,
                            visibility: isVisible ? 'visible' : 'hidden'
                        }}
                        onClick={() => {
                            if (isVisible) setActiveIndex(idx);
                        }}
                    >
                        <img src={src} alt={`Factory Focus Slide ${idx + 1}`} />
                    </div>
                );
            })}
        </div>
    );
};

export default VerticalFocusSlider;
