import React from 'react'

const ContactBox = () => {
  return (
    <div className='bg-highlight py-5 '>
      <div className='container mb-5'> 
        <h1 className='fw-bold text-center branch-text py-5'>Contact Us</h1>
        <div className='overflow-hidden rounded-4 shadow p-md-5 bg-white m-auto' style={{ maxWidth: '800px' }}>
            <div className='py-5'>
                <form action="https://formsubmit.co/Ceo@goldfoods.net" method='POST' className='m-0'>
                <input type="hidden" name="_next" value={'https://goldfoods.net'}/>
                <input type="text" name="_honey" style={{ display: 'none' }}/>

                <div className='row m-0'>
                    <div className='col-lg-6'>
                        <div className='py-2'>
                            <textarea  type="text" name='name' className='form-control' style={{ height:'50px', paddingTop:'3px' , fontSize:'14px' ,resize: 'none' , borderRadius: '3px' }} placeholder='Your name'/>
                        </div>                    
                    </div>
                    <div className='col-lg-6'>
                        <div className='py-2'>
                            <textarea  type="email" name='email' className='form-control' style={{ height:'50px', paddingTop:'3px' , fontSize:'14px' ,resize: 'none' , borderRadius: '3px' }} placeholder='Email'/>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='py-2'>
                            <textarea  type="text" name='messege' className='form-control' style={{ height:'50px', paddingTop:'3px' , fontSize:'14px' ,resize: 'none' , borderRadius: '3px' }} placeholder='Send messege'/>                        
                        </div>    
                    </div>
                </div>
                <div className='row py-2 m-0'>
                    <div className='col-auto p-2'>
                        <button className='solid-primary-button' type='submit' style={{ fontSize: '16px' , lineHeight:'auto' , padding: '5px 35px' , fontWeight:'normal' }}>Send messege</button>
                    </div>
                    <div className='col-auto p-2'>
                        <button className='outlined-primary-button' style={{ fontSize: '16px' , lineHeight:'auto' , padding: '5px 35px' , fontWeight:'normal'}}>Reset</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBox
