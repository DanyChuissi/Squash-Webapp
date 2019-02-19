import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LoginView from "./Login/LoginView";

import RegistrationController from "./Registration/RegistrationController";
import PlayerProfileView from "./PlayerProfile/PlayerProfileView";
import DatenschutzerklaerungController from "./Datenschutzerklaerung/DatenschutzerklaerungController";
import EditRightsView from "./EditRights/EditRightsView";
import InviteUserView from "./InviteUser/InviteUserView";
import JTPCalendarView from "./JTP/JTPCalendarView";
import LeistungsdiagnostikView from "./Leistungsdiagnostik/LeistungsdiagnostikView";
import NotificationsController from "./Notifications/NotificationsController";

import TourneyListView from "./Tourney/TourneyListView";
import TrainerProfileView from "./TrainerProfile/TrainerProfileView";
import KalendarView from "./Trainingdiary/KalendarView";
import DetailsAnsichtController from "./Trainingstagebuch/DetailsAnsichtController";
import PlayerListView from "./PlayerList/PlayerListView";
import ResetLoginDataView from "./ResetLoginData/ResetLoginDataView";
import VergleichDaten from "./Leistungsdiagnostik/AthletVergleichen/VergleichDaten";
import CreateWorkout from "./JTP/CreateWorkout";
import MAZView from "./JTP/MAZView";
import MAZListView from "./JTP/MAZListView";
import axios from "axios";
import PlayerProfileController from "./PlayerProfile/PlayerProfileController";
import DatenschutzerklaerungView from "./Datenschutzerklaerung/DatenschutzerklaerungView";


/**
 * @author Daniela
 * This File contains all functions for the Routing of the App.
 * @visibleName Navigator
 */

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    state = {
        userEmail: '',
        password:'',
    }

    setUsermail = (e) => {
        this.setState({userEmail: e.target.value})
        console.log(this.state.userEmail)
    }

    submitLogin = () => {
      window.location='../benachrichtigungen'
    }

   /* setPassword = (e) => {
        this.setState({password: e.target.value})
        console.log(this.state.password)
    }*/

    LoginRoute() {
        return (
            <div>
                <LoginView/>
            </div>
        );
    }

    MAZViewRoute() {
        return (
            <div>
                <MAZView/>
            </div>
        );
    }

    CreateWorkoutRoute() {
        return (
            <div>
                <CreateWorkout/>
            </div>
        );
    }

    PlayerprofileRoute() {
        document.title = "PlayerProfil | Squirrel";
        return (
            <div>
                <PlayerProfileController/>
            </div>
        );
    }

    VergleichRoute() {
        document.title = "Spielervergleich | Squirrel";
        return (
            <div>
                <VergleichDaten/>
            </div>
        );
    }

    PlayerListRoute() {
        return (
            <div>
                <PlayerListView/>
            </div>
        );
    }

    RegistrationRoute() {
        return (
            <div>
                <RegistrationController/>
            </div>
        );
    }

    dataPrivacyStatementRoute() {
        return (
            <div>
                <DatenschutzerklaerungView/>
            </div>
        );
    }

    EditRightsRoute() {
        return (
            <div>
                <EditRightsView/>
            </div>
        );
    }

    InviteUserRoute() {
        return (
            <div>
                <InviteUserView/>
            </div>
        );
    }

    JTPRoute() {
        return (
            <div>
                <JTPCalendarView/>
            </div>
        );
    }

    performanceDiagnosticsRoute() {
        document.title = "Leistungsdiagnostik | Squirel";
        return (
            <div>
                <LeistungsdiagnostikView/>
            </div>
        );
    }

    notificationRoute() {
        return (
            <div>
                <NotificationsController/>
            </div>
        );
    }

    resetLoginDataRoute() {
        return (
            <div>
                <ResetLoginDataView/>
            </div>
        );
    }

    tourneyListRoute() {
        return (
            <div>
                <TourneyListView/>
            </div>
        );
    }

    trainerProfileRoute() {
        return (
            <div>
                <TrainerProfileView/>
            </div>
        );
    }

    trainingsdiaryRoute() {
        return (
            <div>
                <KalendarView/>
            </div>
        );
    }

    trainingsdiaryDetailRoute() {
        return (
            <div>
                <DetailsAnsichtController/>
            </div>
        );
    }

    render() {

        return (

            <div>
                <Router>
                    <div>
                        <Route exact path="/login" render={props => <LoginView setName={this.setUsermail}
                                                                               setPasswort={this.setPassword}
                                                                               name={this.state.userEmail}
                                                                               passwort={this.state.password}
                                                                               submitLogin={this.submitLogin}/>}/>
                        <Route path="/playerList" component={this.PlayerListRoute}/>
                        <Route path="/registration" component={this.RegistrationRoute}/>
                        <Route exact path={'/playerprofile/:mail'}
                               render={props => <PlayerProfileController {...props}/>}/>
                        <Route path={"/dataPrivacyStatement"} component={this.dataPrivacyStatementRoute}/>
                        <Route path={"/editRights"} render={props => <EditRightsView email={this.state.userEmail}{...props}/>}/>
                        <Route path={"/inviteUser"} component={this.InviteUserRoute}/>
                        <Route path={"/jTP/:mail"} render={props => <JTPCalendarView {...props}/>}/>
                        <Route path={"/leistungsdiagnostik/:mail"}
                               render={props => <LeistungsdiagnostikView {...props}/>}/>
                        <Route path={"/benachrichtigungen"} component={this.notificationRoute}/>
                        <Route path={"/resetLoginData"} component={this.resetLoginDataRoute}/>
                        <Route path={"/tourneyList"} component={this.tourneyListRoute}/>
                        <Route path={"/trainerProfile"} component={this.trainerProfileRoute}/>
                        <Route path={"/trainingsdiarydetail"} component={this.trainingsdiaryDetailRoute}/>
                        <Route path={"/athletVergleich"} component={this.VergleichRoute}/>
                        <Route path={"/createWorkout"} component={this.CreateWorkoutRoute}/>
                        <Route exact path={"/mAZList/:mail"} render={props => <div><MAZListView {...props}/></div>}/>
                        <Route exact path={'/mazDetail/:id'} render={props => <MAZView {...props}  />}/>
                        <Route exact path={'/trainingsdiary/:mail'} render={props => <KalendarView {...props}  />}/>

                    </div>
                </Router>
            </div>


        );
    }

}

export default Navigator;