import { useState } from "react"

export default function ToDo_task({ text, deleteTask, updateTask, taskId }) {
    const [isModify, setModify] = useState(false)
    const [inputText, setInputText] = useState("")
    const [isDeleting, setDeleting] = useState(false)

    return (
        <>
        <div className={isDeleting ? "app-todo__task app-todo__task--invisible" : "app-todo__task"} >
            <input className="app-todo__checkbox" type="checkbox"  onChange={()=>{setDeleting(true); deleteTask(taskId)}} />

            {isModify
                ? <input className="app-todo__input" value={inputText} onChange={(event)=> {setInputText(event.target.value)}} />
                : <p className="app-todo__text">{ text }</p>
            }
            
            {isModify 
                ? <div className="app-todo__task-icon" onClick={()=>{updateTask(taskId, inputText); setModify(false)}}>
                    <img src="icons/icon-accept.png" alt="" />
                </div>

                : <div className="app-todo__task-icon" onClick={()=>{setInputText(text); setModify(true)}}>
                    <img src="icons/icon-pencil.png" alt="" />
                </div>
            }

            <div className="app-todo__task-icon">
                <img src="icons/icon-basket.png" alt="" onClick={()=>{setDeleting(true); deleteTask(taskId)}} />
            </div>
        </div>
        </>
    )
};