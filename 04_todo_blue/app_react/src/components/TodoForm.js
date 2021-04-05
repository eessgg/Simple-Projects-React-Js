import React, {useState} from 'react';

const TodoForm = ({addTasks, options, setOptionName}) => {
  const [inputName, setInputName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addTasks(inputName)
    setInputName('')
  }

  const handleChange = (e) => {
    setInputName(e.target.value)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="myTask"> My Task
          <input type="text" id="myTask" placeholder="Enter a task..." onChange={handleChange} />
        </label>
        
        <label htmlFor="mySubject"> My Tags
          <select onChange={(e) => setOptionName(e.target.value)}>
            {options.map(item => (
              <option value={item.opt} > {item.opt} </option>
            ))}
          </select>
        </label>
        <button className="btn">SAVE</button>
    </form>
  );
}

export default TodoForm;
