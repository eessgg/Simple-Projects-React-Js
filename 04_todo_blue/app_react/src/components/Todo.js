import React, { useState } from 'react';
import { FaCheckSquare, FaEdit, FaWindowClose, FaBookmark } from 'react-icons/fa';

const Todo = ({ id, name, completed, subject, removeTask, editTask, toggleTask }) => {
  const [newName, setNewName] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', newName)
    editTask(id, newName)
    setNewName("")
    setIsEditable(false)
  }

  const handleChange = (e) => {
    console.log('handleSubmit')
    setNewName(e.target.value)
  }

  const editTemplate = (
    <div className="edit-template">
      <header>
        <p><FaBookmark /> {subject} </p>
        <span className="btn btn-close" onClick={() => removeTask(id)}>
          <FaWindowClose />
        </span>
      </header>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder={name} value={newName ? newName : name} onChange={handleChange} />
        <button type="button" className="btn" onClick={() => setIsEditable(false)}>
          Cancel
        </button>
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  )

  const mainTemplate = (
    <div className="main-template">
      <header>
        <p><FaBookmark /> {subject} </p>
        <span className="btn btn-close" onClick={() => removeTask(id)}>
          <FaWindowClose />
        </span>
      </header>
      <div className="content">
        <p style={{ textDecoration: completed ? "line-through" : "" }}
          className={completed ? 'task-completed' : ''}
        >{name}</p>
        <button className="btn" onClick={() => toggleTask(id)} > 
          {completed ? 'Finished' : "Finish"}
        </button>
        <button className="btn" onClick={() => setIsEditable(true)}>Edit <FaEdit /></button>
      </div>
    </div>
  )

  return (
    <li className="task">
      {isEditable ? editTemplate : mainTemplate}
    </li>
  );
}

export default Todo;
