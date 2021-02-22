import React from 'react';
import { FaPenSquare, FaHeart } from "react-icons/fa";

const TodoIttem = ({item}) => {
  return (
    <div className="todo-item">
      <p>{item.title}</p>
      <span>08/12/20</span>
      <div className="icons">
        <FaPenSquare  />
        <FaHeart />
      </div>
    </div>
  );
}

export default TodoIttem;
