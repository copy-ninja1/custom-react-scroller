# custom-react-scroller

[![NPM](https://img.shields.io/npm/v/custom-react-scroller.svg)](https://www.npmjs.com/package/custom-react-scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-react-scroller
```

## Usage

```jsx
import React from 'react'
import styled from 'styled-components'
import Scroller from 'custom-react-scroller'

const Container = styled.div`
  max-width: 1000px;
  padding: 10px;
  background-color: #f3f3f3;
  margin: auto;
  height: 50vh;
  width: 50vw;
  padding: 10px;
  padding-top: 30px;
`
const ScrollerContainer = styled.div`
  background-color: white;
  padding: 8px 4px;
  border-radius: 16px;
  border: 1px solid #e4e4e4cc;
`
const Buttons = styled.div`
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
`
const ButtonContent = styled.div`
  align-items: center;
  display: inline-flex;
  height: 100%;
  max-width: 100%;
`
const App = () => {
  return (
    <Container>
      <ScrollerContainer>
        <Scroller>
          {[...Array(20).keys()].map((val, indx) => {
            return (
              <Buttons key={indx}>
                <ButtonContent>button {indx + 1}</ButtonContent>
              </Buttons>
            )
          })}
        </Scroller>
      </ScrollerContainer>
    </Container>
  )
}

export default App
```

Made with :heart:

## License

MIT © [copy-ninja1](https://github.com/copy-ninja1)
