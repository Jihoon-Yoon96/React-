// src/modules/counter.js

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
function counter(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return { ...state, number: state.number + 1 };
    case "counter/decrement":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;