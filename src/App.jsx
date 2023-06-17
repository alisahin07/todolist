// App.jsx

import { useEffect, useState } from "react"
import "./style.css"
import NewTodoForm from "./NewTodoForm";
import { Todolist } from "./Todolist";
 
export default function App(){
 
const [todos,setTodos]=useState(()=>{
  const localValue=localStorage.getItem("ITEMS")
  if (localValue== null) return []
  return JSON.parse(localValue)
});




useEffect (() =>{localStorage.setItem("ITEMS",JSON.stringify(todos))},[todos] )
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
  asdasd
  <NewTodoForm onSubmit1={addTodo} />
  <h1>Todo List</h1>
  <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
)
}
