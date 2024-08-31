# react-mini-scrollbar

> A custom scrollbar component for React

[![NPM](https://img.shields.io/npm/v/react-mini-scrollbar.svg)](https://www.npmjs.com/package/react-mini-scrollbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mini-scrollbar
```

## Usage

```jsx
import React, { Component } from 'react'

import CustomScrollbar from 'react-mini-scrollbar'
import 'react-mini-scrollbar/dist/index.css'

const Example = () => {
  return (
    <CustomScrollbar>
      <div style={{ height: '1000px', width: '1000px' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies, nunc nec vehicula ultricies, nunc nec vehicula
          ultricies, nunc nec vehicula
        </p>
      </div>
    </CustomScrollbar>
  )
}
```

## License

MIT © [henrynguyen6677](https://github.com/henrynguyen6677)
