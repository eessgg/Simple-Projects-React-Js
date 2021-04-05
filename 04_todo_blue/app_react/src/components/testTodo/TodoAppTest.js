import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './TodoApp.css'
import uuid from 'react-uuid'

const TodoAppTest = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState('');
  const [editedValue, setEditedValue] = useState('');


  const addValue = (e) => {
    e.preventDefault()
    if (inputText === '') {
      console.log('Preencha o campo')
      setTimeout(() => {
        setErrorMsg('Preencha o campo')
        setTimeout(() => {
          setErrorMsg('')
        }, 2000)
      }, 100)
      setErrorMsg('')
      return;
    }
    setTodos([...todos, { id: uuid(), text: inputText, complete: false }])
    e.target.reset()
    setInputText('')
  }

  const toggleButton = (todo, index) => {
    if (todos[index].id === todo.id) {
      console.log(todos[index].complete)
      setIsCompleted(todos[index].complete = !isCompleted)
    }
  }

  const removeTodo = (id) => {
    console.log('removeTodo')
    setTodos(tasks => tasks.filter((task, index) => index !== id))
  }

  const editTodos = (todo, index) => {
    if (todos[index].id === todo.id) {
      console.log('mesmo id', todo)
      setInputText(todo.text)
    }
  }

  const openModal = (todo, index) => {
    console.log('showModal')
    setShowModal(true)
    editTodos(todo, index)
  }

  const closeModal = () => {
    console.log('closeModal')
    setShowModal(false)
    setEditedValue('')
  }

  const showError = () => {
    return (
      <p className={errorMsg ? 'is-error display-block' : 'is-error display-none'}>{errorMsg}</p>
    )
  }


  return (
    <div>
      <h2>TodoAppTest</h2>
      <form onSubmit={addValue}>
        <input type="text"  onChange={(e) => setInputText(e.target.value)} />
        <button>ADD</button>
      </form>

      <ul className="tasks">
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              <p className={todo.complete ? 'finished' : ''}>{todo.text ? todo.text : editedValue}</p>
              <button onClick={() => toggleButton(todo, index)}>
                {todo.complete ? 'Completed' : 'Done?'}
              </button>
              <button onClick={() => openModal(todo, index)}>Editar</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </li>

          )
        })}
      </ul>
      <Modal
        todos={todos}
        editTodos={editTodos}
        editedValue={editedValue}
        setEditedValue={setEditedValue}
        showModal={showModal}
        closeModal={closeModal}
      />
      {showError()}
    </div>
  );
}

export default TodoAppTest;
