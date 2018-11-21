import React, { Component } from 'react';
import './App.css';

import LoginController from "./Login/LoginController";

class App extends Component {
  render() {
    return (
      <div className="App">
       <LoginController/>
      </div>
    );
  }
}

export default App;
