import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');


    const addTodo = () => {
        if (input.trim() === '') return;
        setTodos([...todos, input.trim()]);
        setInput('');
    };

    const deleteTodo = (index) => {
        const   newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
<h1 className="text-3xl font-bold text-blue-700 mb-4">Todo List</h1>
      
<div className="flex gap-2 mb-4">
        <input
          type="text"
          className="px-4 py-2 border rounded-lg outline-none w-64"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;