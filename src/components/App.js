import React, { Component } from 'react';
import '../App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-header">Todo List </h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
