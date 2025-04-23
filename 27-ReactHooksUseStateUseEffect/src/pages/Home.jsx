import React, { useState } from "react";
import style from "./Home.module.css";

const Home = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("you cannot continue (count is zero!!)");
    }
  }

  const [inputCount, setInputCount] = useState("");

  function InputChange(event) {
    setInputCount(event.target.value);
  }

  function plusInputCount() {
    const value = Number(inputCount);
    if (!isNaN(value)) {
      setCount(count + value);
    }
    setInputCount("");
  }

  function minusInputCount() {
    const value = parseFloat(inputCount);
    if (value > count) {
      alert("you cannot decrease now, count value less than your input value!!!");
    } else {
      if (!isNaN(value)) {
        setCount(count - value);
      }
      setInputCount("");
    }
  }

  return (
    <div className={style.container}>
      <div className={style.counterBox}>
        <div>my count: {count}</div>
        <div className={style.buttons}>
          <button className={style.button} onClick={increment}>
            increase
          </button>
          <button className={style.button} onClick={decrement}>
            decrease
          </button>
        </div>
      </div>

      <div className={style.inputSection}>
        <input
          className={style.input}
          type="number"
          value={inputCount}
          onChange={InputChange}
        />
        <div>Input for count: {inputCount}</div>
        <div className={style.buttons}>
          <button className={style.button} onClick={plusInputCount}>
            increase with input
          </button>
          <button className={style.button} onClick={minusInputCount}>
            decrease with input
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
