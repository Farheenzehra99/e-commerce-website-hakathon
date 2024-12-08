import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";

function Services() {
  return (
    <>
    {/* Section Header */}
    <div className="flex flex-col text-center w-full ">
            <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
            What Shopex Offer!
            </h1>
          </div>

    <div className='w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center'>
      <div className='sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4 '>

        {/* Box1 */}
        <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 '>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8 '>
            <CiDeliveryTruck className='text-3xl text-slate-400  ' />
          </div>
          <div className='font-bold text-center '>
            <h1 className='mb-3'>24/7 Support</h1>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

        {/* Box2 */}
        <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 '>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8 '>
            <CiDeliveryTruck className='text-3xl text-slate-400  ' />
          </div>
          <div className='font-bold text-center '>
            <h1 className= 'mb-3'>24/7 Support</h1>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

 
        {/* Box3 */}
        <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 '>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8 '>
            <BsHeadset className='text-3xl text-slate-400  ' />
          </div>
          <div className='font-bold text-center '>
            <h1 className='mb-3'>24/7 Support</h1>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

        {/* Box4 */}
        <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 '>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8 '>
            <FaCheckToSlot className='text-3xl text-slate-400  ' />
          </div>
          <div className='font-bold text-center '>
            <h1 className='mb-3'>24/7 Support</h1>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services;