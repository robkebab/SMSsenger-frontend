import React from "react";
import "./App.css";
import InputCont from "./components/InputCont";
import MessagesCont from "./components/MessagesCont";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to SMSsenger!</h1>
      </div>
      <div className="main">
        <MessagesCont />
        <InputCont />
      </div>
    </div>
  );
}

export default App;
