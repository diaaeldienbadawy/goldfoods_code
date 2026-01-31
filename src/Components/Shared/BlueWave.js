import React from 'react'
import backgroundWave from '../../assets/images/wave-vector.png'

const BlueWave = () => {


  return (
    <div className=' primary-color m-0' >
      <img src={backgroundWave} alt="My Icon" style={{width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  )
}

export default BlueWave
