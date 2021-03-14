import React from 'react';
// import TodoIttem from './TodoIttem';
import { FaPenSquare, FaHeart, FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoList = ({todos, setTodos}) => {

  const removeItem = (id) => {
    setTodos(todos => todos.filter((task, idx) => idx !== id))
  }

  return (
    <>
      <ToastContainer />
      <ul>   
        {todos.map((item, index) => {
          return (
            <li className="todo-item" key={index}>
              <p>{item}</p>
              <span>08/12/20</span>
              <div className="icons">
                <FaPenSquare  />
                <FaHeart />
                <span onClick={() => removeItem(index)}>
                  <FaWindowClose />
                </span>
              </div>
            </li>
            )
        })}
      </ul>
    </>
  );
}

export default TodoList;
