import React, {Component} from 'react';
import '../App.css';
import PlayerProfileView from "./PlayerProfileView";

class PlayerProfileController extends Component {

    state = {
        name: '',
        surname: '',
        mail: '',
        birthdate: '',
        city: '',
        zip: '',
        street: '',
        houseNbr: '',
        squad: '',
        sPin: '',
        mobileNumber: '',
        landlaneNumber: '',
        nationalAssosiation: '',
    }

    getData = () => {
        //TODO JSON Data ziehen
    }

    postData = () => {
        //TODO JSON Data übermitteln
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setSurname = (e) => {
        this.setState({surname: e.target.value})
    }

    setMail = (e) => {
        this.setState({mail: e.target.value})
    }
    setBirthdate = (e) => {
        this.setState({birthdate: e.target.value})
    }


    setZip = (e) => {
        this.setState({zip: e.target.value})
    }
    setCity = (e) => {
        this.setState({city: e.target.value})
    }


    setStreet = (e) => {
        this.setState({street: e.target.value})
    }

    setHouseNbr = (e) => {
        this.setState({houseNbr: e.target.value})
    }

    setSquad = (e) => {
        this.setState({squad: e.target.value})
    }

    setSPin = (e) => {
        this.setState({sPin: e.target.value})
    }
    setLandlaneNumber = (e) => {
        this.setState({landlaneNumber: e.target.value})
    }
    setMobileNumber = (e) => {
        this.setState({mobileNumber: e.target.value})
    }
    setNationalAssosiation = (e) => {
        this.setState({nationalAssosiation: e.target.value})
    }


    confirmChanges = () => {
        this.postData();
    }

    onEdit = () => {
        var editable_elements = document.querySelectorAll("[contentEditable=false]");
        editable_elements[0].setAttribute("contentEditable", true);
        editable_elements[1].setAttribute("contentEditable", true);
        editable_elements[2].setAttribute("contentEditable", true);
        editable_elements[3].setAttribute("contentEditable", true);
        editable_elements[4].setAttribute("contentEditable", true);
        editable_elements[5].setAttribute("contentEditable", true);
        editable_elements[6].setAttribute("contentEditable", true);
        editable_elements[7].setAttribute("contentEditable", true);
        editable_elements[8].setAttribute("contentEditable", true);
        editable_elements[9].setAttribute("contentEditable", true);
        editable_elements[10].setAttribute("contentEditable", true);
        editable_elements[11].setAttribute("contentEditable", true);
        editable_elements[12].setAttribute("contentEditable", true);

    }

    onDelete = () => {
        //TODO Benutzer löschen
    }

    onCompare=()=>{
        //TODO Athleten löschen
    }


//TODO PlayerProfileView importieren, alle Properties übertragen und Methoden für Bearbeiten des Profils schreiben
    render() {
        return (
            <PlayerProfileView
                setName={this.setName}
                setSurName={this.setSurname}
                setMail={this.setMail}
                setBrithdate={this.setBirthdate}
                setCity={this.setCity}
                setZIP={this.setZip}
                setStreet={this.setStreet}
                setHouseNbr={this.setHouseNbr}
                setSquad={this.setSquad}
                setSPin={this.setSPin}
                setStatus={this.status}
                setLandlaneNumber={this.setLandlaneNumber}
                setMobileNumber={this.setMobileNumber}
                setNationalAssosiation={this.setNationalAssosiation}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
                onCompare={this.onCompare}
            />
        );
    }
}

export default PlayerProfileController