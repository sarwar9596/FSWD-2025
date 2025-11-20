import { use } from "react"
import { useEffect, useState } from "react"

export default function FocusItem ({item, addItemsFinished}) {
    const [clockTime, setClockTime] = useState(0)
    
    
    useEffect(()=>{
        const clockTicker = setInterval(() => {
            setClockTime(prev => prev + 1)
        },1000)
        
        setTimeout(() => {
            clearInterval(clockTicker);
            setClockTime("Take Break")
        }, 30000);
        
        return()=> clearInterval(clockTicker)
        },[])
        
        function stopClock(){
            setClockTime((prev=> prev + 0 ))
        }
    
    return (
        <>
        
        <li key={item.id} 
        className="bg-gray-200 text-black p-2 rounded-lg w-full mb-1 flex justify-between items-center">
            <div className="">{item.text}</div>
            <div className=" flex flex-row justify-between ">
                <div className="flex justify-between items-center font-semibold text-nowrap border-2 rounded-full bg-amber-200 text-black p-1">{clockTime}</div>
                <button className="bg-red-500  rounded-3xl  mx-1  hover:scale-105 font-semibold p-1.5  hover:shadow-xl hover:shadow-blue-100/30 
                transition-all duration-300" onClick={()=>stopClock()}>STOP</button>
                <button className="bg-green-500 mx-1  rounded-3xl p-1.5 text-white font-semibold" onClick={()=>addItemsFinished(item)}>Finished</button>
            </div>
        </li>
        </>)
} 