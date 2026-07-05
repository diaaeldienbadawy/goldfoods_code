import React from 'react'
import BlueWave from '../Shared/BlueWave'
import groubIcon from '../../assets/images/icons/Group.svg'
import starIcon from '../../assets/images/icons/Vector.svg'
import checkStarIcon from '../../assets/images/icons/material-symbols_star.svg'
import supportIcon from '../../assets/images/icons/pepicons-pop_checkmark-filled.svg'
import FeatureItem from './Features/FeatureItem'
import SectionHeading from '../Shared/SectionHeading'
import { useLanguage } from '../../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: groubIcon,
      title: t('fastDelivery'),
      description: t('fastDeliveryDesc')
    },
    {
      icon: starIcon,
      title: t('premiumQuality'),
      description: t('premiumQualityDesc')
    },
    {
      icon: checkStarIcon,
      title: t('qualityAssurance'),
      description: t('qualityAssuranceDesc')
    },
    {
      icon: supportIcon,
      title: t('expertSupport'),
      description: t('expertSupportDesc')
    }
  ]

  return (
    <>
      <BlueWave/>
      <div className='pb-4 px-0 m-0 bg-highlight pt-5 pt-md-0'>
        <div className='container'>
          <SectionHeading
            hint={t('ourFeatures')}
            title={t('featuresTitle')}
          />
          <div className='row d-flex justify-content-between py-5'>
            {
              features.map((feature , index) => (
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12' key={index}>
                  <FeatureItem icon={feature.icon} title={feature.title} description={feature.description} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
