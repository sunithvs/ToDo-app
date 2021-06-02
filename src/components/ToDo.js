import React,{useState} from 'react'

function ToDo({obj,toDo,setTodo}) {

const [state,setState]= useState(false)
    return (
        <div className={`toDo${state?'-completed':''}`}>
            <h3>
              <input  className='check-box'
                      type='checkbox' 
                      onChange={(e)=> {obj.status = e.target.checked;setState(obj.status)}}
                 
           ></input>{obj.status ? <s> {obj.content}</s> :obj.content}<i onClick={()=>
                    setTodo(toDo.filter((el)=>el.id !==obj.id ))

           } className="icon-right fas fa-times-circle"> </i>
           </h3>
        </div>
    )
}

export default ToDo
