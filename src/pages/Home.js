import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/config/configStore";

const App = () => {
  const counterStore = useSelector((state) => state);
  console.log(counterStore);
  const dispatch = useDispatch()

  const number = useSelector(state => state.counter.number); // 0
  console.log(number);
  

  return (
    <Provider store={store}>
      <div>
        <h1>Count : {counterStore.counter.number}</h1>
        <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
        <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
      </div>
    </Provider>
  );
}

export default App;
