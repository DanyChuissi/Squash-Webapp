import React, { Component } from 'react';
import './App.css';
import Navigator from "./Navigator";
import PlayerListView from "./PlayerList/PlayerListView";
import VergleichDaten from "./Leistungsdiagnostik/AthletVergleichen/VergleichDaten";

class App extends Component {
  render() {
    return (
      <div className="App">
       {
          <Navigator/>
       }
      </div>
    );
  }
}

export default App;
