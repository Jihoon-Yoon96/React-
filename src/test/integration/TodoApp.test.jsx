import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import TodoApp from './TodoApp';

describe('TodoApp (통합 테스트)', () => {
  it('사용자가 새 할 일을 입력하고 추가하면 목록에 표시되어야 한다.', async () => {
    // userEvent는 비동기로 동작하므로 async/await를 설정합니다.
    const user = userEvent.setup();
    
    // 1. [Arrange] 테스트할 최상위 컴포넌트인 TodoApp을 렌더링합니다.
    render(<TodoApp />);

    // 2. [Act] 사용자가 할 일을 입력하고 '추가' 버튼을 클릭하는 행동을 시뮬레이션합니다.
    
    // placeholder 텍스트로 입력창을 찾습니다.
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    
    // 버튼을 찾습니다.
    const addButton = screen.getByRole('button', { name: '추가' });

    // 입력창에 '새로운 할 일'이라고 타이핑합니다.
    await user.type(input, '새로운 할 일');
    
    // 추가 버튼을 클릭합니다.
    await user.click(addButton);

    // 3. [Assert] 행동의 결과를 검증합니다.
    
    // 화면에 '새로운 할 일'이라는 텍스트가 나타났는지 확인합니다.
    const newTodoItem = screen.getByText('새로운 할 일');
    expect(newTodoItem).toBeInTheDocument();

    // 입력창이 비워졌는지도 확인합니다.
    expect(input).toHaveValue('');
  });
});