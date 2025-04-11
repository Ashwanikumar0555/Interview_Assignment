import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "../counter/Counter"
import TodoList from '../todo_list/Todo'
import Todo from "../2-todo-list/Todo"
import Toggle from "../3-toggle/Toggle"


function App() {
 

  return (
    
    <div>
      {/* <Counter /> */}
      {/* <TodoList/> */}
      {/* <Todo/> */}

      <Toggle/>

    </div>
  )
}

export default App
