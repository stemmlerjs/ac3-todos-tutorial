import React from 'react';
import Todos from './Todos';
import OtherTodoList from './OtherTodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App in the Jamstack using Apollo Client v3!</p>
      </header>
      <Todos />
      <OtherTodoList />
    </div>
  );
}

export default App;
