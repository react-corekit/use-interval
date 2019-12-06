# @react-corekit/use-interval

> React Hook implementation for setInterval()

[![NPM](https://img.shields.io/npm/v/@react-corekit/use-interval.svg)](https://www.npmjs.com/package/@react-corekit/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-corekit/use-interval
```

## Usage

```jsx
import React, { Component } from "react";

import { useInterval } from "@react-corekit/use-interval";

const Counter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
};
```

## License

MIT © [glongh](https://github.com/glongh)
