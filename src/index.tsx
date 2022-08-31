import React from "react";
import { createRoot } from "react-dom/client";

import { speak } from "./freedom";

console.log("Hello, world!");
speak("Hello React Scaffold!");

function App(): JSX.Element {
  return (
    <div>
      <h1>Helle, world!</h1>
      <p>This is a template for creating single page application with React.js</p>
      <p>Have fun coding!</p>
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
