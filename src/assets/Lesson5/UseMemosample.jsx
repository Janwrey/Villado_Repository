import React, { useState, useMemo } from "react";

function UseMemosample() {
  const [count, setCount] = useState(0);

  //Simulate a very low function
  const slowFunction = () => {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  };

  //const result = slowFunction();
  const result = useMemo(() => slowFunction(), []);

  return (
    <div>
      <h2>Without useMemo</h2>
      <p>Slow Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
}

export default UseMemosample;
