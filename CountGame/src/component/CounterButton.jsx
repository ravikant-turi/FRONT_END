export default function CounterButton({
  by,
  incrementCounterParentFunction,
  decrementCounterParentFunction,
}) 
{
  const stylButton = {
    fontSize: "10px",
    backgroundColor: "00a5ab",
  };
  return (
    <>
      <div className="CounterButton">
        {/* <span className="count">{count}</span> */}
        <div>
          <button
            className="counterButton"
            onClick={() => incrementCounterParentFunction(by)}
            style={stylButton}
          >
            {by}
          </button>

          <button
            className="counterButton"
            onClick={() => decrementCounterParentFunction(by)}
            style={stylButton}
          >
            -{by}
          </button>
        </div>
      </div>
    </>
  );
}
