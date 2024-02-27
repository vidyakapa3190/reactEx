import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
