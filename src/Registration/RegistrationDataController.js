import React, {Component} from 'react';
import RegistrationDataView from "./RegistrationDataView";


/**
 * @author Dany Chuissi
 *
 * Controller Klasse der Registration Seite
 * @visibleName ResetLoginDataController
 */

class RegistrationDataController extends Component{
    constructor() {
        super();
        this.state = {
            showAlert: false,
            vorname: '',
            nachname: '',
            gDatum: '',
            strasse: '',
            Hnummer: '',
            plz: '',
            ort: '',
            festnetzNummer: '',
            handyNummer: '',
        }
    }

    setVorname= (e) => {
        this.setState({vorname: e.target.value})
    };
    setNachname= (e) => {
        this.setState({nachname: e.target.value})
    };
    setGDatum = (e) => {
        this.setState({gDatum: e.target.value})
    };
    setStrasse= (e) => {
        this.setState({strasse: e.target.value})
    };
    setHnummer= (e) => {
        this.setState({Hnummer: e.target.value})
    };
    setPlz = (e) => {
        this.setState({plz: e.target.value})
    };
    setOrt = (e) => {
        this.setState({ort: e.target.value})
    };
    setFestnetznummer = (e) => {
        this.setState({festnetzNummer: e.target.value})
    };
    setHandynummer = (e) => {
        this.setState({handyNummer: e.target.value})
    };

    /**
     * Die Methose zeigt ein Alert falls nötig
     */
    submitData = () => {
        let erg = this.showMessage();
        if(this.state.showAlert){
            alert(erg);
        }
    };

    showMessage() {

    }


    componentDidMount(){
        this.submitData();
    }

    render() {
        return (
            <RegistrationDataView
                                vorname={this.state.vorname}
                                nachname={this.state.nachname}
                                gDatum={this.state.gDatum}
                                strasse={this.state.strasse}
                                Hnummer={this.state.Hnummer}
                                plz={this.state.plz}
                                ort={this.state.ort}
                                festnetzNummer={this.state.festnetzNummer}
                                handyNummer={this.state.handyNummer}

                                setVorname={this.setVorname}
                                setNachname={this.setNachname}
                                setGdatum={this.setGDatum}
                                setStrasse={this.setStrasse}
                                setHnummer={this.setHnummer}
                                setPlz={this.setPlz}
                                setOrt={this.setOrt}
                                setFestnummer={this.setFestnetznummer}
                                setHandynummer={this.setHandynummer}
                                submitData={this.submitData}
            />
        );
    }






}

export default RegistrationDataController;