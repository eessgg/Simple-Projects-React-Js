import React, { useState } from 'react';
import './Todo.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { todosList } from './../data/todos';
import TodoList from './TodoList';

const Todo = () => {
  // const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [inputTerm, setInputTerm] = useState('');

  const handleClick = (e) => {
    e.preventDefault()
    if (inputValue === '') {
      toast.error('Preencha o campo.');
      return;
    }
    setTodos(todos => [...todos, inputTerm])
  }

  return (
    <div className="todo-wrapper">
      <div className="todo-header">
        <form>
          <div>
            <input type="text" placeholder="Enter your tasks here..." onChange={(e) => setInputValue(e.target.value)} />
          </div>
          <button className="btn" type="submit" onClick={handleClick}>ADD TASK</button>
        </form>
      </div>
      <ToastContainer />

      <div className="todo-main">
        {/* FAVES  */}
        <div className="todo-current">
          <header>
            <h2>CURRENT TASK</h2>
          </header>
          <div className="todos">
            <TodoList
              todos={todos}
              setTodos={setTodos}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;