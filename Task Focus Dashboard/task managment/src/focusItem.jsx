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
            setClockTime((prev=> prev ))
        }
    
    return (
        <li key={item.id} 
        className="bg-gray-200 text-black p-2 mb-1 rounded-lg w-full max-w-4xl flex justify-between items-center gap-6">
        
        <div className="flex-1 min-w-0 break-words">
            {item.text}
        </div>
        
        <div className="flex flex-col font-bold text-[10px] w-20 text-center">
            {item.currentDateTime}
        </div>
        
        <div className="flex items-center gap-3 w-auto flex-shrink-0">
            <div className="flex justify-between items-center font-semibold text-nowrap border-2 rounded-full bg-amber-200 text-black px-3 py-1">
                {clockTime}
            </div>
            <button className="bg-red-500 rounded-3xl hover:scale-105 font-semibold px-4 py-2 hover:shadow-xl hover:shadow-blue-100/30 
                    transition-all duration-300" onClick={()=>stopClock()}>
                STOP
            </button>
            <button className="bg-green-500 rounded-3xl hover:scale-105 px-4 py-2 text-white font-semibold" onClick={()=>addItemsFinished(item)}>
                Finished
            </button>
        </div>
    </li>
    )
}