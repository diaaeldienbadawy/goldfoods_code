import React from 'react'
import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/icons/Facebook.svg'
import twitterIcon from '../../assets/images/icons/Twitter.svg'
import instagramIcon from '../../assets/images/icons/Instagram.svg'
import linkedinIcon from '../../assets/images/icons/Linkedin.svg'
import webIcon from '../../assets/images/icons/arcticons_emoji-web.svg'
import locationIcon from '../../assets/images/icons/mdi_location.svg'
import phoneIcon from '../../assets/images/icons/small-phone-icon.svg'
import { useNav } from '../../hocks/layout/useNav'
import FooterMenu from './Footer/FooterMenu'
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { nav } = useNav()
  const { t } = useLanguage()

  return (
    <div className='footer-container bg-highlight py-2'>
      <div className='container'>
        <div className='footer'> 
          <div className='row justify-content-start py-3'> 
            <div className='col-xl-3 col-lg-4 col-md-12 col-sm-12 px-3 py-2'>
              <img src={logo} alt="Logo" className="logo my-auto" onClick={() => nav('/')}/>
            </div>
          </div>
          <div className='row justify-content-between pb-5'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5'>
              <div className='f-body-text px-3'>
                {t('footerDesc')}
              </div>
              <div className='d-flex justify-content-start m-2 pt-2'>
                <img src={facebookIcon} className='m-2' alt="My Icon" />
                <img src={twitterIcon} className='m-2' alt="My Icon" />
                <img src={instagramIcon} className='m-2' alt="My Icon" />
                <img src={linkedinIcon} className='m-2' alt="My Icon" />
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5'>
              <FooterMenu
                title={t('contactUs')}
                items={[
                  {icon: webIcon , title: 'Ceo@goldfoods.net', link: 'mailto:Ceo@goldfoods.net' , email: true},
                  {icon: phoneIcon , title: t('phoneNum'), link: `tel:${t('phoneNum')}` , phone: true},
                  {
                    icon: locationIcon ,
                    title: t('officeDetails'), 
                    link: ''},
                ]}
              />
            </div>
            <div className='col-xl-1 col-lg-4 col-md-12 col-sm-12 pb-5'>
              <FooterMenu
                title={t('products')}
                items={[
                  {title: 'Mackerel', link: '/product/fish'},
                  {title: 'Herring', link: '/product/fish'},
                  {title: 'Sardines', link: '/product/fish'},
                  {title: 'Hake', link: '/product/fish'},
                ]}
              />
            </div>
            <div className='col-xl-1 col-lg-4 col-md-12 col-sm-12'> 
                <FooterMenu
                  title={t('resources')}
                  items={[
                    {title: t('home'), link: '/'},
                    {title: t('factory'), link: '/factory'},
                    {title: t('product'), link: '/product'},
                    {title: t('aboutUs'), link: '/about-us'},
                    {title: t('contact'), link: '/contact-us'},
                  ]}
                />
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='branch-text p-0'>
              {t('rightsReserved')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
