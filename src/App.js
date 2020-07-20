import React from 'react';
import './App.css';
import InputCont from './components/InputCont';
import MessagesCont from './components/MessagesCont';

function App() {
  return (
    <div className="App">
      <MessagesCont />
      <InputCont />
    </div>
  );
}

export default App;
