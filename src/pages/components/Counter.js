
export default function Counter({value, onCountChange}){
  const increment = () => {
    onCountChange("increment")
  }
  const decrement = () => {
    onCountChange("decrement")
  }

  return(
    <div className="counterContr">
      <button className="decrement" onClick={decrement}>-</button>
      <span className="counterValue">{value}</span>
      <button className="increment" onClick={increment}>+</button>
    </div>
  )
}