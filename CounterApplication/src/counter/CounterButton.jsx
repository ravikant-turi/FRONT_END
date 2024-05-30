import React, { useState } from "react";
import "./CounterButton.css";
import { PropType } from "prop-types";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  function incrementalCountParentFunction(by) {
    setCount(count + by);
  }
  function decremtalCountParentFunction(by) {
    setCount(count - by);
  }
  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementalMethod={incrementalCountParentFunction}
        decrementalMethod={decremtalCountParentFunction}
      />
      <CounterButton
        by={2}
        incrementalMethod={incrementalCountParentFunction}
        decrementalMethod={decremtalCountParentFunction}
      />
      <CounterButton
        by={3}
        incrementalMethod={incrementalCountParentFunction}
        decrementalMethod={decremtalCountParentFunction}
      />
      <CounterButton
        by={4}
        incrementalMethod={incrementalCountParentFunction}
        decrementalMethod={decremtalCountParentFunction}
      />
      <button className="resetButton" onClick={resetCounter}>
        Reset
      </button>
    </>
  );
}
 function CounterButton({ by, incrementalMethod, decrementalMethod }) {
  const [count, setCount] = useState(0);
  function incrementCounterButtonFunction() {
    setCount(count + by);
    incrementalMethod(by);
  }
  function decrementCounterButtonFunction() {
    setCount(count - by);
    decrementalMethod(by);
  }
  return (
    <div>
      <div>
        {/* <span className="Count">{count}</span> */}
        <div>
          <button
            className="couterButton"
            onClick={incrementCounterButtonFunction}
          >
            {by}
          </button>
          <button
            className="couterButton"
            onClick={decrementCounterButtonFunction}
          >
            {-by}
          </button>
        </div>
      </div>
    </div>
  );
}
