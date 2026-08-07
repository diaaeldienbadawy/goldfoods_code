import React, { useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/icons/phone-icon.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useNav } from '../../hocks/layout/useNav';
import { useLanguage } from '../../context/LanguageContext';

const NavBar = () => {
  const { nav, location , setActiveLink , activeLink, isOpen, setIsOpen} = useNav()
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className='navbar-container'>
      <div className='container'>
        <nav className="navbar w-100">
            <div className='my-auto d-flex justify-content-between logo-container px-3"'>
              <img src={logo} alt="Logo" className="logo my-auto" onClick={() => nav('/')}/>
              <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
              </button>
            </div>
            <div className='nav-menu'>
              <ul className={`nav-links f-menu ${isOpen ? 'open' : ''}`}>
                <li className={activeLink === '/' ? 'primary-color' : ''} onClick={() =>{ nav('/')}}>{t('home')}</li>
                <li className={activeLink === '/factory' ? 'primary-color' : ''} onClick={() => nav('/factory')}>{t('factory')}</li>
                <li className={activeLink.startsWith('/product') ? 'primary-color' : ''} onClick={() => nav('/product')}>{t('product')}</li>
                <li className={activeLink === '/about-us' ? 'primary-color' : ''} onClick={() => nav('/about-us') }>{t('aboutUs')}</li>
                <li className={activeLink === '/contact-us' ? 'primary-color' : ''} onClick={() => nav('/contact-us') }>{t('contact')}</li>
                <li className={activeLink === '/privacy-policy' ? 'primary-color' : ''} onClick={() => nav('/privacy-policy') }>{t('privacyPolicy')}</li>
                <li 
                  className="primary-color" 
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  style={{ 
                    fontWeight: '700', 
                    cursor: 'pointer',
                    padding: '0 5px'
                  }}
                >
                  {language === 'en' ? 'العربية' : 'EN'}
                </li>
              </ul>
            </div>
            <div 
              className="d-flex hidden-md phone-container"
              style={language === 'en' ? { borderLeft: '3px solid var(--gray-border)' } : { borderRight: '3px solid var(--gray-border)' }}
            > 
              <div className={`phone d-flex ${language === 'en' ? 'ps-md-5' : 'pe-md-5'} f-phone-number`}>
                <div className="phone-icon bg-primary"><img src={phone} alt="My Icon" /></div>
                <div className="phone-number f-phone-number ps-md-3 c-pointer" onClick={()=>window.open(`tel:${t('phoneNum')}`)}>
                  <span dir="ltr">{t('phoneNum')}</span>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
