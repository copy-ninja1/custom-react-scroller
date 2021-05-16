import React from 'react'
import styled from 'styled-components'
import Scroller from 'custom-react-scroller'
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';

const Container = styled.div`
max-width:1000px;
padding:10px;
background-color:#f3f3f3;
margin:10px auto;
width:90vw;
padding:10px;
padding-top:30px;
@media (min-width: 768px) {
  width: 50vw;
}
`
const CodeContainer = styled.div`
overflowY:auto;
text-align:left;
height:100%;
width:100%;
`
// custom-react-scroller
const ScrollerContainer = styled.div`
background-color:white;
padding:8px 4px;
border-radius:16px;
border:1px solid #e4e4e4cc;
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
  return <Container>
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
    <CodeContainer>
      <SyntaxHighlighter language="javascript" style={dark} wrapLines={true}>
        {codeString}
      </SyntaxHighlighter>
    </CodeContainer>


  </Container>
}
const codeString = `
import React from 'react'
import styled from 'styled-components'
import Scroller from 'custom-react-scroller'

const Container = styled.div\`
max-width:1000px;
padding:10px;
background-color:#f3f3f3;
margin:auto;
height:50vh;
width:50vw;
padding:10px;
padding-top:30px;
\`
const ScrollerContainer = styled.div\`
background-color:white;
padding:8px 4px;
border-radius:16px;
border:1px solid #e4e4e4cc;
\`
const Buttons = styled.div\`
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
\`
const ButtonContent = styled.div\`
align-items: center;
display: inline-flex;
height: 100%;
max-width: 100%;
\`
const App = () => {
  return <Container>
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
}

export default App

`;

export default App
