// const heading = React.createElement(
//   "h2",
//   { className: "reactName" },
//   "this is by react from app."
// );

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("p", {}, "this is a p tag"),
    React.createElement("p", {}, "this is a p tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("p", {}, "this is a p tag"),
    React.createElement("p", {}, "this is a p tag"),
  ]),
]);

const rDom = ReactDOM.createRoot(document.getElementById("id"));

rDom.render(heading);
