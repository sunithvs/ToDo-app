
//  import Add from './Add';
import './App.css';
 
import {useState} from 'react'
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
function App() {

//  const [addState,setAddState]=useState(false)

  const [toDo,setTodo]=useState([])
  

  return (
    <div className='main col-12 text-white '>
     
        <h1 className='heading'>ToDo app</h1>
        <InputField toDo={toDo} setTodo={setTodo} />
        <ToDoList  toDo={toDo} setTodo={setTodo} ></ToDoList>
    
     
    </div>
  );
  }

export default App;
