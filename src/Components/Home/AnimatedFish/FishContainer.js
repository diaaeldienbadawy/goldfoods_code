import React, { useState } from 'react'
import AnimatedCubs from './AnimatedCubs';


const FishContainer = ({fish}) => {
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div className='animated-fish-wrapping bg-secondary'>
            <div className='animated-fish'>
                <img src={fish.fish} className='w-100 h-100' alt="My Icon" />
            </div>
            <div className='animated-fish-text fw-bold'>
                {fish.title}
            </div>
            {
                width > 768 && <AnimatedCubs/>
            }

        </div>
    )
}

export default FishContainer
