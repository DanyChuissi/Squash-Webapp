import React, {Component} from 'react';
import '../App.css';
import PlayerProfileView from "./PlayerProfileView";
import axios from "axios";

/**
 * @author Daniela
 * This View contains the foldlogic of the personal Informations of an Athlete. They can be updatet and send to the server.
 * @visibleName PlayerProfileController
 */
class PlayerProfileController extends Component {

    constructor({mail}) {
        super();
        this.state = {
            mail
        };
    }


    state = {
        email: '',
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
        nationalAssosiation: 0,
        active: '',

        edithidden: false,
        savehidden: true,
    }

    getData = () => {
        //TODO JSON Data ziehen
    }


    setName = (e) => {
        this.setState({name: e.target.value})
        console.log(this.state.name);
    }

    setSurname = (e) => {
        this.setState({surname: e.target.value})
        console.log(this.state.surname);

    }

    setMail = (e) => {
        this.setState({mail: e.target.value})
    }
    setBirthdate = (e) => {
        this.setState({birthdate: e.target.value})
        console.log(this.state.birthdate);

    }


    setZip = (e) => {
        this.setState({zip: e.target.value})
        console.log(this.state.zip);

    }
    setCity = (e) => {
        this.setState({city: e.target.value})
        console.log(this.state.city);

    }


    setStreet = (e) => {
        this.setState({street: e.target.value})
    }

    setHouseNbr = (e) => {
        this.setState({houseNbr: e.target.value})
        console.log(this.state.houseNbr)
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
        console.log(this.state.nationalAssosiation)
    }

    componentDidMount() {
        console.log(this.props.match.params.mail)
        axios.get(`http://172.22.24.243:50594/player/email?email=` + this.props.match.params.mail)
            .then(res => {
                const person = res.data;
                this.setState({
                    mail: person.email,
                    name: person.name,
                    surname: person.surname,
                    birthdate: person.dateofbirth,
                    city: person.place,
                    zip: person.postalcode,
                    street: person.streetname,
                    houseNbr: person.housenumber,
                    squad: person.squad,
                    sPin: person.spin,
                    mobileNumber: person.mobilenumber,
                    landlaneNumber: person.landlinenumber,
                    nationalAssosiation: person.regonid,
                    active: person.active,

                    edithidden: false,
                    savehidden: true,
                })


            })
    }


    confirmChanges = (name, surname, dateofbirth, email, mobilenum, landlinenum, street, houseNr, zip, city, spin, squad, active, regionid) => {
        console.log(houseNr)
        console.log(this.props.match.params.mail)
        fetch('http://172.22.24.243:50594/player?email=' + this.props.match.params.mail, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(
                {
                    name: name,
                    surname: surname,
                    dateofbirth: dateofbirth,
                    email: this.props.match.params.mail,
                    mobilenumber: mobilenum,
                    landlinenumber: landlinenum,
                    streetname: street,
                    housenumber: houseNr,
                    postalcode: zip,
                    place: city,
                    spin: spin,
                    squad: squad,
                    active: active,
                    regonid: regionid
                }
            ), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

        this.setState({
            edithidden: false,
            savehidden: true
        })
    }

    onEdit = () => {
        this.setState({
            edithidden: true,
            savehidden: false
        })

    }

    onDelete = () => {
        //TODO Benutzer löschen
    }

    onCompare = () => {
        //TODO Athleten löschen
    }

    goToTrainingsdiary(email) {
        console.log(email)
        window.location='/trainingsdiary/'+email
    }
    goToJTP(email){
        console.log(email)
        window.location='/jTP/'+email
    }

    goToLeistungsdiagnostik(email){
        console.log(email)
        window.location='/leistungsdiagnostik/'+email
    }

    render() {
        return (
            <PlayerProfileView
                name={this.state.name}
                surname={this.state.surname}
                mail={this.state.mail}
                birthdate={this.state.birthdate}
                city={this.state.city}
                zip={this.state.zip}
                street={this.state.street}
                houseNbr={this.state.houseNbr}
                squad={this.state.squad}
                sPin={this.state.sPin}
                status={this.state.status}
                mobileNumber={this.state.mobileNumber}
                landlaneNumber={this.state.landlaneNumber}
                nationalAssosiation={this.state.nationalAssosiation}
                active={this.state.active}

                savehidden={this.state.savehidden}
                edithidden={this.state.edithidden}

                emailUser={this.state.name}
                setName={this.setName}
                setSurName={this.setSurname}
                setMail={this.setMail}
                setBirthdate={this.setBirthdate}
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

                onSave={() => this.confirmChanges(this.state.name, this.state.surname, this.state.birthdate, this.state.email, this.state.mobileNumber, this.state.landlaneNumber, this.state.street, this.state.houseNbr, this.state.zip, this.state.city, this.state.spin, this.state.squad, this.state.active, this.state.nationalAssosiation)}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
                onCompare={this.onCompare}

                goToJTP={()=> this.goToJTP(this.state.email)}
                goToTrainingsdiary={() => this.goToTrainingsdiary(this.state.email)}
                goToLeistungsdiagnostik={()=>this.goToLeistungsdiagnostik(this.state.email)}
            />
        );
    }
}

export default PlayerProfileController