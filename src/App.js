// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from './Lamp';
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working : true,
      class : "App-logo"
    }
  }
  changeHomerstate = () => {
    this.setState({working : !this.state.working, class : this.state.class === "App-logo" ? "App-logo2" :"App-logo" });    
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className={this.state.class} alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
        </header>        
        <Lamp/>        
        <Quotes/>
        <button onClick={this.changeHomerstate}>Homer</button>
      </div>      
    );
  }
}

export default App;
