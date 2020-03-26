import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stateApp : ""
    }
  }
  onInputChange = (val) => {
    this.setState({stateApp:val});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          <StateCompo  label={"Tony"} onInputChange={this.onInputChange}/>
          <PureCompo/>
          <PureCompoProps label={this.state.stateApp} age={"29"} />
          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={"29"} /> : <div></div>}




        </header>
      </div>
    );
  }
}

export default App;
