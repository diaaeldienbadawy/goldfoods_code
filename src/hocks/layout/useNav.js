import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const useNav = () => {
    const nav = useNavigate()
    const location = useLocation()

    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);

    const scrollTop = () => {
        if(activeLink.startsWith('/product')){
            if(activeLink === '/product') document.getElementById('app').scrollTo({top: 0, behavior: 'smooth'})
            else document.getElementById('app').scrollTo({top: document.getElementById('categorys-bar')?.offsetTop, behavior: 'smooth'})
        } 
        else document.getElementById('app').scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(()=>{
        setActiveLink(location.pathname)
        setIsOpen(false)
        scrollTop()
    },[location.pathname])

    return {
        activeLink,
        nav,
        setActiveLink,
        location,
        isOpen,
        setIsOpen,
        scrollTop
    }
}