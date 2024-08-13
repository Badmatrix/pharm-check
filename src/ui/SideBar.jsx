import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


export default function SideBar() {

  const divRef = useRef()
  const[height,setHeight]=useState(0)
  const[open,setOpen]=useState(false)

 
  useEffect(()=>{
    setHeight(divRef.current.scrollHeight);
  },[open,height,divRef])

  return <div className=" col-span-1 ">
<div className="">
  <button onClick={()=>setOpen(!open)}>show more</button>
  <div ref={divRef} style={{height:open?`${height}px`:"0px"}} className="overflow-hidden transition-all duration-300">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, excepturi?
  </div>
  <div className="font-bold">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, explicabo.
  </div>
</div>

      

  </div>;
}

