import React, { useEffect, useState } from 'react';
import './OceanBackground.css';

const OceanBackground = () => {
  const [bubbles, setBubbles] = useState([]);
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    // Generate random bubbles
    const generatedBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 6,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: Math.random() * 8 + 8,
    }));
    setBubbles(generatedBubbles);

    // Generate random fishes swimming horizontally
    const generatedFishes = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 25,
      top: Math.random() * 80 + 10,
      delay: Math.random() * 15,
      duration: Math.random() * 25 + 30, // slow, gentle swimming
      direction: Math.random() > 0.5 ? 'ltr' : 'rtl',
    }));
    setFishes(generatedFishes);
  }, []);

  return (
    <div className="ocean-bg-effects-container">
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div 
          key={bubble.id} 
          className="bg-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`
          }}
        />
      ))}

      {/* Fishes */}
      {fishes.map(fish => (
        <div
          key={fish.id}
          className={`bg-fish ${fish.direction}`}
          style={{
            top: `${fish.top}%`,
            width: `${fish.size}px`,
            height: `${fish.size * 0.45}px`,
            animationDelay: `${fish.delay}s`,
            animationDuration: `${fish.duration}s`
          }}
        >
          <svg viewBox="0 0 100 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,25 C30,10 70,10 90,25 C70,40 30,40 10,25 Z M90,25 L100,12 L100,38 Z M35,22 C37,22 39,23 39,25 C39,27 37,28 35,28 C33,28 31,27 31,25 C31,22 33,22 35,22 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default OceanBackground;
