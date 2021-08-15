# custom-react-scroller

[![NPM](https://img.shields.io/npm/v/custom-react-scroller.svg)](https://www.npmjs.com/package/custom-react-scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-react-scroller
```

## Screenshot Example

![example Screenshot](https://github.com/copy-ninja1/custom-react-scroller/blob/main/example/public/custom-react-scroller.png?raw=true)

## Demo Example

[Demo](https://codesandbox.io/s/currying-bush-6f38d?file=/src/App.js)

## Props

- `rightIcon`: Render the right icon component as you wish. (optional)
- `leftIcon`: Render the left icon component as you wish. (optional)

## Usage

```jsx
import React from 'react'
import Scroller from 'custom-react-scroller'
import 'custom-react-scroller/dist/index.css'
import './example.style.css'

const App = () => {
  return (
    <div className='container'>
      <div className='scrollerContainer'>
        <Scroller>
          {[...Array(20).keys()].map((val, indx) => {
            return (
              <div className='buttons' key={indx}>
                <span className='buttonContent'>button {indx + 1}</span>
              </div>
            )
          })}
        </Scroller>
      </div>
    </div>
  )
}

export default App
```

### example.style.css

```css
.container {
  max-width: 1000px;
  padding: 10px;
  background-color: #f3f3f3;
  margin: 10px auto;
  width: 90vw;
  padding: 10px;
  padding-top: 30px;
}

@media (min-width: 768px) {
  .container {
    width: 50vw;
  }
}

.codeContainer {
  overflow: auto;
  text-align: left;
  height: 100%;
  width: 100%;
}

.scrollerContainer {
  background-color: white;
  padding: 8px 4px;
  border-radius: 16px;
  border: 1px solid #e4e4e4cc;
}

.buttons {
  padding: 0 12px;
  background: #e0e0e0;
  margin: 4px 8px 4px 0;
  border-radius: 16px;
  font-size: 14px;
  height: 32px;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  line-height: 20px;
  max-width: 100%;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.buttonContent {
  align-items: center;
  display: inline-flex;
  height: 100%;
  max-width: 100%;
}
```

Made with :heart:

## License

MIT © [copy-ninja1](https://github.com/copy-ninja1)
