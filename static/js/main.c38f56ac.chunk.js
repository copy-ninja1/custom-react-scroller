(this["webpackJsonpcustom-react-scroller-example"]=this["webpackJsonpcustom-react-scroller-example"]||[]).push([[0],{14:function(e,t,n){e.exports=n(241)},15:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);n(15);var r,a,c=n(0),o=n.n(c),l=n(7),s=n.n(l),i=n(13);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){return Object(c.createElement)("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=Object(c.createElement)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",stroke:"none"})))}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return Object(c.createElement)("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=Object(c.createElement)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",stroke:"none"})))}var v="_1vZ5p",d="_1bqoy",h="_2-0lb",w="_cQFyX",E="_11wNc";function g(e){var t=function(){return e.current?e.current.offsetWidth:0},n=Object(c.useState)(t),r=n[0],a=n[1],o=function(){a(t())};return Object(c.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),Object(c.useLayoutEffect)((function(){o()}),[]),r}var b=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)(0),a=r[0],l=r[1],s=g(n),i=g(t),u=s/1.2;return o.a.createElement("div",{className:v,position:a},o.a.createElement("div",{className:d},o.a.createElement("span",{onClick:function(){!function(e){var t=a+e;t+u<s&&l(t)}(100)}},e.leftIcon?propsleftIcon:o.a.createElement(m,null))),o.a.createElement("div",{className:w,ref:n},o.a.createElement("div",{className:E,style:{transform:"translateX("+a+"px)"},ref:t},e.children)),o.a.createElement("div",{className:h},o.a.createElement("span",{onClick:function(){!function(e){var t=-a+e;t+u<i&&l(-t)}(100)}},e.rightIcon?e.rightIcon:o.a.createElement(f,null))))},x=n(243),y=n(12),C=(n(20),n(21),'\nimport React from \'react\'\nimport Scroller from \'custom-react-scroller\'\nimport \'custom-react-scroller/dist/index.css\'\nimport \'./example.style.css\'\n\nconst App = () => {\n  return <div className="container">\n    <div className="scrollerContainer">\n    <Scroller rightIcon={\n      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>}>\n      {[...Array(20).keys()].map((val, indx) => {\n        return (\n          <div className="buttons" key={indx}>\n            <span className="buttonContent">button {indx + 1}</span>\n          </div>\n        )\n      })}\n    </Scroller>\n    </div>\n  </div>\n}\n\nexport default App\n\n'),O=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"scrollerContainer"},o.a.createElement(b,{rightIcon:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}))},Object(i.a)(Array(20).keys()).map((function(e,t){return o.a.createElement("div",{className:"buttons",key:t},o.a.createElement("span",{className:"buttonContent"},"button ",t+1))})))),o.a.createElement("div",{className:"codeContainer"},o.a.createElement(x.a,{language:"javascript",style:y.a,wrapLines:!0},C)))};s.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c38f56ac.chunk.js.map