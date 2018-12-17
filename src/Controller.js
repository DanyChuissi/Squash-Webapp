import React, {Component} from 'react';
import './App.css';
import PlayerProfileView from "./PlayerProfile/PlayerProfileView";
import axios from 'axios';
import LoginController from "./Login/LoginController";
import LoginView from "./Login/LoginView";
import PlayerListView from "./PlayerList/PlayerListView";


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
        /** Viewswitch**/
        loginCase: 0,
        nutzerbedingungenCase: 3,
        spielerListCase: 4,
        spielerProfilCase: 5,
        rechtevergabeCase: 6,
        UserEinladenCase: 7,
        NotificationCase: 8,

        showComponent: 0,
        /**User Data**/
        userMail: '',
        password: '',
        /**User Data End**/
        /**Spezific Player**/
        person: [],
        nationalAssosiationdropdownhidden: true,
        nationalAssosiationhidden: false,
        edithidden: false,
        savehidden: true,
        /**Spezific Player Ende**/

        /**PlayerList**/
        players: [],
        trainer: '1',
        suchBegriff: '',
        /**PlayerList End**/

        /**PlayerProfile**/
        playerEmail:'',
    }


    /**Spezific Player**/
    loadPlayerDataView(email) {
        axios.get(`http://172.22.24.243:8080/player/email?email=` + email)
            .then(res => {
                const person = res.data;
                this.setState({person});
                console.log("Test" + this.state.person.active);
            })
    }

    setStatus = (e) => {
        alert("Status geändert")
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

    onEdit = () => {
        this.setState({
            nationalAssosiationhidden: true,
            nationalAssosiationdropdownhidden: false,
            savehidden: false,
            edithidden: true
        })
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
    onSave = () => {
        this.setState({
            nationalAssosiationhidden: false,
            nationalAssosiationdropdownhidden: true,
            savehidden: true,
            edithidden: false
        })
        axios.put("http://localhost:8080/player?email=" + this.state.person.email, this.state.person)
        var editable_elements = document.querySelectorAll("[contentEditable=true]");
        editable_elements[0].setAttribute("contentEditable", false);
        editable_elements[1].setAttribute("contentEditable", false);
        editable_elements[2].setAttribute("contentEditable", false);
        editable_elements[3].setAttribute("contentEditable", false);
        editable_elements[4].setAttribute("contentEditable", false);
        editable_elements[5].setAttribute("contentEditable", false);
        editable_elements[6].setAttribute("contentEditable", false);
        editable_elements[7].setAttribute("contentEditable", false);
        editable_elements[8].setAttribute("contentEditable", false);
        editable_elements[9].setAttribute("contentEditable", false);
        editable_elements[10].setAttribute("contentEditable", false);
        editable_elements[11].setAttribute("contentEditable", false);
        editable_elements[12].setAttribute("contentEditable", false);

    }

    /**Login**/

    submitLogin = () => {
        if (this.state.userMail === "u" && this.state.password === "3") {
            this.setState({showComponent: this.state.spielerListCase})
            fetch("http://172.22.24.243:8080/player/trainernr?trainer=" + this.state.trainer)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            players: result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        } else alert("Falsche Benutzerdaten eingegeben");
    }

    setUserMail = (e) => {
        this.setState({userMail: e.target.value})

    }

    setPassword = (e) => {
        this.setState({password: e.target.value})

    }

    /**Login End**/
    /**PlayerList **/
    setSuchBegriff = (e) => {
        this.setState({suchBegriff: e.target.value});
    }
    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onDoubleClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                this.setState({rowInfos: rowInfo})
                console.log('Index Row', rowInfo.index)
                console.log('Index email', rowInfo.original.email)
                var test= rowInfo.original.email;
                this.setState({playerEmail: test});
                this.loadPlayerDataView(rowInfo.original.email);
                this.setState({showComponent: this.state.spielerProfilCase})
            }
        }
    }
    /**PlayerListEnd**/

    /**Trainingsdiary **/

    /**Trainingsdiary End **/
    render() {

        return (
            this.state.showComponent === this.state.loginCase ?
                < LoginController
                    submitLogin={this.submitLogin}
                    email={this.state.userMail}
                    password={this.state.password}
                    setName={this.setUserMail}
                    setPassword={this.setPassword}
                /> :
                this.state.showComponent === this.state.spielerListCase ?
                    <PlayerListView
                        players={this.state.players}
                        onRowClick={this.onRowClick} email={this.state.userMail}/>
                    :
                    this.state.showComponent === this.state.spielerProfilCase ?
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
                            onSave={this.onSave}
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
                            active={this.state.person.active}
                            nationalAssosiationhidden={this.state.nationalAssosiationhidden}
                            nationalAssosiationdropdownhidden={this.state.nationalAssosiationdropdownhidden}
                            edithidden={this.state.edithidden}
                            savehidden={this.state.savehidden}
                            emailUser={this.state.userMail}
                        />
                        :
                        <h1>lala</h1>
        )
            ;
    }
}

export default Controller