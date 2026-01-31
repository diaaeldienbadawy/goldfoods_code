import React, { useEffect, useRef, useState } from 'react'

const AnimatedCub = ({positions}) => {
  const [animation, setAnimation] = useState(0)
  const [swit,setSwit] = useState(true)
  const switRef = useRef(swit)

    const initialStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '30px 20px',
        position : 'absolute',
        zIndex: 0,
        transform: 'translateY(-50%)',
        backgroundColor:'#BEE3FF',
        transition: 'all 1s ease-in-out',
    }

  const [style,setStyle] = useState(initialStyle)

  useEffect(() => {
    const interval = setInterval(() => {
        if(switRef.current) setAnimation( prev => (prev + 1) % positions.length) 
        setSwit(!switRef.current)
    },2000)

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(()=>{
    setStyle({...initialStyle, left:`${positions[animation].x}%` , top:`${positions[animation].y}%`} )
  },[animation])

  return (
    <div  className='' style={style} >
      
    </div>
  )
}

export default AnimatedCub
