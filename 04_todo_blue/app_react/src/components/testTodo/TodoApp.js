import React, { useEffect, useState } from 'react';
import './TodoApp.css'


const Modal = ({showModal, closeModal,editedTask, inputTask , setInputTask}) => {
  const [newValue, setNewValue] = useState("")

  const handleNewInputValue = (e) => {
    setInputTask(e.target.value )
    console.log(editedTask)
  }

  const saveNewInputValue = () => {
    setInputTask(newValue)
    closeModal()
  }

  return (
    <div className={showModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h1>MODAL</h1>
        <input type="text" onChange={handleNewInputValue} value={inputTask} />
        <button type="button" onClick={saveNewInputValue} > Save </button>
        <button type="button" className="close" onClick={() => closeModal()}> Close </button>
      </section>
    </div>
  )
}

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false)  
  
  const addTasks= (value) => {
    if(!inputTask){ return; }
    setTasks([...tasks, value])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTasks(inputTask)
    e.target.reset();
  }

  const removeTask = (id) => {
    console.log('removeTask')
    setTasks(tasks => tasks.filter((task, index) => index !== id))
  }

  const finishedTask = () => {
    console.log('finishedTask')
    setCompleted(!completed)
  }

  // edit
  const editTask = (id, task) => {
    setShowModal(true);
    setEditedTask(task)
    console.log('editTask', id, task, editedTask)
  }

  const openModal = () => {
    console.log('showModal')
    setShowModal(true)
  }

  const closeModal = () => {
    console.log('closeModal')
    setShowModal(false)
  }

  return (
    <div>
      <h2>TodoApp</h2>      
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInputTask(e.target.value)} />
        <button>ADD</button>
      </form>

      <ul className="tasks">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <p className={completed ? 'finished' : ''}>{task}</p>
              <button onClick={() => finishedTask()}>
                {completed ? 'Completed' : 'Done?'}
              </button>
              <button onClick={() => editTask(index, task)}>Editar</button>
              <button onClick={() => removeTask(index)}>x</button>
            </li>
          )
        })}
      </ul>

      <Modal editedTask={editedTask} showModal={showModal} closeModal={closeModal} inputTask={inputTask} setInputTask={setInputTask} />
    </div>
  );
}

export default TodoApp;
