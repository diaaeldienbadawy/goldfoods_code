import React, { useEffect, useState } from 'react'
import Slider1 from '../../assets/images/Slider/slider1.png'
import Slider2 from '../../assets/images/Slider/slider2.png'
import Slider3 from '../../assets/images/Slider/slider3.png'
import Slider4 from '../../assets/images/Slider/slider4.png'
import Slider5 from '../../assets/images/Slider/slider5.png'
import Slider6 from '../../assets/images/Slider/slider6.png'
import Slider7 from '../../assets/images/Slider/slider7.png'

const Slider = () => {
    const images = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7];
    
    const [prev , setPrev] = useState({index: null , image: null, fadeOut: false});
    const [current , setCurrent] = useState({index: 0 , image: images[0], isAuto:true})

    useEffect(() => {
        let timeout = null
        if(current.isAuto) {
            timeout =setTimeout(() => {
                if(current.isAuto == false) return;
                setPrev((prev) => ({ ...prev, index: current.index, image: current.image , fadeOut: false }));
                setCurrent((prev) => ({ ...prev, index: (prev.index + 1) % images.length, image: images[(prev.index + 1) % images.length], isAuto: true }));
            },3000);
        }
        else{  setCurrent((prev) => ({ ...prev, isAuto: true }))}
        return () =>{if(timeout) clearTimeout(timeout)}
    }, [current]);

    useEffect(()=>{
        let timeout = null;
        if(prev.image !== null && prev.fadeOut == false){
            timeout = setTimeout(() => {
                setPrev((prev) => ({ ...prev, fadeOut: true }));
            },50)
        }
        return () =>{if(timeout) clearTimeout(timeout)}
    },[prev.image])

    useEffect(()=>{
        let timeout = null;
        if(prev.fadeOut == true){
            timeout = setTimeout(() => {
                setPrev((prev) => ({ ...prev, image: null , fadeOut: false }));
            },1000)
        }

        return () =>{if(timeout) clearTimeout(timeout)}
    },[prev.fadeOut])

    const handleClick = (index) => {
        setPrev((prev) => ({ ...prev, index: current.index, image: current.image , fadeOut: false }));
        setCurrent((prev) => ({ ...prev, index: index, image: images[index], isAuto: false }));      
    }

    return (
        <div className='slider-container'>
            <div className='slide'>
                <img src={current.image} alt="My Icon" />
            </div>
            {prev.image != null && (
                <div className={`slide ${prev.fadeOut ? 'hide' : ''}`}>
                    <img src={prev.image} alt="My Icon" />
                </div>
            )}


            <div className='dots-container'>
                {
                    images.map((image, i) => (
                        <div className={`dot ${i === current.index ? 'active' : ''}`} key={i} onClick={() =>handleClick(i)}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider


// const Slider = () => {
//     const images = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7];
    
//     const [index, setIndex] = useState(0);
//     const [currentImage, setCurrentImage] = useState(images[index]);
//     const [nextImage, setNextImage] = useState(images[index + 1]);
//     const [hidding, setHidding] = useState(false);

//     useEffect(() => {
//         if(hidding){
//             setTimeout(() => {
//                 setIndex((prevIndex) => (prevIndex + 1) % images.length);
//             },2500)
//         }
//     },[hidding])
 
//     useEffect(() => {
//         setHidding(false);
//         setCurrentImage(images[index]);
//         const ind = (index + 1) % images.length;
//         setNextImage(images[ind]);
//         setTimeout(() => {
//             setHidding(true);
//         }, 2500);
//       }, [index]);

//     return (
//         <div className='slider-container'>
//             <div className='slide'>
//                 <img src={nextImage} alt="My Icon" />
//             </div>
//             <div className={`slide ${hidding ? 'hide' : ''}`}>
//                 <img src={currentImage} alt="My Icon" />
//             </div>
//             <div className='dots-container'>
//                 {
//                     images.map((image, i) => (
//                         <div className={`dot ${i === index ? 'active' : ''}`} key={i} onClick={() => setIndex(i)}></div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Slider