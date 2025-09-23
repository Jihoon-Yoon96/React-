import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/config/configStore";
import { increment, decrement } from "../redux/modules/counter";

const App = () => {
  const counterStore = useSelector((state) => state);
  console.log(counterStore);
  const dispatch = useDispatch()

  const number = useSelector(state => state.counter.number); // 0
  console.log(number);

  const [val ,setVal] = useState(0);
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setVal(+value); // string을 number로
  };
  

  return (
    <Provider store={store}>
      <div>
        <h1>Count : {counterStore.counter.number}</h1>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={() => dispatch(increment(val))}>+</button> {/* <button onClick={() => dispatch({ type: "counter/increment" })}>+</button> */}
        <button onClick={() => dispatch(decrement(val))}>-</button> {/* <button onClick={() => dispatch({ type: "counter/decrement" })}>+</button> */} 
      </div>
    </Provider>
  );
}

export default App;
