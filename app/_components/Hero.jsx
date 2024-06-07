'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <header >
     
     <div className='text-center pt-16'>
 <Typewriter
  options={{
    strings: ['Welcome To Admixy Company' , 'performance in digital marketing'],
    autoStart: true,
    loop: true,

  }}
  className = 'Typewriter'
/>
  <h2  className='hero-text text-2xl leading-[1.5] text-gray-100 w-[70%] mx-auto mt-5'>
    We are an industry-leading digital marketing agency, with a long and enviable history when it comes to generating leads and pioneering new ways to market, we are passionate about any kind of digital marketing, we think it's great art, not just a work to earn money, so, we will be proud to work with you.

  </h2>
     </div>

    </header>
  )
}

export default Hero
