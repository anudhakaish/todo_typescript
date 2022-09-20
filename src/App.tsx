import React,{ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import{ITask} from './Interfaces';


 const  App =()=> {
  const[task,setTask]=useState<string>("");
  const[todoList,setTodoList]=useState<ITask[]>([]);
  const itemChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setTask(event.target.value)
  }
  const addTask=():void=>{
    const newTask={taskName:task};
    setTodoList([...todoList,newTask]);
    console.log(todoList);
  }
  return (
    <div className="App">
      <h1> TODO APP</h1>
        <input type="text" placeholder='Add task' onChange={itemChange}></input>
        <button onClick={addTask}>ADD </button>
        <div className="todoList">
          {todoList.map(() =>{
            return <TodoTask/>;
          })}
        </div>
      </div>
    
  );
}

export default App;
