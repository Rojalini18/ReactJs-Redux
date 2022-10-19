import React, { useState } from "react";

const Calc = () => {
  const [state, setState] = useState("");

  const clickHandler = (e) => {
    setState(state.concat(e.target.value));
  };

  const calculate = () => {
    try {
      setState(eval(state).toString());
    } catch (error) {
      setState("error");
    }
  };

  const clear = () => {
    setState(state.slice(0, -1));
  };

  const allClear = () => {
    setState("");
  };

  return (
    <div>
      <input type="text" value={state} />
      <div>
        <button onClick={clickHandler} value="1">
          1
        </button>
        <button onClick={clickHandler} value="2">
          2
        </button>
        <button onClick={clickHandler} value="3">
          3
        </button>
        <button onClick={clickHandler} value="4">
          4
        </button>
        <button onClick={clickHandler} value="5">
          5
        </button>
        <button onClick={clickHandler} value="6">
          6
        </button>
        <button onClick={clickHandler} value="7">
          7
        </button>
        <button onClick={clickHandler} value="8">
          8
        </button>
        <button onClick={clickHandler} value="9">
          9
        </button>
        <button onClick={clickHandler} value="0">
          0
        </button>
        <button onClick={clickHandler} value="+">
          +
        </button>
        <button onClick={clickHandler} value="-">
          -
        </button>
        <button onClick={clickHandler} value="*">
          *
        </button>
        <button onClick={clickHandler} value="/">
          /
        </button>
        <button onClick={calculate} value="">
          =
        </button>
        <button onClick={clear} value="">
          C
        </button>
        <button onClick={allClear} value="">
          AC
        </button>
      </div>
    </div>
  );
};

export default Calc;
