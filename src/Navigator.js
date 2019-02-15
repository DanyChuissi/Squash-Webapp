import React from "react";
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
import axios from 'axios';

/**
 * @author Daniela
 * This File contains all functions for the Routing of the App.
 * @visibleName Navigator
 */

function Navigator() {
    return (
        <Router>
            <div>
                <Route exact path="/login" component={LoginRoute}/>
                <Route path="/playerList" component={PlayerListRoute}/>
                <Route path="/registration" component={RegistrationRoute}/>
                <Route path={"/playerprofile"} component={PlayerprofileRoute}/>
                <Route path={"/dataPrivacyStatement"} component={dataPrivacyStatementRoute}/>
                <Route path={"/editRights"} component={EditRightsRoute}/>
                <Route path={"/inviteUser"} component={InviteUserRoute}/>
                <Route path={"/jTP"} component={JTPRoute}/>
                <Route path={"/leistungsdiagnostik"} component={performanceDiagnosticsRoute}/>
                <Route path={"/benachrichtigungen"} component={notificationRoute}/>
                <Route path={"/resetLoginData"} component={resetLoginDataRoute}/>
                <Route path={"/tourneyList"} component={tourneyListRoute}/>
                <Route path={"/trainerProfile"} component={trainerProfileRoute}/>
                <Route path={"/trainingsdiary"} component={trainingsdiaryRoute}/>
                <Route path={"/trainingsdiarydetail"} component={trainingsdiaryDetailRoute}/>
                <Route path={"/athletVergleich"} component={VergleichRoute}/>
                <Route path={"/createWorkout"} component={CreateWorkoutRoute}/>
                <Route path={"/mAZDetail"} component={MAZViewRoute}/>
                <Route path={"/mAZList"} component={MAZListRoute}/>
            </div>
        </Router>
    );
}

function MAZListRoute() {
    return (
        <div>
            <MAZListView/>
        </div>
    );
}

function LoginRoute() {
    return (
        <div>
            <LoginView/>
        </div>
    );
}

function MAZViewRoute() {
    return (
        <div>
            <MAZView/>
        </div>
    );
}

function CreateWorkoutRoute() {
    return (
        <div>
            <CreateWorkout/>
        </div>
    );
}

function PlayerprofileRoute() {
    document.title = "PlayerProfil | Squirrel";
    return (
        <div>
            <PlayerProfileView/>
        </div>
    );
}

function VergleichRoute() {
    document.title = "Spielervergleich | Squirrel";
    return (
        <div>
            <VergleichDaten/>
        </div>
    );
}

function PlayerListRoute() {
    return (
        <div>
            <PlayerListView/>
        </div>
    );
}

function RegistrationRoute() {
    return (
        <div>
            <RegistrationController/>
        </div>
    );
}

function dataPrivacyStatementRoute() {
    return (
        <div>
            <DatenschutzerklaerungController/>
        </div>
    );
}

function EditRightsRoute() {
    return (
        <div>
            <EditRightsView/>
        </div>
    );
}

function InviteUserRoute() {
    return (
        <div>
            <InviteUserView/>
        </div>
    );
}

function JTPRoute() {
    return (
        <div>
            <JTPCalendarView/>
        </div>
    );
}

function performanceDiagnosticsRoute() {
    document.title = "Leistungsdiagnostik | Squirel";
    return (
        <div>
            <LeistungsdiagnostikView/>
        </div>
    );
}

function notificationRoute() {
    return (
        <div>
            <NotificationsController/>
        </div>
    );
}

function resetLoginDataRoute() {
    return (
        <div>
            <ResetLoginDataView/>
        </div>
    );
}

function tourneyListRoute() {
    return (
        <div>
            <TourneyListView/>
        </div>
    );
}

function trainerProfileRoute() {
    return (
        <div>
            <TrainerProfileView/>
        </div>
    );
}

function trainingsdiaryRoute() {
    return (
        <div>
            <KalendarView/>
        </div>
    );
}

function trainingsdiaryDetailRoute() {
    return (
        <div>
            <DetailsAnsichtController/>
        </div>
    );
}

export default Navigator;