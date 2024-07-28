import { useState } from 'react'
import ToDo_task from './components/ToDo_task'

function App() {
  const [tasksList, setTasksList] = useState({1:'Первая заметка', 2:'Вторая'})
  const [inputText, setInputText] = useState("")


  function updateTask(key, textNew) {
    const tasks = {...tasksList}
    tasks[key] = textNew
    setTasksList(tasks)
  }

  function addTasks () {
    let tasks = {...tasksList}
    let key = new Date().getTime()
    tasks[key]=inputText
    setTasksList(tasks)
    setInputText("")
  }

  function deleteTask(key) {
    let tasks = {...tasksList}
    delete tasks[key]
    setTimeout(function() {
        setTasksList(tasks)
    }, 300)
  }
   
  return (
    <>
    <div className="app-todo">
        <h2 className="app-todo__heading">To Do App</h2>

        <div className="input-field app-todo__input-field">
            <input className="input-field__input" value={inputText} onChange={(event)=>{setInputText(event.target.value)} }  type="text" name="" id="" />
            <button className="input-field__button" onClick={() =>{addTasks()}}>+</button>
        </div>

        {Object.keys(tasksList).map(key => <ToDo_task 
                                              text={tasksList[key]} 
                                              deleteTask={deleteTask} 
                                              updateTask={updateTask} 
                                              key={key}
                                              taskId={key}>
                                            </ToDo_task>)}
       
    </div>
    </>
  )
}

export default App
