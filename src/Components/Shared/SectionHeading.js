import React from 'react'

const SectionHeading = ({hint , title , description}) => {
  if(hint && title){
    return <TypeA hint={hint} title={title}/>
  }else if(title && description){
    return <TypeB title={title} description={description}/>
  }
}

export default SectionHeading


const TypeA = ({hint , title}) => {
  return (
    <>
        <h3 className='text-center'>
            {hint}
        </h3>
        <h2 className='text-center fw-bold '>
            {title}
        </h2>
    </>
  )
}

const TypeB = ({title , description}) => {
  return (
    <>
        <h2 className='text-center fw-bold pb-4' style={{ fontSize: '32px' , lineHeight: '40px'}}>
            {title}
        </h2>
        <p className='text-center f-body-text' dangerouslySetInnerHTML={{__html: description}}>

        </p>
    </>
  )
}