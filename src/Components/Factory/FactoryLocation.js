import React from 'react'

const FactoryLocation = () => {
  return (
    <div className='py-5 mt-5 position-relative'>
      <div className='container position-relative'>
        <div>
          <p className='fw-bold'> Factory Address: Madinah Monawarah Industrial Zone Plot No. C/197 Belbeis – Al Sharqia Governorate</p>
        </div>
        <div className='row flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.8870311647943!2d31.500060584878263!3d30.325730981780897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzMyLjYiTiAzMcKwMjknNTIuMyJF!5e0!3m2!1sar!2seg!4v1754388829789!5m2!1sar!2seg" width="600" height={250+window.innerWidth/10} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        
          </iframe>
        </div>
      </div> 
    </div>
  )
}

export default FactoryLocation
