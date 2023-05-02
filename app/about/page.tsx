import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div className='m-5'> 
      <h2 className='m-2 text-3xl'>About Page: </h2>
      <Link href='/' className='text-blue-500 underline font-semibold'>Home</Link>
    </div>
  )
}

export default About
