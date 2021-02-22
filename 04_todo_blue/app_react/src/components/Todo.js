import React, {useState, useEffect} from 'react';
import './Todo.css'
import TodoIttem from './TodoIttem';

import { todosList } from './../data/todos';

const Todo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const getData = async () => {
    setData(todosList)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    console.log('handleClick', inputValue)
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
      
      <div className="todo-main">
        {/* FAVES  */}        
  
        <div className="todo-current">
          <header>
            <h2>CURRENT</h2>
          </header>
          <div className="todos">
            {data.map(item => {
              return (
                <TodoIttem key={item.id} item={item} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
