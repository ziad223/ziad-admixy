'use client'
import React from 'react'
import NumberCounter from 'number-counter';

const Counter = () => {
  return (
    <div className='flex justify-around p-10 bg-black'>
      <div className="counter-parent container flex justify-around ">
         <div className='text-center counter'>
    <NumberCounter start={0} end = {10} delay={2}  className="text-4xl font-bold text-gray-100 counter-num" />
    <h2 className='text-xl text-gray-200 mt-3 font-bold'>Years of Experience</h2>
      </div>
      <div className='text-center counter'>
    <NumberCounter start={1000} end = {1500} postFix="+" delay={5} className="text-4xl font-bold text-gray-100 counter-num" />
    <h2 className='text-xl text-gray-200 mt-3 font-bold'>Project Completed</h2>
      </div>
      <div className='text-center' counter>
    <NumberCounter start={1000} end = {1250} postFix="+"  delay={5} className="text-4xl font-bold text-gray-100 counter-num" />
    <h2 className='text-xl text-gray-200 mt-3 font-bold'>Happy Client</h2>
      </div>
      <div className='text-center counter'>
    <NumberCounter start={100} end = {350} delay={5} className="text-4xl font-bold text-gray-100 counter-num" />
    <h2 className='text-xl text-gray-200 mt-3 font-bold'>Win Awards</h2>
      </div>
      </div>
    </div>
  )
}

export default Counter
