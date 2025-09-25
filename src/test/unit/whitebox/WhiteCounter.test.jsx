import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useCounter } from './hook/useCounter';

describe('useCounter 훅 (화이트박스 테스트)', () => {
  test('초기 count 값은 0이어야 한다', () => {
    // 1. `renderHook`으로 훅을 실행하고 결과(반환값)를 받음
    const { result } = renderHook(() => useCounter());

    // 2. 훅의 내부 상태 값인 'count'를 직접 확인
    expect(result.current.count).toBe(0);
  });

  test('increment 함수를 호출하면 count가 1 증가해야 한다', () => {
    const { result } = renderHook(() => useCounter());

    // 1. 'act'로 상태 업데이트를 감싸서 실행
    // 'increment'라는 내부 함수를 직접 호출
    act(() => {
      result.current.increment();
    });

    // 2. 내부 상태 'count'가 1로 변경되었는지 직접 확인
    expect(result.current.count).toBe(1);
  });
});