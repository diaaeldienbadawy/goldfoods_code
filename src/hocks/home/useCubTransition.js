import { useEffect, useRef, useState } from "react";

export const useCubTransition = () => {
    const [cubes, setCubes] = useState({I:{x:0,y:0},II:{x:0,y:0},III:{x:0,y:0}});
    const [hold , setHold] = useState({I:{x:0,y:0},II:{x:0,y:0},III:{x:0,y:0}});
    const [containerBounds, setContainerBounds] = useState(null);
    const containerRef = useRef(null);
    const [start, setStart] = useState(false);
    const holdRef = useRef(hold);

    const randomNumber = (min,max)=>{
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        if(containerRef.current !== null && containerBounds === null) setContainerBounds(containerRef.current.getBoundingClientRect());
    },[containerRef])

    useEffect(() => {
        if(cubes.I.x == 0 && containerBounds){
            const center = {x:containerBounds?.width / 2,y: containerBounds?.height / 2};
            //setHold(prev=>({...prev,I:{x:randomNumber(200,center.x-230),y:randomNumber(200,center.y-230)},II:{x:randomNumber(center.x+230,containerBounds?.width-200),y:randomNumber(200,center.y-230)},III:{x:randomNumber(center.x+230,containerBounds?.width-200),y:randomNumber(center.y+230,containerBounds?.height-200)}}));
            setCubes(prev=>({...prev,I:{x:randomNumber(200,center.x-230),y:randomNumber(200,center.y-230)},II:{x:randomNumber(center.x+230,containerBounds?.width-200),y:randomNumber(200,center.y-230)},III:{x:randomNumber(center.x+230,containerBounds?.width-200),y:randomNumber(center.y+230,containerBounds?.height-200)}}));
        }
    },[containerBounds])



    const calculateDistance = (a,b) =>{
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    const checkNumberBetween = (num,min,max) => {
        return (num >= min) && (num <= max);
    }
    const calcRandomPoint = (old) => {
        const slop = (old.y - containerBounds?.height/2) / (old.x-containerBounds?.width / 2);
        let slopAngle = ( Math.atan(slop) * 180 ) / Math.PI;

        let ActualAngle = null;
        
        slopAngle += (Math.random() > 0.5 ? 5 : -5)

        if(old.x >= 0 && old.y >= 0) {
            if(slopAngle > 45) {
                ActualAngle = slopAngle + 90
            }else {
                ActualAngle = slopAngle - 90
            }
        }
        if(old.x < 0 && old.y >= 0) {
            slopAngle = 180 - slopAngle;
            if(slopAngle > 135) {
                ActualAngle = slopAngle - 90
            }else {
                ActualAngle = slopAngle + 90
            }
        }
        if(old.x < 0 && old.y < 0) {
            slopAngle = 180 + slopAngle;
            if(slopAngle > 225) {
                ActualAngle = slopAngle - 90
            }else {
                ActualAngle = slopAngle + 90
            }
        }
        if(old.x >= 0 && old.y < 0) {
            slopAngle = 360 - slopAngle;
            if(slopAngle > 315) {
                ActualAngle = slopAngle - 90
            }else {
                ActualAngle = slopAngle + 90
            }
        }

        // switch(newAngle){
        //     case 0 : ActualAngle = 90; break;
        //     case 180 : ActualAngle = -90; break;
        //     case 90 : ActualAngle = 0; break;
        //     case -90 : ActualAngle = 180; break;
        //     case 270 : ActualAngle = 360; break;
        //     case -270 : ActualAngle = -180; break;
        //     default :{
        //         ActualAngle = newAngle + (Math.random() > 0.5 ? 90 : -90)
        //         break;
        //     }
        // }

        ActualAngle = ActualAngle * Math.PI / 180

        const length = randomNumber(10,50  );
        let x = length * Math.cos(ActualAngle);
        x = old.x + (old.x > (containerBounds?.width/2) ? x : -x);
        let y = length * Math.sin(ActualAngle);
        y = old.y + (old.y > (containerBounds?.height/2) ? y : -y);

        x = randomNumber(230,400);
        if(old.x < (containerBounds?.width/4)) x = old.x + x;
        else if(old.x > (containerBounds?.width * 0.75)) x = old.x - x;
        else {
            if(old.x < (containerBounds?.width/2)) x = old.x + x;
            else x = old.x - x;
        }

        y = randomNumber(230,400);
        if(old.y < (containerBounds?.height/4)) y = old.y + y;
        else if(old.y > (containerBounds?.height * 0.75)) y = old.y - y;
        else {
            if(old.y < (containerBounds?.height/2)) y = old.y + y;
            else y = old.y - y;
        }

        return {x,y};
    }
    const chechRandomPoint = (p)=>{
        const center = {x:containerBounds?.width / 2,y: containerBounds?.height / 2};
        const distance = calculateDistance(p,center);
        console.log(distance);
        return (distance <= ((containerBounds?.width) / 2)) && (distance >= 200) || isNaN(distance);
    }

    const generatePoint = (old)=>{
        /*let swit = false;
        let p = null
        while(!swit){
            p = calcRandomPoint(old);
            swit = chechRandomPoint(p);
            console.log(swit)
        }*/
        let p = calcRandomPoint(old);
        return p;
    }
    const calcPoints = (olds) => {
        return {p1:generatePoint(olds.p1),p2:generatePoint(olds.p2),p3:generatePoint(olds.p3)};
    }

    const generatePoinst = () => {
        const points = calcPoints({p1:cubes.I,p2:cubes.II,p3:cubes.III});
        return points;
    }

    const update = ()=>{
            const points = generatePoinst();
            console.log(cubes);
            setHold(prev=>({...prev,I:points.p1,II:points.p2,III:points.p3}));
    }

    useEffect(() => {
        update();
    },[cubes])
    useEffect(()=>{
        holdRef.current = hold
        if(!start && hold.I.x != 0 && cubes.I.x != 0) setStart(true);
    },[hold])


    useEffect(() => {
        let interval =  null;
        if(start){
            interval = setInterval(() => {
                const { I, II, III } = holdRef.current;
                setCubes({...cubes,I:I,II:II,III:III});
            },2000)        
        }
        return () => clearInterval(interval);
    }, [start]);

    return {cubes,containerRef, start};
}