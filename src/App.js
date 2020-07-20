import React from "react";
import "./App.css";
import InputCont from "./components/InputCont";
import MessagesCont from "./components/MessagesCont";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to SMSsenger!</h1>
      </div>
      <RecoilRoot>
        <div className="main">
          <MessagesCont />
          <InputCont />
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
