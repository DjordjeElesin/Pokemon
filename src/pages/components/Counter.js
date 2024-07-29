
export default function Counter({count, handleChangeCounter}) {
  return (
    <div className="counterContr">
      <button
        className="counterBtn"
        onClick={() => handleChangeCounter("decrement")}
      >
        -
      </button>
      <span className="counterValue">{count}</span>
      <button
        className="counterBtn"
        onClick={() => handleChangeCounter("increment")}
      >
        +
      </button>
    </div>
  );
}
