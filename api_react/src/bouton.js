import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Tester le film</button>
      <p>Compteur: {count}</p>
    </div>
  );
};

export default CounterButton;
