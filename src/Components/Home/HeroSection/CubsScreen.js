import React, { useEffect, useState } from 'react'
import RandomCube from '../../Shared/RandomCube';


const CubsScreen = () => {
    const [numberOfCubes , setNumberOfCubes] = useState(1)
    useEffect(() => {
        let count = 0;
        let screenWidth = window.innerWidth;
        const limit = Math.floor(screenWidth / 300)

        const interval = setInterval(() => {
          count++;
          setNumberOfCubes(count);
          if (count === limit+1) clearInterval(interval);
        }, 3000);
        return () => clearInterval(interval);
    },[])

    return (
        <>
            {numberOfCubes >= 1 && <RandomCube i={1}/>}
            {numberOfCubes >= 2 && <RandomCube i={2}/>}
            {numberOfCubes >= 3 && <RandomCube i={3}/>}
            {numberOfCubes >= 4 && <RandomCube i={4}/>}
        </>
    )
}

export default CubsScreen
