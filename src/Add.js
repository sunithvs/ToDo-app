import React from 'react'
import './App.css'
function Add({state}) {
    if(state){

    return (
        <div >
            <h2>Add  new task:📋</h2>
            <input type="text" className="form-control form-control-lg"/>    
        </div>)
        
    }
    else return null
  
 
    }
    



export default Add;
