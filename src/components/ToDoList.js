import React from 'react'
import ToDo from './ToDo';

function ToDoList({toDo,setTodo}) {



    return (
            
      <div className='container text-white'>
      {
        toDo.map((obj)=> obj.content ? 
        <ToDo key={obj.id} obj={obj} toDo={toDo} setTodo={setTodo}/>  : null)
      }
     
    </div>
    
    )
}

export default ToDoList
