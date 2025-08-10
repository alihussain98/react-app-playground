import React from "react";
import ReactDOM from "react-dom/client";

const nestedStructure = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement("h1", { key: 2 }, "I am a H1 Tag"),
    React.createElement("h2", { key: 3 }, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: 4 }, [
    React.createElement("h1", { key: 5 }, "I am a H1 Tag"),
    React.createElement("h2", { key: 6 }, "I am a H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedStructure);
