
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
      } ></input>   
      <button  type="button" className="btn" onClick={
          ()=> {setTodo([...toDo,text])}
      } > Add Task </button>

      
      </div> 
       <div className='col-12 col-lg-6 content' >

     
       </div>
    </div>
  );
}

export default App;
