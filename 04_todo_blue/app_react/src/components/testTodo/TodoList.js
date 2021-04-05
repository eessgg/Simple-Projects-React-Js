import React, { useState } from 'react';
// import TodoIttem from './TodoIttem';
import { FaPenSquare, FaHeart, FaWindowClose } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoList.css'

const TodoList = ({ todos, setTodos }) => {
  const [isToggled, setToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const removeItem = (id) => {
    setTodos(todos => todos.filter((task, idx) => idx !== id))
  }

  const handleToggle = () => {
    setToggled(!isToggled)
  }

  const handleEdit = () => {
    console.log('handleEdit')
    setIsDisabled(true)
  }

  const changeEdit = (e) => {
    console.log('changeEdit')
    // if(isDisabled) {
    //   setInputValue(e.target.value)
    // }
    setInputValue(e.target.value)
  }

  return (
    <>
      <ToastContainer />
      <ul> {
        todos.map((item, index) => {
          return (
            <li className="todo-item" key={index}>
              <input type="text"
                value={inputValue}
                disabled={isDisabled ? "" : "true"}
                onChange={changeEdit}
              />
              <span>08/12/20</span>
              <div className="icons">
                <span onClick={handleEdit}>
                  <FaPenSquare />
                </span>
                <span onClick={handleToggle}>
                  { isToggled ? ( <FaHeart color="red" />) : (<FaHeart />)}
                </span>
                <span onClick={() => removeItem(index)}>
                  <FaWindowClose />
                </span>
              </div>
            </li>
          )
        })
      } </ul>
    </>
  );
}

export default TodoList;
