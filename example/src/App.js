import React, { useState } from "react";

import { useInterval } from "@react-corekit/use-interval";

const App = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
};

export default App;
