import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <div className="card">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
