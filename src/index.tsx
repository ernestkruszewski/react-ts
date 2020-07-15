import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  function sum(a: number, b: number) {
    return a * b;
  }

  return <div>{sum(2, 25)}</div>;
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
