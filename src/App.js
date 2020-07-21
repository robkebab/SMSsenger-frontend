import React from "react";
import "./App.css";
import InputCont from "./components/InputCont";
import MessagesCont from "./components/MessagesCont";
import { RecoilRoot } from "recoil";
import Filter from "./components/Filter";

function App() {
  return (
    <RecoilRoot>
      <div className="App">

        <div className="header">
          <h1>Welcome to SMSsenger!</h1>
        </div>
        
        <div className="features">
          <Filter />
          <InputCont />
        </div>

        <div className="main">
          <MessagesCont />
        </div>

      </div>
    </RecoilRoot>
  );
}

export default App;
