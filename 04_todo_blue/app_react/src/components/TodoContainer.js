import React, { useState } from 'react';
import './TodoContainer.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import FilterContainer from './FilterContainer';

const OPTION_DATA = [
  { id: "opt-0", opt: "Web Project", color: 'green' },
  { id: "opt-1", opt: "Reading", color: 'orange' },
  { id: "opt-2", opt: "Study", color: 'cyan' }
];

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [optionName, setOptionName] = useState('')
  const [filter, setFilter] = useState('All');

  const addTasks = (name) => {
    if(!name) {
      console.log('is exmpty')
      return;
    }
    const newTask = { 
      id: 'task-' + uuidv4(), name: name, subject: optionName, completed: false 
    };
    setTasks([...tasks, newTask])  
  }

  const removeTask = (id) => {
    const remainTasks = tasks.filter(task => id !== task.id);
    setTasks(remainTasks)
    console.log('removeTask', remainTasks)
  }

  const editTask = (id, newName) => {
    console.log(id, newName)
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    })
    setTasks(editedTaskList);
  }

  const toggleTask = (id) => {
    const updatedTaks = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    console.log(id)
    setTasks(updatedTaks)
  }

    //filters
    const FILTER_MAP = {
      All: () => true,
      Active: task => !task.completed,
      Completed: task => task.completed
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    const filterList = FILTER_NAMES.map((filter) => (
      <FilterContainer key={filter} name={filter} setFilter={setFilter} />
    ))
  

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => {
    return (
      <Todo
        id={task.id}
        key={task.id}
        name={task.name}
        subject={task.subject}
        completed={task.completed}
        removeTask={removeTask}
        editTask={editTask}
        toggleTask={toggleTask}
      />
    )
  })

  return (
    <div className="task-app">

      <h1>Qual sua tarefa pra hoje?</h1>
      <TodoForm addTasks={addTasks} options={OPTION_DATA} setOptionName={setOptionName} />

      <div className="tasks-container">
        <h3>My Tasks</h3>
        <div className="button-group">
          {filterList}
        </div>

        <ul className="task-group">
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default TodoContainer;
