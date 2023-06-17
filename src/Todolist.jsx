import React from 'react'
import { TodoItem } from './TodoItem'

export function Todolist  ({todos, toggleTodo,deleteTodo})  {
  return (
    <ul className="list">
    {todos.map(todo => ( 
      <TodoItem  {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
     
    ))}
  </ul>
  )
}

 