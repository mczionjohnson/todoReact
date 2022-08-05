import React from 'react'
import Todo from './Todo'

  // using the prop created in App.js
  // import todos and toggleTodo
export default function TodoList({ todos, toggleTodo }) {
  
  return (
    // loop through the array of todos and map it to Todo.js one after another
    // setting unique element key to track changes
    // react will only re-render the updated todo from the array
    // pass toggleTodo function to each todo
    todos.map(todo => {
      return <Todo key = {todo.id} toggleTodo = {toggleTodo} todo={todo} />

    })

  )
}
