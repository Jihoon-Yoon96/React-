// App.js (React)
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/config/store";
import { increment, decrement } from "../redux/modules/counter2";

function Counter() {
  const value = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count2: {value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}