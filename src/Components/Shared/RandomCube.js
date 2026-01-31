import React, { useEffect, useRef, useState } from 'react'

const RandomCube = ({i}) => {
  const [animation, setAnimation] = useState(i??Math.floor(Math.random() * 5))
  const animations = ['RandomCubeAnimation-I', 'RandomCubeAnimation-II', 'RandomCubeAnimation-III', 'RandomCubeAnimation-IV', 'RandomCubeAnimation-V']
  const boxRef = useRef(null)

  const initialStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '20px',
    position : 'absolute',
    zIndex: 0,
    transform: 'translateY(-50%)',
    animation: `${animations[animation]} 15s linear`
  }

  const [style,setStyle] = useState(initialStyle)

  useEffect(() => {
    let screenWidth = window.innerWidth;
    let time = screenWidth * 10
    const interval = setInterval(() => {
        setAnimation(Math.floor(Math.random() * 5) )
    },time)

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(()=>{
    setStyle({...initialStyle, animation: `${animations[animation]} 15s linear`})
  },[animation])

  return (
    <div ref={boxRef} className='bg-highlight' style={style} >
      
    </div>
  )
}

export default RandomCube
