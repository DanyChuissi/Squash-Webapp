import React, { Component } from 'react';
import './App.css';


import PlayerProfileView from "./PlayerProfile/PlayerProfileView";


class App extends Component {
  render() {
    return (
      <div className="App">
       <PlayerProfileView/>
      </div>
    );
  }
}

export default App;
