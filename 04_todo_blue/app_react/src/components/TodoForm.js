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
            {options.map((item, index) => (
              <option value={item.opt} key={index}> {item.opt} </option>
            ))}
          </select>
        </label>
        <div className="btn-form">
          <button className="btn">SAVE</button>
        </div>
    </form>
  );
}

export default TodoForm;
