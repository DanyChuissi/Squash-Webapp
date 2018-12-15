import React, { Component } from 'react';

import './App.css';
import Controller from "./Controller";
import KalendarView from "./Trainingdiary/KalendarView";


import RegistrationController from './Registration/RegistrationController'
import RegistrationView from './Registration/RegistrationView'
import LoginController from "./Login/LoginController";
import PlayerListController from "./PlayerList/PlayerListController";
//import NotificationsView from "./Notifications/NotificationsView";
import PlayerListView from "./PlayerList/PlayerListView";
import DetailsAnsichtView from "./Trainingstagebuch/DetailsAnsichtView";
import ResetLoginDataView from "./ResetLoginData/ResetLoginDataView";
import LoginView from "./Login/LoginView";
import {getList} from './PlayerList/PlayerListController'

class App extends Component {
  render() {
    return (
      <div className="App">
       {
          <Controller/>
        }
         {/* {<ResetLoginDataView/>}*/}
       {/*<NotificationsView/>*/}
  {/* {<PlayerProfileView email={"trainer@Email.de"}/>}*/}
     {/* {<RegistrationView/>}*/}
      {/*  { <DetailsAnsichtView datum={"12-02-2018"}
              schwerpunkt={"Technik(Ausdauer)"}
              dauer={"120"}
              intensitaet={"4"}
              uebungen={"A B C D"}
              mentale_Ersch={"4"}
              bemerkung={"Alles gut"}
              koerperliche_Ersch={"5"}
              muskelkarter={"2"}
              puls={"rechts als Diagramm"}
              aenderungswuensche={"keine"}
              schlafdauer={"7 Stunden"}
              gewicht={"70"}
              maximale_herzf={"180"}
              minimale_herzf={"70"}
              durschnittliche_herzf={"100"}
              wegstrecke={"(Ausdauer-Outdoor"}
              geschwindigkeit={"Ausdauer-Outdoor"}
              geaendert_am={"geändert am 26.11.2018"}>

          </DetailsAnsichtView>}*/}
      </div>
    );
  }
}

export default App;
