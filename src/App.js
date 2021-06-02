
//  import Add from './Add';
import './App.css';
 
import {useState} from 'react'
function App() {

//  const [addState,setAddState]=useState(false)
  const [text,setText] = useState('')
  const [toDo,setTodo]=useState([])
  

  return (
    <div className='main col-12 text-white '>
     
        <h1 className='heading'>ToDo app</h1>
        
      
      <div className='container text-white'>
          <button  type="button" className="btn left dropdown-toggle" ></button>
          
          <input className='text-box' type='text' onChange={
              (e)=> {setText(e.target.value)}
          } /> 
          <button  type="button" className="btn" onClick={
              ()=> { if(text){setTodo([...toDo,{id:Date.now(),content:text,status:false}]);console.log(toDo)}}
          } > Add Task </button>

      
      </div> 
          
      <div className='container text-white'>
          {
            toDo.map((obj)=> obj.content ? <div className="toDo"><h3><input className='check-box' type='checkbox' onChange={
              (e)=> obj.status = e.target.checked
            } ></input>{obj.content}<i className="icon-right fas fa-times-circle"></i></h3></div>:null)
          }
         
      </div>
    </div>
  );
}

export default App;
