import React, {Component} from 'react';
import EditProfileView from "./EditProfileView";


/**
 * @author Daniela
 * This file holds the foldlogic of the editable Profile Data Table. It sends Data to the Microservice, if it was changed. It also manages, which cells are editable, based on the user role.
 * @visibleName EditPlayerProfileController
 */
class EditPlayerProfileController extends Component {
//TODO EditProfileView importieren, alle Properties übertragen und Methoden für den Formularübergabe an Microservice schreiben

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
        landlaneNumber:'',
        nationalAssosiation:'',
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

    render() {
        return (
            <EditProfileView
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
                onConfirm={this.confirmChanges}
            />


        );
    }
}

export default EditPlayerProfileController