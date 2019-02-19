import React, {Component, Fragment} from 'react';
import './NewTestBaterie.css';
import Label from "../../UI/Label";
import Input from "../../UI/Input";
import Confirmbutton from "../../UI/Confirmbutton";


/**
 *
 * @author Dany Chuissi
 *
 * Klasse für die Eingabe einer Neuen Testbateie Daten
 *
 * @visibleName NewTestBaterie
 */
class NewTestBaterieView extends Component {
    state = {
        beweglichtkeit: '',
        reaction: '',
        koordination: '',
        sprint: '',
        JandR: '',
        med_ball: '',
        stws: '',
        agilitaet: '',
        borg: '',
        beep_test: '',
        date: new Date().toLocaleDateString(),
        trigger: false,
        pruefe_Felder: false,
        kommentar: '',
    }

    /**
     * Kommentar für alle setMethode der Klasse.
     * die SetMethode pruefen zuerst  die Richtigkeit der eingegeben Werte und setzt die State Attribute nur wenn die Werte
     * richtig sind. Gleichzeitig wird  den Attribute pruefe_numerisch um 1 erhoert (damit wird die Anzahl der richtigen Felder gezaehlt
     * @param e
     */
    setBeweglichtkeit = (e) => {
        if(e.target.validity.valid) {
            this.setState({
                beweglichtkeit: e.target.value,
            })
            this.pruefeFelder();
        }

    }

    setReaction = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            reaction: e.target.value,
        })
        this.pruefeFelder();
        }
    }

    setKommentar = (e) => {
        this.setState({
            kommentar: e.target.value,
        })
    }
    setDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    setKoordination = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            koordination: e.target.value,
        })
        this.pruefeFelder();
        }
    }

    setSprint = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            sprint: e.target.value,
        })
        this.pruefeFelder();
        }
    }
    setJandR = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            JandR: e.target.value,
        })
        this.pruefeFelder();
        }
    }

    setMedBall = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            med_ball: e.target.value,
        })
        this.pruefeFelder();
        }
    }
    setStWS = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            stws: e.target.value,
        })
        this.pruefeFelder();
        }
    }

    setAgilitaet = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            agilitaet: e.target.value,
        })
        this.pruefeFelder();
        }
    }
    setBorg = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            borg: e.target.value,
        })
        this.pruefeFelder();
        }
    }

    setBeepTest = (e) => {
        if(e.target.validity.valid) {
        this.setState({
            beep_test: e.target.value,
        })
        this.pruefeFelder();
        }
    }


    /**
     * Die Methode prüft ob alle Feldern ausgefüllt sing
     */
    pruefeFelder = () => {
        if (this.state.beweglichtkeit !== '' && this.state.reaction !== '' && this.state.koordination !== '' && this.state.sprint !== ''
            && this.state.JandR !== '' && this.state.med_ball !== '' && this.state.stws !== '' && this.state.agilitaet !== ''
            && this.state.borg !== '' && this.state.beep_test !== '') {
            this.setState({
                pruefe_Felder: true,
            })
            console.log(this.state.pruefe_Felder)

        }

    }


    render() {
        const {
            athlet,
            closePopUp,
            postTestBaterie
        } = this.props;
        let datum = this.state.date;



            return (
                <Fragment>
                    <div className="boxRR_newtestbaterie">
                        <Label> Neue TestBaterie </Label>
                        <div>
                            <Label>Datum</Label>
                            <Label>{datum}</Label>
                        </div>

                        <div className="main_newLeistung">

                            <div className="box_newtestbaterie">
                                <Label>Beweglichtkeit: </Label>
                                <Input type='number' placeholder={"Beweglichkeit"} value={this.state.beweglichtkeit}
                                       onChange={this.setBeweglichtkeit}/>
                                <Label>Reaction: </Label>
                                <Input type='number' placeholder={"Reaktion"} value={this.state.reaction}
                                       onChange={this.setReaction}/>
                                <Label> Koordination: </Label>
                                <Input type='number' placeholder={"Koordination"} value={this.state.koordination}
                                       onChange={this.setKoordination}/>
                                <Label>Sprint: </Label>
                                <Input type='number' placeholder={"Sprint"} value={this.state.sprint} onChange={this.setSprint}/>
                                <Label>J and R: </Label>
                                <Input type='number' placeholder={"J and R"} value={this.state.JandR} onChange={this.setJandR}/>
                            </div>
                            <div className="box_newtestbaterie">
                                <Label>Med_Ball: </Label>
                                <Input type='number' placeholder={"Med Ball"} value={this.state.med_ball} onChange={this.setMedBall}/>
                                <Label>StWS:</Label>
                                <Input type='number' placeholder={"StWS"} value={this.state.stws} onChange={this.setStWS}/>
                                <Label>Agitlität: </Label>
                                <Input type='number' placeholder={"Agilität"} value={this.state.agilitaet}
                                       onChange={this.setAgilitaet}/>
                                <Label>BORG Test: </Label>
                                <Input type='number' placeholder={"BORG Test"} value={this.state.borg} onChange={this.setBorg}/>
                                <Label>Beep Test: </Label>
                                <Input type='number' placeholder={"Beep Test"} value={this.state.beep_test}
                                       onChange={this.setBeepTest}/>
                            </div>
                        </div>
                        <textarea onChange={this.setKommentar} placeholder=" Kommentar eingeben" className="kommentar_newleistung">

                      </textarea>
                        <div className="newTestbaterie_button">
                            <Confirmbutton onClick={() => postTestBaterie(this.state)} myStyle={{
                                padding: '9px',
                                marginTop: '8px',
                                paddingRight: '15px',
                                paddingLeft: '15px'
                            }}>
                                Speichern
                            </Confirmbutton>
                            <Confirmbutton onClick={closePopUp} myStyle={{
                                padding: '9px',
                                marginTop: '8px',
                                paddingRight: '15px',
                                paddingLeft: '15px'
                            }}>
                                Abbrechen
                            </Confirmbutton>

                        </div>
                    </div>
                </Fragment>
            );
        }
    }

    const
    myStyle = {
        padding: '5px', marginTop: '4px', paddingRight: '15px', paddingLeft: '15px'
    }

export default NewTestBaterieView