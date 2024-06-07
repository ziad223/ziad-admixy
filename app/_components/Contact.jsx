import React from 'react'

const Contact = () => {
  return (
    <section className='contact mt-[80px] pb-20' id='contact'>
      <div className="container">
           <div className='text-center'>
            <h2 className='text-4xl font-bold text-gray-200'>Contact <span className='text-primary'>Us</span></h2>
        </div>
      <form className='mt-16 w-[80%] mx-auto'>
        <div className='h flex justify-center gap-10'>
            <input type="text" placeholder='First Name' className='w-[100%] bg-transparent border-2 border-slate-600 text-gray-200 p-5 outline-0' />
            <input type="text" placeholder='Last Name' className='w-[100%] bg-transparent border-2 border-slate-600 text-gray-200 p-5 outline-0' />
        </div>
         <div className='h flex justify-center gap-10 mt-8'>
            <input type="text" placeholder='Phone Number' className='w-[100%] bg-transparent border-2 border-slate-600 text-gray-200 p-5 outline-0' />
            <input type="email" placeholder='Email Address' className='w-[100%] bg-transparent border-2 border-slate-600 text-gray-200 p-5 outline-0' />
        </div>
        <textarea placeholder='Enter Your Massage' className='mt-10 w-[100%] h-[200px] bg-transparent border-2 border-slate-600 text-gray-200 p-5 outline-0'></textarea>
      </form>
      </div>
    </section>
  )
}

export default Contact
