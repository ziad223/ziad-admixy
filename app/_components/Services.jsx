import React from 'react'
import img1 from '../../images/seo.png';
import img2 from '../../images/ppc.png';
import img4 from '../../images/content-marketing.png';
import img5 from '../../images/cro.png';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='services mt-[100px] pb-10' id='services'>
      <div className=" text-center mb-[100px]">
      <h4 className='text-primary font-bold text-xl'>Our Services</h4>
      <h2 className='my-3 text-gray-200 text-4xl font-bold service-title'>Our Portfolio of Digital Solutions</h2>
      <p className='text-gray-200 text-xl w-[60%] mx-auto service-p'>
        We offer a comprehensive range of digital marketing services designed to help you achieve your business goals and drive growth."
      </p>
      </div>
      <div className="services-content container flex flex-wrap justify-center gap-4 mx-auto">
        <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img1} alt='seo-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Search Engine Optimization (SEO)</h2>
         <p className='text-gray-200 '>
            SEO (Search Engine Optimization) is the practice of optimizing your website to improve its visibility and ranking in search engine results, ultimately driving organic traffic and increasing online presence.
         </p>
        </div>
         <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img2} alt='ppc-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Pay-Per-Click (PPC) Advertising
</h2>
         <p className='text-gray-200 '>
           PPC (Pay-Per-Click) ads are online advertisements in which advertisers pay a fee each time their ad is clicked, providing a targeted and measurable way to drive traffic to websites and generate leads or sales.
         </p>
        </div>
          <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img1} alt='seo-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Social Media Marketing (SMM)</h2>
         <p className='text-gray-200 '>
            Social media management involves creating, scheduling, analyzing, and engaging with content posted on social media platforms to build and maintain an online presence, enhance brand awareness, and engage with the target audience effectively.
         </p>
        </div>
          <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img4} alt='seo-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Performance Marketing</h2>
         <p className='text-gray-200 '>
            Performance marketing is a digital marketing strategy focused on driving measurable results and achieving specific objectives, such as lead generation, conversions, or sales, through targeted and data-driven campaigns.
         </p>
        </div>
        <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img5} alt='seo-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Digital and Branding Management</h2>
         <p className='text-gray-200 '>
          Digital Identity and Branding Management involves crafting and maintaining a cohesive online presence across various digital platforms to effectively communicate brand values, enhance brand recognition, and engage with the target audience.
         </p>
        </div>
         <div className="service w-[32%] text-center border-[1px] border-primary p-5"  >
         <Image src={img1} alt='web-img' width={50} height={50} className='mx-auto'/>
         <h2 className='text-primary font-bold text-[18px] my-5'>Website Design and Development </h2>
         <p className='text-gray-200 '>
        Website Design and Development is the process of creating visually appealing and user-friendly websites that are optimized for performance and functionality, ensuring a seamless user experience and effective communication of brand message
         </p>
        </div>
      </div>
    </section>
  )
}

export default Services
