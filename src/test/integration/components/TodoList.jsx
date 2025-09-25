import React from 'react';

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>할 일이 없습니다.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;