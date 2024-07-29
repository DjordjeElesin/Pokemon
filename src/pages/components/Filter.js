import { IoIosRefresh } from "react-icons/io";

export default function Filter({handleRandomizeClick, isLoading}){
  return (
    <div className="optionsContr">
      <hr></hr>
      <button id="randomizeBtn" onClick={() => handleRandomizeClick()}>
        <IoIosRefresh />
        {isLoading ? "Loading..." : "Randomize"}
      </button>
    </div>
  )
}