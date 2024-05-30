import { useState } from "react";
import { PropTypes } from "prop-types";
import CounterButton from "./CounterButton";
export default function Counter() {
  const [total, setTotal] = useState(0);
  function RestetCounterButton(){
         setTotal(0)
  }
  function incrementCounterParentFunction(by) {
    setTotal(total + by);
  }
  function decrementCounterParentFunction(by) {
    setTotal(total - by);
  }
  return (
    <>
      <span className="totalcount">{total}</span>

      <CounterButton
        by={1}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      ></CounterButton>
      <CounterButton
        by={3}
        incrementCounterParentFunction={
          incrementCounterParentFunction
        }
        decrementCounterParentFunction={decrementCounterParentFunction}
      ></CounterButton>
      <CounterButton
        by={5}
        incrementCounterParentFunction={
          incrementCounterParentFunction
        }
        decrementCounterParentFunction={decrementCounterParentFunction}
      ></CounterButton>

      <button className="CounterButton"
      onClick={RestetCounterButton}
      >Reset</button>
    </>
  );
}
