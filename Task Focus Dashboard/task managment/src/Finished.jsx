export default function Finished({finishedList}){

return(
<>
<div className={` ${finishedList.length> 0 ? "p-1.5 border-2 rounded-2xl flex-col w-96" : ""}`}>
    {finishedList.length>0 && <h2 className="text-red-500 font-bold"> Finished Task</h2>}    
    {finishedList.map((finishItem)=>
    <li key={finishItem.id} className="bg-gray-200 text-black p-2 rounded-lg w-full mb-1 flex justify-between items-center" >
        {finishItem.text} <span>✔️</span></li>
)}
</div>
</>
)
}