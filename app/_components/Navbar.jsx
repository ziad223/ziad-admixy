'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../../images/logo.png';
import { LuMenu } from "react-icons/lu";
import Link from 'next/link';

const Navbar = () => {

    useEffect(function(){
     document.querySelector(".menu-btn").onclick = function(){
        document.querySelector(".nav-menu").classList.toggle("open")
     }
    })
  return (
    <div className='sticky top-0'>
        <nav className='bg-gray-800 flex justify-between py-3 px-6 md:px-16 items-center '>
      <Link href = '/'><Image src={logo} alt='logo-img' width={100} height={100}/></Link>
      <ul className='nav-menu md:flex gap-8'>
        <li><a href="#" className='text-gray-200 hover:text-primary duration-300 transition text-[18px]'>Home</a></li>
        <li><a href="#about" className='text-gray-200 hover:text-primary duration-300 transition text-[18px]'>About Us</a></li>
        <li><a href="#services" className='text-gray-200 hover:text-primary duration-300 transition text-[18px]'>Services</a></li>
        <li><a href="#choose" className='text-gray-200 hover:text-primary duration-300 transition text-[18px]'>Why Choose</a></li>
        <li><a href="#contact" className='text-gray-200 hover:text-primary duration-300 transition text-[18px]'>Contact</a></li>
      </ul>
       <button className='bg-primary py-2 px-4 rounded-md md:hidden menu-btn hover:bg-blue-600 transition duration-300'>
           <LuMenu className=' text-gray-200 text-2xl '/>
       </button>
    </nav>
    </div>
  )
}

export default Navbar
