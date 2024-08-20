import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";




export default function SidebarNavItem({ item, index, setOpen, open, activeIndex, setActiveIndex }) {
  const devRef = useRef(null);
  const [heights, setHeights] = useState(0);

  useEffect(() => {
    if (devRef.current) {
      setHeights(devRef.current.scrollHeight);
    }
  
  }, [open, index, setActiveIndex]);

  const handleToggle = () => {
    if (activeIndex === index) {
      setOpen(!open);

    } else {
      setOpen(true);
      setActiveIndex(index);
    
    }
  };


  return (
    <div key={index}>
      <button
        onClick={handleToggle}
        className="text-white w-full text-left py-1 px-3 flex justify-between items-center"
      >
        <span className="flex items-center">
          {item.icon} {/* Icon displayed here */}
          <span className="ml-2">{item.name}</span>
        </span>

        <span>
          {open && activeIndex === index ? <FaChevronUp />  : <FaChevronDown />}
        </span>
      </button>

      <div   ref={devRef}
      style={{ height: open && activeIndex === index ? `${heights}px` : '0px' }}
            className="pl-4 text-black bg-[#f2f2f2] transition-all duration-500 ease-in-out transform overflow-hidden"
      >
        {open && activeIndex === index && (
          <ul
            ref={devRef}
            style={{ height: open && activeIndex === index ? `${heights}px` : '0px' }}
            className="pl-4 text-black bg-[#f2f2f2] transition-all duration-500 ease-in-out transform overflow-hidden"
          >
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex} className="py-2 pl-8">
                <Link to={subItem.path} className="">
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
// export default function SidebarNavItem({ item,  index ,setOpen,open,activeIndex,setActiveIndex}) {
//   const devRef = useRef()
//   const[heights,setHeights]=useState(0)

//   useEffect(()=>{
//     if(devRef.current){
//       setHeights(devRef.current.scrollHeight)

//     }
//     if(open===false){
//       setActiveIndex(null)
//     }
//   },[heights,setOpen,open,index])


 
//   return (
//     <div key={index}>
//       <button
//       onClick={()=>{setOpen(!open),setActiveIndex(index)}}
//         className="text-white w-full text-left py-1 px-3 flex justify-between items-center"
       
//       >
//         <span className="flex items-center">
//           {item.icon} {/* Icon displayed here */}
//           <span className="ml-2">{item.name}</span>
//         </span>

//         <span>
//           {""? <FaChevronUp /> : <FaChevronDown />}
//         </span>
//       </button>
//       <div  className="">

//       {open && activeIndex===index && (
//         <ul ref={devRef} style={{height:open && activeIndex===index?`${heights}px`:'0px'  }} className={`  pl-4 text-black bg-[#f2f2f2] transition-all duration-500 ease-in-out transform`} >
//           {item.subItems.map((subItem, subIndex) => (
//             <li key={subIndex} className="py-2 pl-8">
//               <Link to={subItem.path} className="">
//                 {subItem.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//       </div>
//     </div>
//   );
// }


// console.log(open)
// console.log(activeIndex)

// console.log(index)

// console.log(activeIndex===index)
