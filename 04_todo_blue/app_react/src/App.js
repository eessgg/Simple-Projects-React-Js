import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';



const App = () => (
  <div className="container">
    <header>
      <h1>Todo App</h1>
    </header>
    <TodoContainer />
  </div>
);

export default App;
