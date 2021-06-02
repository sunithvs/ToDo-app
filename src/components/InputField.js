import React,{useState} from 'react'

function InputField({toDo,setTodo}) {
    const [text,setText] = useState('')
    return (
       
      <div className='container text-white'>
            <button type="button" 
                    className="btn left dropdown-toggle" 
            ></button>
            <input   value={text} 
                     className='text-box'
                     type='text' 
                     onChange={ (e)=> {setText(e.target.value)}   }
                           
             /> 

            <button type="button" 
                    className="btn" 
                    onClick={
                        ()=> { if(text){setTodo([...toDo,{id:Date.now(),content:text,status:false}]);
                                setText('');
                            }
                          }
            } > Add Task </button>
      </div> 
        
    )
}

export default InputField
