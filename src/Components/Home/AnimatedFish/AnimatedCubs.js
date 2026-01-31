import React, { use, useEffect, useRef } from 'react'
import { useCubTransition } from '../../../hocks/home/useCubTransition';
import AnimatedCub from './AnimatedCub';

const AnimatedCubs = () => {

    return (
        <>
            <AnimatedCub positions={[{x:-20,y:-10} , {x:-50 , y:-5} , {x:10 , y:-20}]}/>
            <AnimatedCub positions={[{x:113,y:125} , {x: 117, y:119} , {x:107 , y:115}]}/>
            <AnimatedCub positions={[{x:105,y:-29} , {x:128 , y:-10} , {x:115 , y:-5}]}/>
        </>
    )
}

export default AnimatedCubs
