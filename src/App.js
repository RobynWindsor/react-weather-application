import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />;
        <div class="gitLink">
          <small>
            <a
              href="https://github.com/RobynWindsor/react_two"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code{" "}
            </a>
            by Robyn Windsor
          </small>
        </div>
      </div>
    </div>
  );
}
