import React, { useState } from "react";
import { TbBedFlat } from "react-icons/tb";
import { RiHotelBedFill } from "react-icons/ri";
import { FaWheelchair } from "react-icons/fa";
import { LuArrowRightSquare,LuArrowLeftSquare  } from "react-icons/lu";

const arrayImage = [
    {
        id:1,
        img:"https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
        job:"surgeon",
        name:"lily"
    },
{
    id:2,
    img:"https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
    job:"surgeon",
    name:"adam"
},
{
    id:3,
    img:"https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600",
    job:"doctor",
    name:"edward"
},
{
    id:4,
    img:"https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
    job:"doctor",
    name:"marvin"
},
{
    id:5,
    img:"https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
    job:"surgeon",
    name:"vera"
},
{
    id:6,
    img:"https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=600",
    job:"surgeon",
    name:"jomes"
},


]


const Analytics = () => {

  
    const [currentIndex, setCurrentIndex] = useState(0);
    
  
  

   
    const handleNext = () => {
      
        if (currentIndex < arrayImage.length / 2) {
          setCurrentIndex(currentIndex + 1);
        }else{
            setCurrentIndex(0)
        }
      };
    
      const handlePrevious = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }else{
            setCurrentIndex(arrayImage.length-2)
        }
      };
     
    
   
   
   
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="w-full shadow-md bg-white h-[65vh] ">

       <div className="h-[15vh] ">
       <h1 className="p-5 uppercase text-lg font-normal">
          HOSPITAL BIRTH & DEATH ANALYTICS
        </h1>
        <hr className="bg-grayDark/20 w-full h-[2px] " />
       </div>

<div className="h-[50vh] ">

        <div className="flex flex-col ">
    <div className="w-full flex justify-around mt-2" >
         <div className="flex flex-col gap-5">
            <TbBedFlat className="bg-primary-200  text-4xl text-white w-12 h-12 rounded-sm" />

            <span className="">Birth</span>
            <div className="">
              <p className="text-primary-200 font-semibold text-xl">45.07%</p>
              <p className="">201,434</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <RiHotelBedFill className="bg-primary-200  text-4xl text-white w-12 h-12 rounded-sm" />

            <span className="">Death</span>
            <div className="">
              <p className="text-red-500 font-semibold text-xl">45.07%</p>
              <p className="text-red-500 ">201,434</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FaWheelchair className="bg-primary-200  text-xl text-white w-12 h-12 rounded-sm p-2" />

            <span className="">Acident</span>
            <div className="">
              <p className="text-yellow-500 font-semibold text-xl">45.07%</p>
              <p className="text-yellow-500">201,434</p>
            </div>
          </div>

    </div>
          
         


        </div>
        <div className="w-[85%] mx-auto mt-6  flex">
            <div className="w-[45%] bg-primary-200 h-10 "></div>
            <div className="w-[30%]  bg-red-500 h-10 "></div>
            <div className="w-[25%] bg-yellow-500 h-10 "></div>
          </div>
</div>
      </div>





      <div className="flex flex-col shadow-md bg-white   overflow-hidden h-[65vh]">
<div className="flex flex-col   h-[15vh] ">
    <div className="flex h-full  justify-between items-center  px-6">

      <h1 className=" uppercase text-lg font-normal">
      HOSPITAL STAFF
        </h1>
        <div className="flex items-center gap-7">
        <LuArrowLeftSquare  onClick={handlePrevious} className=" text-grayDark/70 hover:text-primary-200 text-xl cursor-pointer" />
        <LuArrowRightSquare   onClick={handleNext}  className=" text-grayDark/70  hover:text-primary-200 text-xl cursor-pointer"/>
        </div>
    </div>
        <hr className="bg-grayDark/20 w-full h-[2px] " />
</div>
    
      
        <div className="top-0 relative w-[100%]  transition-transform duration-500 ease-in-out h-[50vh]">
      <div
        className="w-full absolute top-0 flex  transition-transform duration-500 ease-in-out  items-center pt-5 gap-3"
    

        style={{ transform: `translateX(-${currentIndex * 50}%)` }} 
      >
        {arrayImage.map((item, index) => (
          <div
            key={item.id}
            className="flex min-w-[50%] transition-transform duration-500 ease-in-out justify-center items-center flex-col gap-5"
          >
            <img src={item.img} alt="" className="w-28 object-cover h-28 rounded-full" />
            <p className="capitalize text-black font-semibold text-xl">{item.name}</p>
            <p className="capitalize text-grayDark font-semibold text-sm">{item.job}</p>
          </div>
        ))}
      </div>
      </div>
      </div>



    </div>
  );
};




export default Analytics;


