import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  let nextId = 0;

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: nextId++, text: text },
    ]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;