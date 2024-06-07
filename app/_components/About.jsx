import Image from 'next/image'
import React from 'react'
import about from '../../images/About-Us.jpg';
const About = () => {
  return (
    <section className='about mt-16' id='about'>
       <div className="about-content container text-gray-200 flex justify-center gap-10 items-center">
       <div>
         <h3 className='text-primary text-xl font-bold'>About Us</h3>
        <h2 className='my-3 text-3xl font-bold'>Your Allies in Digital Evolution</h2>
        <h2 className='text-5xl font-bold leading-[1.2]'>Your Partners in Digital Transformation</h2>
        <p className='my-3 text-[18px] leading-[1.4]'>
            Welcome to Admixy! With over 10 years of experience in digital marketing, we are dedicated to helping our clients achieve their business goals through innovative and effective marketing strategies. Our team of seasoned professionals brings a wealth of knowledge in various aspects of digital marketing, ensuring that we deliver customized solutions that drive growth and success for your business.
        </p>
       </div>
       <Image className='about-img' src={about} width={400} height={400}/>
       </div>
    </section>
  )
}

export default About
