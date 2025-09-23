import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/config/store";
import { increment, decrement } from "../redux/modules/counter2";

function Counter() {
  const value = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0)
  const eventHandler = (event) =>{
    const {value} = event.target
    setNumber(+value) // string을 number로
  }

  return (
    <div>
      <h1>Count2: {value}</h1>
      <input type="number" onChange={eventHandler}/>
      <button onClick={() => dispatch(increment(number))}>+</button>
      <button onClick={() => dispatch(decrement(number))}>-</button>
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