import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    // setting toggleTodo function
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
    // using the todo mapped from TodoList.js and printing each todo name
    // setting checked to the complete element
    // call the handleTodoClick function when checkbox
    
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
            {todo.name}
        </label>
        
    </div>
  )
}
