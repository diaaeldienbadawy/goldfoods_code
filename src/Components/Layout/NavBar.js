import React, { useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/icons/phone-icon.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useNav } from '../../hocks/layout/useNav';

const NavBar = () => {
  const { nav, location , setActiveLink , activeLink, isOpen, setIsOpen} = useNav()

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
                <li className={activeLink === '/' ? 'primary-color' : ''} onClick={() =>{ nav('/')}}>Home</li>
                <li className={activeLink === '/factory' ? 'primary-color' : ''} onClick={() => nav('/factory')}>Factory</li>
                <li className={activeLink.startsWith('/product') ? 'primary-color' : ''} onClick={() => nav('/product')}>Product</li>
                <li className={activeLink === '/about-us' ? 'primary-color' : ''} onClick={() => nav('/about-us') }>About us</li>
                <li className={activeLink === '/contact-us' ? 'primary-color' : ''} onClick={() => nav('/contact-us') }>Contact</li>
              </ul>
            </div>
            <div className={`d-flex border-3 border-start gray-border hidden-md phone-container`}> 
              <div className="phone d-flex ps-md-5 f-phone-number">
                <div className="phone-icon bg-primary"><img src={phone} alt="My Icon" /></div>
                <div className="phone-number f-phone-number ps-md-3 c-pointer" onClick={()=>window.open('tel:+201000461725')}>+201000461725</div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
