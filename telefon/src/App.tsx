import React from 'react';
import './App.css';
import LeftWindow from './app/windows/LeftWindow';
import MiddleWindow from './app/windows/MiddleWindow';

function App() {
  return (
    <div className="App">
      <LeftWindow></LeftWindow>
      <MiddleWindow></MiddleWindow>
    </div>
  );
}

export default App;
