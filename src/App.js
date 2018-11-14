import React, { Component } from 'react';

import './App.css';
import LoginView from './Login/LoginView'

class App extends Component {
  render() {
    return (
      <div className="App">
       <LoginView/>
      </div>
    );
  }
}

export default App;
