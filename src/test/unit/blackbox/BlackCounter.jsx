import React, { useState } from 'react';

function BlackCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>단위테스트 - 블랙박스 테스트</h1>
      <h2>카운터</h2>
      <p>현재 값: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default BlackCounter;