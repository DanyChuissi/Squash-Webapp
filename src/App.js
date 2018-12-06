import React, { Component } from 'react';
import './App.css';

import PlayerProfileController from "./PlayerProfile/PlayerProfileController";


class App extends Component {
  render() {
    return (
      <div className="App">
         <PlayerProfileController/>
      </div>
    );
  }
}

export default App;
