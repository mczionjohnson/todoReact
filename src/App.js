import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

// creating a key for local storage
const LOCAL_STORAGE_KEY = 'todoApp'

export function App() {
  // object destructing
  const [ todos, setTodos ] = useState([]);
  const todoNameRef = useRef()

// to load the todos once
// we pass the empty array
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)

  }, [])

  // call this.function when the todos array changes
  // it saves when the todos changes
  // use key and stringify the data before saving
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // create a copy before modifying it
  // find the todo by id
  // set the todo.complete to the opposite
  // then save the copy array in the usestate
  function toggleTodo(id) {
    const newTodos = [...todos ]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)

  }


  function handleAddTodo(e) {
    // use the value in input
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handelClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    {/* pass todos and toggleTodo to be use in TodoList component*/}
   <TodoList todos= {todos} toggleTodo ={toggleTodo} /> 
   {/* creating a prop for the Todolist and setting a var */}
   {/* useRef allows us access to the input */}

  <input ref={todoNameRef} type="text" />
  <button onClick={handleAddTodo}>Add Todo</button>
  <button onClick={handelClearTodos}>Clear Complete</button>
  {/* use the filter to check the not completed in the array and get the length */}
  <div>{todos.filter(todo => !todo.complete).length} left to do</div>
  </>
      //   <>
    //   <h1> This is in a fragment</h1>
    // </>
  )
}

export default App;
