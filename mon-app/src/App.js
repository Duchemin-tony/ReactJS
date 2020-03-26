import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <StateCompo  label={"Tony"} />
        <PureCompo/>
        <PureCompoProps label={"Tony"} age={"29"} />









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
