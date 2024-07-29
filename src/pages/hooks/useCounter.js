import React, { useState, useEffect } from "react";

export default function useCounter(countStart) {
  const [count, setCount] = useState(countStart);

  const handleChangeCounter = (operation) =>
    setCount((prevCount) =>
      operation === "increment" ? prevCount + 1 : prevCount - 1
    );

    return {count, handleChangeCounter}
}
