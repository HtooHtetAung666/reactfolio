import React from 'react'

const About = ({title, description}) => {
  return (
    <div className='max-w-4xl mx-auto mt-16'>
        <p className='text-2xl md:text-4xl font-bold text-center'>{title}</p>
        <p className='text-sm lg:text-base text-center text-gray-500 leading-relaxed lg:leading-loose mt-4 px-0'>{description}</p>
    </div>
  )
}

export default About