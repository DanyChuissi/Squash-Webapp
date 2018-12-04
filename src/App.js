import React, { Component } from 'react';
import './App.css';
import RegistrationController from './Registration/RegistrationController'
import RegistrationView from './Registration/RegistrationView'
import LoginController from "./Login/LoginController";
import PlayerProfileController from "./PlayerProfile/PlayerProfileController";
import NotificationsView from "./Notifications/NotificationsView";
import PlayerProfileView from "./PlayerProfile/PlayerProfileView";

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<NotificationView/>*/}
      {/*<PlayerProfileController/>*/}
          {<RegistrationView/>}
      </div>
    );
  }
}

export default App;
