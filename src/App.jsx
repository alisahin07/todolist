// App.jsx

import { useEffect, useState } from "react"
import "./style.css"
 
 
export default function App(){
const [newItem,setNewItem]=useState("") 
const [todos,setTodos]=useState([])
 

function handlesubmit(e){
  
  e.preventDefault(); 
  setTodos(currentTodos=>[...currentTodos,
    {id:crypto.randomUUID(),
     title:newItem,
     completed:false 
    
    }]
    
    )
    setNewItem("");
   console.log("girdi")
}


 
function addTodo(title)
{
    setTodos(currentTodos=>[...currentTodos,{id:crypto.randomUUID(),title,completed:false}])

}

function toggleTodo(id,completed){
  setTodos(currentTodos => currentTodos.map( todo => {
    if(todo.id === id) 
      return {...todo,completed};
    return todo;
  }))
}

function deleteTodo(id){
  setTodos( currentTodos => currentTodos.filter(todo => todo.id !== id))
}

return (
  <>
    <form onSubmit={handlesubmit} className="new-item-form">
      <div className="form-row" >
        <label htmlFor="a">
          <input type="text"   id="a" value={newItem} onChange={e=>setNewItem(e.target.value)} />
        </label>
      </div>
       <button className="btn">ADD</button>
    </form>
    <h1>To Do LIST</h1>
    <ul className="list">
        {todos.map(
          todo=>{
            return(  
          <li key={todo.id}>
             <label > asdasd <input type="checkbox"  checked={todo.completed} onChange={e=> toggleTodo(todo.id,e.target.value)} /> </label>
             <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">DELETE</button>
          </li>
          )
          }    )}
    </ul>

  </>
)
}
