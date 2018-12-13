import React, {Component} from 'react';
import './App.css';
import PlayerProfileView from "./PlayerProfile/PlayerProfileView";
import axios from 'axios';

class Controller extends Component {
    openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    state = {
        person: [],
    }

    componentDidMount() {
        axios.get(`http://172.22.24.243:8080/player/email?email=jens@test.de`)
            .then(res => {
                const person = res.data;
                this.setState({person});
                console.log("Test" + this.state.person.name);
            })
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
    nationalAssosiationdropdownhidden: boolean;
    nationalAssosiationhidden: boolean;

    onEdit = () => {
        this.nationalAssosiationhidden = true;
        this.nationalAssosiationdropdownhidden = false;
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

    onCompare = () => {
        //TODO Athleten löschen
    }



    render() {
        this.nationalAssosiationdropdownhidden= true;
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

                name={this.state.person.name}
                surname={this.state.person.surname}
                mail={this.state.person.email}
                mobileNumber={this.state.person.mobilenumber}
                birthdate={this.state.person.dateofbirth}
                city={this.state.person.place}
                zip={this.state.person.postalcode}
                street={this.state.person.streetname}
                houseNbr={this.state.person.housenumber}
                squad={this.state.person.squad}
                sPin={this.state.person.spin}
                status={this.state.person.status}
                landlaneNumber={this.state.person.landlinenumber}
                agegroup={this.state.person.agegroup}
                nationalAssosiation={this.state.person.regonid}
                active ={this.state.person.active}
                nationalAssosiationhidden={this.nationalAssosiationhidden}
                nationalAssosiationdropdownhidden={this.nationalAssosiationdropdownhidden}
            />
        );
    }
}

export default Controller