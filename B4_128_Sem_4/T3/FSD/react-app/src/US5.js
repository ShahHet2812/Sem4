import { useState } from "react";

export default function(){
    const [task,setTask]=useState("")
    const [todolist,setTodoList]=useState([])
    function handleChange(e){setTask(e.target.value)}
    function addTask(){
        setTodoList([...todolist,task])
        setTask(" ");
    }
    function deleteTask(taskname){
        setTodoList(todolist.filter((t)=>{
            if(t!=taskname){return true}
            else{return false}
        }))
    }
    return(
        <>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
            {todolist.map((t)=>{
                return(
                    <div>
                        <h3>{t}</h3>
                        <button onClick={()=>deleteTask(t)}>Delete Task</button>
                    </div>
                )
            })}
        </>
    )
}