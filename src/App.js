import React, { Component } from 'react';

import './App.css';


import TourneyListView from "./Tourney/TourneyListView";


class App extends Component {
  render() {
    return (
      <div className="App">
       {
          <TourneyListView/>
        }
      </div>
    );
  }
}

export default App;
