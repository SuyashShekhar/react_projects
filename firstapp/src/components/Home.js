import React, { useEffect, useState } from 'react'
import Task from './Task'
import "./Home.css"
function Home() {
 
    
 const initialArray = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
// If we have added any task then if we relaod the page then also it shows earlier entered task
// If we delete all task then empty array is passed

 const [task, setTask] = useState(initialArray); 
 const [title, setTitle] = useState(""); 
 const [description, setdescription] = useState("");

 

 const deleteTask = (index) => {
     const filterArray = task.filter((val,i)=>{
          return i !== index;  // it returns array of those element whose index donot match with passed index
     })
     setTask(filterArray);
 }

 useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
 },[task]);
 

 const submitHandle = (e) => {
       e.preventDefault();  // stops loading the page

       setTask([...task, {
        title:title,
        description : description,
       }]);

       setTitle("");
       setdescription("");
       
 }

  return (
    <>
    <div className="container">
        <h1>Daily Goals</h1>
        <form className='form' onSubmit={submitHandle}>
             <input type="text"  placeholder='Title' value={title} onChange = {(e) => {
                    setTitle(e.target.value);
             }}/>
             <textarea placeholder='Description' value={description} onChange = {(e) => {
                setdescription(e.target.value);
             }}></textarea>
             <button type='submit' className='btn'>ADD</button>
        </form>

        {task.map((item, index)=>{
            return <Task key={index} title = {item.title}  description = {item.description} deleteTask = {deleteTask} index = {index} />
        })}
    </div>
      
    </>
  )
}

export default Home