import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import BlackCounter from './BlackCounter.jsx';

describe('Counter 컴포넌트', () => {
  it('초기 렌더링 시 제목과 초기값이 올바르게 표시된다.', () => {
    // 1. Counter 컴포넌트를 렌더링
    render(<BlackCounter />);

    // 2. 화면에 "카운터"라는 텍스트를 가진 요소가 있는지 확인
    // const titleElement = screen.getByText('카운터');
    const titleElement = screen.getByRole('heading', { name: '카운터' });
    expect(titleElement).toBeInTheDocument();

    // 3. 화면에 "현재 값: 0" 이라는 텍스트가 있는지 확인
    const countElement = screen.getByText(/현재 값: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  it('증가 버튼을 클릭하면 카운트가 1 증가한다.', () => {
    // 1. 컴포넌트를 렌더링
    render(<BlackCounter />);

    // 2. "증가" 텍스트를 가진 버튼 존재
    const incrementButton = screen.getByRole('button', { name: '증가' });

    // 3. 버튼을 클릭합니다.
    fireEvent.click(incrementButton);
    // fireEvent.click(incrementButton);

    // 4. 카운트가 1로 변경되었는지 확인합니다.
    const countElement = screen.getByText(/현재 값: 1/i);
    expect(countElement).toBeInTheDocument();
  });
});