import React from "react";
import { ToSendToForm } from "./ToSendToForm";
import { Person } from "./Person";
import "./App.css";

function App() {
  return (
    <Person>
      {({}) => {
        return <div style={{ color: "green" }}>Meow</div>;
      }}
    </Person>
  );
}

export default App;
