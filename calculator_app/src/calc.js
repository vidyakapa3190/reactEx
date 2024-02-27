import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState(0);

  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const sub = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const mul = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const div = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      <br />
      <h2>Result:{result}</h2>
    </div>
  );
}
export default Calc;
