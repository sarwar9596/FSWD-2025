export default function TaskList({ tasks, deleteTask, addItemFocus }) {
    
    return (
    <div className={` ${tasks.length>0 ? "p-1.5 border-2 w-83 rounded-2xl  flex-col" : ""}`} >
     {tasks.length>0 && <h2 className="text-red-500 font-bold">Task List</h2>}
      <ul className="w-full">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-gray-200 text-black p-2 rounded-lg w-full mb-1 flex justify-between "
          >
            {task.text}
            <div className="btns flex gap-3">
                <button onClick={()=>addItemFocus(task)}
                className="border-b-black rounded-2xl  bg-emerald-700 font-semibold text-white p-1.5 hover:scale-110 hover:shadow-gray-700">Focus</button>

                <button onClick={()=>deleteTask(task.id)}
                 className="border-b-black rounded-2xl bg-red-950 font-semibold text-white p-1.5 hover:scale-110 hover:shadow-gray-700">Deleted</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    );
  }
  