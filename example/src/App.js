import React from 'react'
import Scroller from 'custom-react-scroller'
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';
import 'custom-react-scroller/dist/index.css'
import './example.style.css'

const App = () => {
  return <div className="container">
    <div className="scrollerContainer">
      <Scroller>
        {[...Array(20).keys()].map((val, indx) => {
          return (
            <div className="buttons" key={indx}>
              <span className="buttonContent">button {indx + 1}</span>
            </div>
          )
        })}
      </Scroller>
    </div>
    <div className="codeContainer">
      <SyntaxHighlighter language="javascript" style={dark} wrapLines={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
}
const codeString = `
import React from 'react'
import Scroller from 'custom-react-scroller'
import 'custom-react-scroller/dist/index.css'
import './example.style.css'

const App = () => {
  return <div className="container">
    <div className="scrollerContainer">
      <Scroller>
        {[...Array(20).keys()].map((val, indx) => {
          return (
            <div className="buttons" key={indx}>
              <span className="buttonContent">button {indx + 1}</span>
            </div>
          )
        })}
      </Scroller>
    </div>
    <div className="codeContainer">
      <SyntaxHighlighter language="javascript" style={dark} wrapLines={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
}

export default App

`;

export default App
