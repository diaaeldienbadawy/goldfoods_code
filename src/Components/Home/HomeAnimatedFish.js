import React, { useEffect, useState } from 'react'
import FishContainer from './AnimatedFish/FishContainer'
import fish1 from '../../assets/images/products/fishes/fish1.png'
import fish2 from '../../assets/images/products/fishes/fish2.png'
import fish3 from '../../assets/images/products/fishes/fish3.png'
import fish4 from '../../assets/images/products/fishes/fish4.png'
import fish5 from '../../assets/images/products/fishes/fish5.png'
import fish6 from '../../assets/images/products/fishes/fish6.png'
import AnimatedCubs from './AnimatedFish/AnimatedCubs'

const fishs = [
    {
        fish: fish1,
        title:"Frozen Macerel",
    },
    {
        fish: fish2,
        title:"Horse Mackerel",
    },
    {
        fish: fish3,
        title:"Silver smelt",
    },
    {
        fish: fish4,
        title:"Frozen herring",
    },
    {
        fish: fish5,
        title:"Frozen Salmon",
    },
    {
        fish: fish6,
        title:"Smoked herring",
    },
]
const HomeAnimatedFish = () => {
    const [current, setCurrent] = useState({fish: fishs[0], index: 0});
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const interval =     setInterval(() => {
        const ind = (current.index + 1) % fishs.length;
        setCurrent((prev) => ({ ...prev, index: ind, fish: fishs[ind] }));

    }, 4000);
    return () => {
        if (interval) {
        clearInterval(interval);
        };
    }
    }, [current]);


    return (
        <div className='container pb-5'>
            <div className={`w-100 h-auto d-flex ratio ${width <= 768 ? 'ratio-1x1' : 'ratio-16x9'} bg-highlight overflow-hidden position-relative`}>
                <div className='w-100 h-100 d-flex'>
                    {
                        current.index !== null  && (<FishContainer fish={current.fish}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeAnimatedFish
