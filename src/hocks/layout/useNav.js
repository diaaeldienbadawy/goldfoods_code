import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const useNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);

    const scrollTop = (path = location.pathname, smooth = false) => {
        const scrollConfig = { top: 0, behavior: smooth ? 'smooth' : 'auto' };
        
        // Scroll global viewport
        window.scrollTo(scrollConfig);
        
        // Scroll app container
        const appEl = document.getElementById('app');
        if (appEl) {
            if (path.startsWith('/product') && path !== '/product') {
                const catBar = document.getElementById('categorys-bar');
                appEl.scrollTo({ 
                    top: catBar ? catBar.offsetTop : 0, 
                    behavior: smooth ? 'smooth' : 'auto' 
                });
            } else {
                appEl.scrollTo(scrollConfig);
            }
        }
    };

    const nav = (path) => {
        if (location.pathname === path) {
            scrollTop(path, true);
        } else {
            navigate(path);
        }
    };

    useEffect(() => {
        setActiveLink(location.pathname);
        setIsOpen(false);
        scrollTop(location.pathname, false);
        
        // Track PageView in TikTok Pixel on routing changes
        if (window.ttq) {
            window.ttq.page();
        }
    }, [location.pathname]);

    return {
        activeLink,
        nav,
        setActiveLink,
        location,
        isOpen,
        setIsOpen,
        scrollTop
    };
}