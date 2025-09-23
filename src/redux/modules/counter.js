// src/modules/counter.js

// 초기 상태값
const initialState = {
  number: 0,
};

 // 액션 생성자
const INCREMENT = "counter/increment"
const DECREMENT = "counter/decrement"
export const increment = (payload) => {
    return {type : INCREMENT, payload} // dispatch 훅에서 받을 type명과 파라미터로 받을 payload 지정
}
export const decrement = (payload) => {
    return {type : DECREMENT, payload} // dispatch 훅에서 받을 type명과 파라미터로 받을 payload 지정
}

// 리듀서
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: //"counter/increment":
      return { ...state, number: state.number + action.payload };
    case DECREMENT: //"counter/decrement":
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
}

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;