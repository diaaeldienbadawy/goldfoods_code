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
                <li className="lang-switcher-li" style={{ padding: '0 10px' }}>
                  <button 
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                    style={{
                      cursor: 'pointer',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      backgroundColor: 'rgba(212, 175, 55, 0.08)',
                      padding: '6px 15px',
                      borderRadius: '50px',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'var(--primary-color)';
                      e.target.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                      e.target.style.color = 'var(--primary-color)';
                    }}
                  >
                    {language === 'en' ? 'العربية' : 'EN'}
                  </button>
                </li>
              </ul>
            </div>
            <div className={`d-flex border-3 border-start gray-border hidden-md phone-container`}> 
              <div className="phone d-flex ps-md-5 f-phone-number">
                <div className="phone-icon bg-primary"><img src={phone} alt="My Icon" /></div>
                <div className="phone-number f-phone-number ps-md-3 c-pointer" onClick={()=>window.open('tel:+201000461725')}>{t('phoneNum')}</div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
