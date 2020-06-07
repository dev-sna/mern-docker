import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(async (res) => {
        const json = await res.json();
        console.log("json: ", json);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
