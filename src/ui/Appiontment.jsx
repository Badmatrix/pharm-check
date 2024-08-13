import React, { useEffect, useRef, useState } from 'react'
import img1 from "../assets/graph.jpeg"
import img2 from "../assets/graph2.jpeg"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoPersonAddSharp } from "react-icons/io5";


const Appiontment = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 '>

       <div className="w-full  flex flex-col gap-10">
       <div className="w-full relative bg-white rounded-xl  min-h-[35vh] p-4 flex flex-col gap-5 overflow-hidden">
        <h3 className="uppercase text-xl ">APPOINTMENTS</h3>
        <h1 className='font-semibold text-4xl'>3,973</h1>
        <img src={img1} alt=''  className='object-fill w-full   h-[10vh]   absolute bottom-0 left-0'/>
       </div>
       <div className="w-full relative bg-white rounded-xl  min-h-[35vh] p-4 flex flex-col gap-5 overflow-hidden">
        <h3 className="uppercase text-xl ">NEW PATIENTS</h3>
        <h1 className='font-semibold text-4xl'>593</h1>
        <img src={img2} alt=''  className='object-fill w-full   h-[10vh]   absolute bottom-0 left-0'/>
       </div>
       <div className="w-full relative bg-white rounded-xl  min-h-[35vh] p-4 flex flex-col gap-5 overflow-hidden">
        <h3 className="uppercase text-xl ">HOSPITAL EARNING</h3>
        <h1 className='font-semibold text-4xl'>3,973</h1>
        <img src={img1} alt=''  className='object-fill w-full   h-[10vh]   absolute bottom-0 left-0'/>
       </div>
       </div>


       <div className="w-full h-full  ">
       <Calendar onChange={setStartDate} value={startDate}  className={"h-full border-none"} />
       </div>


       <div className="min-w-full   bg-white shadow-md rounded-lg  ">
         <div className="w-full h-[30vh] relative ">
         <img src={"https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=''  className='object-cover w-full h-full'/>
         <div className="h-full w-full absolute bottom-0 left-0 top-0 bg-primary-200/25"></div>

         <div className="border-[3px] absolute bottom-[-40px] left-1/2 translate-x-[-50%] border-primary-200 rounded-full w-20 h-20 overflow-hidden ">
         <img src={"https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=''  className='object-cover  w-full h-full'/>
         </div>
         </div>

         <div className="mt-[50px] flex items-center justify-between flex-col gap-8 ">
        <h2 className="font-semibold capitalize tracking-wide text-xl"> Anny Farisha</h2>
<span className="text-lg ">Doctor</span>
<div className="flex items-center gap-4 flex-col ">
<p className="text-grayDark text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>

<button className='bg-primary-200 border-none outline-none  flex  justify-center items-center gap-2 p-2 rounded-md w-[40%] '>
<IoPersonAddSharp  className='text-white '/>
<span className="capitalize text-white">Assign</span>
</button>
</div>
         </div>

         <hr  className='bg-grayDark w-[70%] mx-auto mt-8 mb-5 '/>

         <div className="flex justify-around items-center">
         <div className="flex flex-col gap-2 items-center w-[45%] ">
                <h1 className="text-xl font-semibold">5790</h1>
                <p className="capitalize text-grayDark">Operations</p>
            </div>
            <div className="w-[1px] h-[100px]  bg-grayDark/15 "/>
            <div className="flex flex-col gap-2 items-center w-[45%] ">
                <h1 className="text-xl font-semibold">4.8</h1>
                <p className="capitalize text-grayDark">medical rating</p>
            </div>
         </div>

       </div>
    
    </div>
  )
}
// style={{ clipPath: 'polygon(51% 63%, 59% 79%, 67% 93%, 96% 59%, 100% 100%, 0 100%, 18% 76%, 28% 90%)' }}
export default Appiontment