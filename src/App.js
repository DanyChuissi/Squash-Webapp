import React, { Component } from 'react';
import './App.css';
import Navigator from "./Navigator";
import PlayerListView from "./PlayerList/PlayerListView";
import VergleichDaten from "./Leistungsdiagnostik/AthletVergleichen/VergleichDaten";
import Controller from "./Controller";

class App extends Component {


  /**
   * Insert text at cursor position.
   *
   * @param {string} text
   * @public
   * @visibleName The Best Button Ever 🐙
   */
  example = (text) => {
    /** test methose */
    return <button>test </button>
  }

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
