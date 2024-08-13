import React, { useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineModeEditOutline } from "react-icons/md"
import { IoCalendarOutline } from "react-icons/io5";
import { SlBell } from "react-icons/sl";


export default function Header() {
  const[open,setOpen]=useState(false)
  return ( 
< div className='h-24 bg-blue-500 w-full flex items-center justify-between px-6  relative'>

    {/* start */}
    <div className="   group cursor-pointer">
      <div className="w-[30px] rounded-[1px] h-[3px] bg-white mb-[3px] " />
      <div className="w-[20px] rounded-[1px] h-[3px] bg-white group-hover:w-[30px] transition-all duration-300  mb-[3px]" />
      <div className="w-[10px] rounded-[1px] h-[3px] bg-white group-hover:w-[30px] transition-all duration-200" />
    </div>
    
    {/* logo */}
    <div className="lg:hidden ">
        <div className=" text-white text-lg ">
        <span className="uppercase font-semibold ">med</span>
        jestic
        </div>
    </div>
    {/* centre */}
    <div className="lg:flex items-center justify-between gap-10 hidden">
    <div className="flex gap-10 items-center">
        <div className=" flex items-center gap-2 cursor-pointer">
        <LuCalendarDays className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Make an appointment </span>
        </div>
        <div className=" flex items-center gap-2 cursor-pointer">
        <MdOutlineModeEditOutline  className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Write a prescription </span>
        </div>
        <div className=" flex items-center gap-2 cursor-pointer">
        <IoCalendarOutline className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Generate Report </span>
        </div>
    </div>
    
    <div className="flex items-center gap-7">
        <div className="relative cursor-pointer">
        <SlBell  className='text-white text-[20px] '/>
        <div className='w-2 h-2 rounded-full bg-red-600 border border-white absolute -top-1 right-0' />
        </div>
        <div className="relative w-10 h-10 rounded-full ">
         <img src={"https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=''  className='object-cover w-10 h-10 rounded-full'/>
        </div>
    </div>
    </div>
    
    <div className="lg:hidden">
    <div onClick={()=>setOpen(!open)} className="   cursor-pointer">
      <div className="w-[20px] rounded-[1px] h-[3px] bg-white mb-[3px] " />
      <div className="w-[20px] rounded-[1px] h-[3px] bg-white   mb-[3px]" />
      <div className="w-[20px] rounded-[1px] h-[3px] bg-white " />
    </div>
    
    {
        <div className="">
            <div className={`${open?"top-24  absolute left-0 opacity-100  bg-blue-500":"  absolute left-0 opacity-0 -top-20"} z-50 flex justify-end gap-9 items-center h-16 transition-all duration-500  px-6 w-full`} >
                
        <div className="  items-center gap-2 cursor-pointer flex max-md:hidden">
        <LuCalendarDays className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Make an appointment </span>
        </div>
        <div className=" flex items-center gap-2 cursor-pointer max-md:hidden">
        <MdOutlineModeEditOutline  className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Write a prescription </span>
        </div>
        <div className=" flex items-center gap-2 cursor-pointer max-md:hidden">
        <IoCalendarOutline className='text-white text-[30px] ' />
        <span className="text-white font-light self-end">Generate Report </span>
        </div>
     
        <div className="flex items-center gap-4 ">
        <div className="relative cursor-pointer">
        <SlBell  className='text-white text-[20px] '/>
        <div className='w-2 h-2 rounded-full bg-red-600 border border-white absolute -top-1 right-0' />
        </div>
        <div className="relative w-10 h-10 rounded-full ">
         <img src={"https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=''  className='object-cover w-10 h-10 rounded-full'/>
        </div>
    </div>
    </div>
        </div>
    }
    
    </div>
    
    
    {/* end */}
    
    
    
        </div>
  )


  
}
