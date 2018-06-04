# render-prop-fns

>

[![NPM](https://img.shields.io/npm/v/render-prop-fns.svg)](https://www.npmjs.com/package/render-prop-fns) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save render-prop-fns
```

## Usage

```jsx
import React from "react";

import { Counter } from "render-prop-fns";

const Example = () => (
  <Counter>
    {({ inc, value }) => (
      <div>
        {value}
        <br />
        <button onClick={inc}>increment</button>
      </div>
    )}
  </Counter>
);
```

## License

MIT © [jeetiss](https://github.com/jeetiss)
