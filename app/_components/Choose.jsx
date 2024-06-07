import React from 'react'

const Choose = () => {
  return (
    <section className='choose mt-20 pb-20' id='choose'>
      <div className="container">

        <div className='text-center mb-16'>
            <h2 className='text-xl text-gray-200 font-bold'>Why Choose Us ?</h2>
            <h3 className='choose-title text-primary  my-4 font-bold text-3xl'>WE ARE HARDWORKERS!</h3>
            <p className='text-gray-200 w-[80%] mx-auto text-[18px] '>
                we have a great experience at generating leads, especially forex leads, one of the hardest fields in marketing, also we have experience at social media management, social media ads, google ads, and native ads, we have one of the most creative and harmonious teams, this team includes provisional copywriter, graphic designer, and content creators, so we can do any project you need.
            </p>
        </div>
       
       <div className="progress-div flex flex-col gap-7 w-[80%] mx-auto">
        <div className='progress flex items-center justify-between gap-20   '>
        <h2 className='text-xl text-gray-200 font-bold'>Native Ads</h2>
          <div class="progress-div  bg-gray-600 rounded-full dark:bg-gray-700 w-[70%] ">
         <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full w-[95%]" > 95%</div>
        </div>
       </div>
       <div className='progress flex items-center justify-between gap-20   '>
        <h2 className='text-xl text-gray-200 font-bold'>Social Media Ads</h2>
          <div class="progress-div  bg-gray-600 rounded-full dark:bg-gray-700 w-[70%] ">
         <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full w-[90%]" > 90%</div>
        </div>
       </div>
       <div className='progress flex items-center justify-between gap-20   '>
        <h2 className='text-xl text-gray-200 font-bold'>Push Notification Ads</h2>
          <div class="progress-div  bg-gray-600 rounded-full dark:bg-gray-700 w-[70%] ">
         <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full w-[92%]" > 92%</div>
        </div>
       </div>
       <div className='progress flex items-center justify-between gap-20   '>
        <h2 className='text-xl text-gray-200 font-bold'>POP UP Ads</h2>
          <div class="progress-div bg-gray-600 rounded-full dark:bg-gray-700 w-[70%] ">
         <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full w-[97%]" > 97%</div>
        </div>
       </div>
       </div>
       
  

      </div>
    </section>
  )
}

export default Choose
