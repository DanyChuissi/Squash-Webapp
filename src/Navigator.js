import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginView from "./Login/LoginView";
import PlayerList from "./PlayerList/PlayerList";
import RegistrationView from "./Registration/RegistrationView";
import RegistrationController from "./Registration/RegistrationController";
import PlayerProfileView from "./PlayerProfile/PlayerProfileView";
import DatenschutzerklaerungController from "./Datenschutzerklaerung/DatenschutzerklaerungController";
import EditRightsView from "./EditRights/EditRights";
import InviteUserView from "./InviteUser/InviteUserView";
import JTPCalendarView from "./JTP/JTPCalendarView";
import LeistungsdiagnostikView from "./Leistungsdiagnostik/LeistungsdiagnostikView";
import NotificationsController from "./Notifications/NotificationsController";
import ResetLoginDataController from "./ResetLoginData/ResetLoginDataController";
import TourneyListView from "./Tourney/TourneyListView";
import TrainerProfileView from "./TrainerProfile/TrainerProfileView";
import KalendarView from "./Trainingdiary/KalendarView";
import DetailsAnsichtController from "./Trainingstagebuch/DetailsAnsichtController";
import PlayerListView from "./PlayerList/PlayerListView";


function Navigator() {
    return (
        <Router>
            <div>
                <Route exact path="/login" component={LoginRoute} />
                <Route path="/playerList" component={PlayerListRoute} />
                <Route path="/registration" component={RegistrationRoute} />
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

            </div>
        </Router>
    );
}

function LoginRoute() {
    return (
        <div>
            <LoginView/>
        </div>
    );
}

function PlayerprofileRoute() {
    return (
        <div>
            <PlayerProfileView/>
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

function dataPrivacyStatementRoute(){
    return (
        <div>
            <DatenschutzerklaerungController/>
        </div>
    );
}

function EditRightsRoute(){
    return (
        <div>
            <EditRightsView/>
        </div>
    );
}
function InviteUserRoute(){
    return (
        <div>
            <InviteUserView/>
        </div>
    );
}

function JTPRoute(){
    return (
        <div>
            <JTPCalendarView/>
        </div>
    );
}

function performanceDiagnosticsRoute(){
    return (
        <div>
            <LeistungsdiagnostikView/>
        </div>
    );
}

function notificationRoute(){
    return (
        <div>
            <NotificationsController/>
        </div>
    );
}

function resetLoginDataRoute(){
    return (
        <div>
            <ResetLoginDataController/>
        </div>
    );
}

function tourneyListRoute(){
    return (
        <div>
            <TourneyListView/>
        </div>
    );
}

function trainerProfileRoute(){
    return (
        <div>
            <TrainerProfileView/>
        </div>
    );
}
function trainingsdiaryRoute(){
    return (
        <div>
            <KalendarView/>
        </div>
    );
}

function trainingsdiaryDetailRoute(){
    return (
        <div>
            <DetailsAnsichtController/>
        </div>
    );
}

export default Navigator;