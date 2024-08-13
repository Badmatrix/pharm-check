import React from 'react'
import { FaStethoscope } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa6";
import { BiSolidFirstAid } from "react-icons/bi";

const Doctor = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10'>


        <div className="h-[120px] relative  overflow-hidden w-full bg-gradient-to-r  from-primary-200/60 to-primary-200/10  rounded-lg">
           
           <div className="h-[120px] w-[140px] rounded-full bg-primary-200  absolute top-0 right-[-60px]  flex items-center ">
           <FaStethoscope className='text-white text-5xl  ml-[15%] ' />
           </div>

           <div className="text-white p-5 flex flex-col gap-4">
            <h1 className="uppercase font-medium text-lg">doctors</h1>
            <h1 className="uppercase font-medium text-lg">4567</h1>
           </div>
        </div>

        <div className="h-[120px] relative  overflow-hidden w-full bg-gradient-to-r  from-primary-200/60 to-primary-200/10  rounded-lg">
           
           <div className="h-[120px] w-[140px] rounded-full bg-primary-200  absolute top-0 right-[-60px]  flex items-center ">
           <MdPersonAddAlt className='text-white text-5xl  ml-[15%] ' />
           </div>

           <div className="text-white p-5 flex flex-col gap-4">
            <h1 className="uppercase font-medium text-lg">nurses</h1>
            <h1 className="uppercase font-medium text-lg">4567</h1>
           </div>
        </div>


        <div className="h-[120px] relative  overflow-hidden w-full bg-gradient-to-r  from-primary-200/60 to-primary-200/10  rounded-lg">
           
           <div className="h-[120px] w-[140px] rounded-full bg-primary-200  absolute top-0 right-[-60px]  flex items-center ">
           <FaWheelchair className='text-white text-5xl  ml-[15%] ' />
           </div>

           <div className="text-white p-5 flex flex-col gap-4">
            <h1 className="uppercase font-medium text-lg">patients</h1>
            <h1 className="uppercase font-medium text-lg">4567</h1>
           </div>
        </div>



        <div className="h-[120px] relative  overflow-hidden w-full bg-gradient-to-r  from-primary-200/60 to-primary-200/10  rounded-lg">
           
           <div className="h-[120px] w-[140px] rounded-full bg-primary-200  -z-0 absolute top-0 right-[-60px]  flex items-center ">
           <BiSolidFirstAid className='text-white text-5xl  ml-[15%] ' />
           </div>

           <div className="text-white p-5 flex flex-col gap-4 ">
            <h1 className="uppercase font-medium text-lg z-20">pharmacists</h1>
            <h1 className="uppercase font-medium text-lg">4567</h1>
           </div>
        </div>

    </div>
  )
}

export default Doctor