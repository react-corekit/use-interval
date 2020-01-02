import React, { useState } from "react";

import { useInterval } from "@react-corekit/use-interval";

const App = () => {
  const [delay] = useState(1000);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
