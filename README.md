# @react-corekit/use-interval

> React Hook implementation for setInterval()

[![NPM](https://img.shields.io/npm/v/@react-corekit/use-interval.svg)](https://www.npmjs.com/package/@react-corekit/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-corekit/use-interval
```

```bash
yarn add @react-corekit/use-interval
```

## Syntax

```js
useInterval(func, delay);
```

## Parameters

**func**

> A function to be executed every delay milliseconds. The function is not passed any arguments, and no return value is expected.

**delay**

> The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function.

## Usage

> Visit: https://react-corekit.github.io/use-interval/ for a minimalistic live demo.

```jsx
import React, { useState } from "react";

import { useInterval } from "@react-corekit/use-interval";

const Counter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
};
```

### Pausing and Reseting the counter example

```jsx
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
```

## Additional documentation

[Window/GlobalScope setInterval Reference](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

[Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

## Credits

Based on Dan Abramov's post "Making setInterval Declarative with React Hooks".

## License

MIT - [glongh](https://github.com/glongh)
