import React from 'react';
import { FaPenSquare, FaHeart, FaWindowClose } from "react-icons/fa";

const TodoIttem = (item) => {
  return (
    <li className="todo-item" key={item}>
      <p>{item}</p>
      <span>08/12/20</span>
      <div className="icons">
        <FaPenSquare  />
        <FaHeart />
        <FaWindowClose />
      </div>
    </li>
  );
}

export default TodoIttem;
