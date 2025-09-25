import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText(''); // 입력창 초기화
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;