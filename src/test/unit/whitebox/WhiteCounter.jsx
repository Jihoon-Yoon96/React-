import React from 'react';
import { useCounter } from './hook/useCounter';

function WhiteCounter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <h1>단위테스트 - 화이트박스 테스트</h1>
      <h2>카운터</h2>
      <p>현재 값: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}

export default WhiteCounter;