'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$MyReactApp = require("./ExampleStyles.bs.js");
var FetchedDogPictures$MyReactApp = require("./FetchedDogPictures/FetchedDogPictures.bs.js");


var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$MyReactApp.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

// ReactDom.render(React.createElement(BlinkingGreeting$MyReactApp.make, {
//           children: "Hello!"
//         }), makeContainer("Blinking Greeting"));

//ReactDom.render(React.createElement(ReducerFromReactJSDocs$MyReactApp.make, { }), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$MyReactApp.make, { }), makeContainer("Gaivit Yakeaw"));

//ReactDom.render(React.createElement(ReasonUsingJSUsingReason$MyReactApp.make, { }), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
