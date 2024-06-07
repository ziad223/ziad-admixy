import React from 'react'
import {FaPhoneAlt, FaEnvelope  } from "react-icons/fa";
import {FaLocationCrosshairs} from 'react-icons/fa6';
const Footer = () => {
  return (

<footer className="bg-slate-950 text-gray-100 ">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="footer-content flex justify-around gap-2 ">
        <div className='footer-div w-[24%] text-center '>
         <h2 className='text-xl font-bold text-primary'>Admixy</h2>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-200 sm:max-w-xs sm:text-left">
          We are an industry-leading digital marketing agency, with a long and enviable history when it comes to generating leads and pioneering new ways to market
        </p>
          </div>
          <div className='footer-div w-[24%] text-center '>
         <h2 className='text-xl font-bold text-primary'>Quick Links</h2>
          <ul className='flex flex-col gap-3 mt-4'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
         <div className='footer-div w-[24%] text-center '>
         <h2 className='text-xl font-bold text-primary'>Our Services</h2>
          <ul className='flex flex-col gap-3 mt-4'>
            <li>SEO</li>
            <li>PPC</li>
            <li>SMM</li>
            <li>CRO</li>
            <li>Web Design</li>
          </ul>
        </div>
         <div className='footer-div w-[24%]  '>
         <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
            <div className="mt-4 flex flex-col  gap-5">
            <div className='flex gap-3 items-center contact-div'>
            <FaEnvelope/>
            <span>info@admixy.com</span>
         </div>
          <div className='flex gap-3 items-center contact-div'>
            <FaPhoneAlt/>
            <span>+971 50 832 3992</span>
         </div>
           <div className='flex gap-3 items-center justify-center contact-div'>
            <FaLocationCrosshairs className='text-3xl'/>
            <span >Boulevard Plaza, <span>Dubai Office Level 23 Boulevard</span> Plaza Tower 2 Dubai, UAE</span>
         </div>
            </div>
        </div>
       
      </div>


    </div>

   
</footer>
  )
}

export default Footer
