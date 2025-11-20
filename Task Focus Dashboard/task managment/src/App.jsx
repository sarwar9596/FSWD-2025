import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './inputBox'
import TaskList from './taskList'
import FocusList from './focusList'
import FocusItem from './focusItem'
import Finished from './Finished'

function App() {
const [tasks, setTasks]= useState([])
const [focusList, setFocusList] = useState([])
const [finishedList, setFinishedList ] = useState([])

  function addNewList(newTask)
  {
    setTasks(prev=>[...prev,newTask])
  }
  function deleteTask(id){
    setTasks(tasks.filter((task)=> task.id !== id))
    setFocusList(focusList.filter(focusItem=> focusItem.id !== id))
    setFinishedList(finishedList.filter(item=> item.id !== id))
  }
  function updateFocusList(task){
    if (focusList.includes(task)) return;
    setFocusList((prev)=> [...prev, task])
  }
  function updateFinishedList(item){
    if(finishedList.includes(item)) return;
    setFinishedList((prev)=> [...prev, item])
    setFocusList(focusList.filter(focusItem=> focusItem.id !== item.id))
  }
  
   return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div><InputBox addNewTask={addNewList} /></div>
    <div className='flex items-start gap-6  relative top-12'>
    <TaskList tasks={tasks} deleteTask={deleteTask} addItemFocus={updateFocusList} />
    <FocusList  focusList={focusList} addItemsFinished={updateFinishedList}/>
    <Finished finishedList={finishedList}/>
    </div>
    </div>
    </>
  )
}
export default App
