import React, { useState } from 'react';
import { FaCheckSquare, FaEdit, FaWindowClose } from 'react-icons/fa';

const Todo = ({id, name, completed, subject, removeTask, editTask, toggleTask}) => {
  const [newName, setNewName] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = (e) => {
    console.log('handleSubmit')
    e.preventDefault();
    editTask(id, newName)
    setNewName("")
    setIsEditable(false)
  }
  
  const handleChange = (e) => {
    console.log('handleSubmit')
    setNewName(e.target.value)
  }

  const editTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newName} onChange={handleChange} />
      <button type="button" className="btn" onClick={() => setIsEditable(false)}>
          Cancel
        </button>
        <button type="submit" className="btn">
          Save
        </button>
    </form>
  )

  const mainTemplate = (
    <>
      <header>
        <p>{subject}</p>
        <span className="btn btn-close" onClick={() => removeTask(id)}>
          <FaWindowClose />
        </span>
      </header>
      <div className="content">
        <p style={{ textDecoration: completed ? "line-through" : "" }}
          className={completed ? 'task-completed' : ''}
        >{name}</p>
        <span className="btn" onClick={() => toggleTask(id)} ><FaCheckSquare /></span>
        <span className="btn" onClick={() => editTask(true)}><FaEdit /></span>
      </div>
    </>
  )

  return (
    <li className="task">
      {isEditable ? editTemplate : mainTemplate}
    </li>
  );
}

export default Todo;
