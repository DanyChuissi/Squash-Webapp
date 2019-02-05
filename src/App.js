import React, { Component } from 'react';

import './App.css';
import Navigator from "./Navigator";


class App extends Component {
  render() {
    return (
      <div className="App">
       {
          <Navigator/>
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
