import React, {Component} from 'react';
import Testbaterie from './Testbaterie';

/**
 * @author Dany Chuissi
 *
 * Controller Klasse für die testBaterie
 *
 * @visibleName TestBaterieController
 */


class TestBaterieController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beweglichtkeit: this.props.beweglichtkeit,
            reaction: this.props.reaction,
            koordination: this.props.koordination,
            sprint: this.props.sprint,
            JandR: this.props.JandR,
            med_ball: this.props.med_ball,
            stws: this.props.stws,
            agilitaet: this.props.agilitaet,
            borg: this.props.borg,
            beep_test: this.props.beep_test,
            hideBearbeiten: false,
            hideSpeichern: true,
            contenEditable: false,
            trigger: false,
            triggerInfo: false,
            Infonummer: '',
            testBaterie: this.props.testBaterie,
        }
    }

    componentdidMount = () => {
        //TODO daten vom Server holen
    }

    postData = () => {
        //TODO Daten zum Server schicken
    }
  /*  setTestbaterie = (e) => {
        this.setState({TestBaterie: e.target.value})
    }*/
    setBeweglichtkeit = (e) => {
        this.setState({beweglichtkeit: e.target.value})
    }
    setReaktion = (e) => {
        this.setState({reaktion: e.target.value})
    }

    setKoordination = (e) => {
        this.setState({koordination: e.target.value})
    }

    setSprint= (e) => {
        this.setState({sprint: e.target.value})
    }
    setJandR = (e) => {
        this.setState({JandR: e.target.value})
    }

    setMedBall = (e) => {
        console.log(e.target.value)
        this.setState({med_ball: e.target.value})
    }
    setStWS = (e) => {
        this.setState({stws: e.target.value})
    }

    setAgilitaet= (e) => {
        this.setState({agilitaet: e.target.value})
    }
    setBorg = (e) => {
        this.setState({borg: e.target.value})
        console.log((this.state.borg))
    }

    setBeepTest = (e) => {
        this.setState({beep_test: e.target.value})
    }

    setHideButton = () => {
        this.setState({
            hideBearbeiten: !this.state.hideBearbeiten,
            hideSpeichern: !this.state.hideSpeichern,
        })
    }
    setContentEditable = (e) => {
        this.setState({contenEditable: e})
    }

    /**
     * Die Daten der TestBaterie werden damit als Editable gesetzt
     */
    onEdit = () => {
        this.setContentEditable(true);
        this.setHideButton();
    }
    /*initDaten = (alteDaten) => {
        console.log(this.state)
        this.setState({
            beweglichtkeit: alteDaten.bew,
            reaction: alteDaten.react,
            koordination: alteDaten.koord,
            sprint: alteDaten.sprint,
            JandR: alteDaten.JnR,
            med_ball: alteDaten.medBall,
            stws: alteDaten.StWS,
            agilitaet: alteDaten.agil,
            borg: alteDaten.BORG,
            beep_test: 12232,
        })
        console.log(this.state)
    }*/
    /**
     * Die Content in der Tabelle werden mit der Methode auf nicht etitable gesetzt
     */
    onSave = () => {
        console.log(this.state.testBaterie)
            fetch("http://172.22.24.243:50593/LD?email="+this.state.testBaterie.email+"&date="+this.state.testBaterie.date, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.testBaterie.email,
                    date: this.state.testBaterie.date,
                    bew: this.state.beweglichtkeit,
                    react: this.state.reaction,
                    koord: this.state.koordination,
                    sprint: this.state.sprint,
                    JnR: this.state.JandR,
                    medBall: this.state.med_ball,
                    StWS: this.state.stws,
                    agil: this.state.agilitaet,
                    BORG: this.state.borg,
                    Bleep: this.state.borg,
                    height:  this.state.testBaterie.height,
                    weight: this.state.testBaterie.weight,
                    bodyfat: this.state.testBaterie.bodyfat,
                    leglength: this.state.testBaterie.leglength,
                    angle: this.state.testBaterie.angle
                })
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
            alert("Testbatterie gespeichert");
        this.setContentEditable(false);
        this.setHideButton();
        }

    displayEvent = (evnt, SyntheticEvent) => {
        this.setState({trigger: true})
    }
    closePopup = () =>{
        this.setState({trigger: false})
    }
    displayEventInfo = ( Infonummer) => {
        this.setState({
            triggerInfo: true,
            Infonummer: Infonummer,
        })
    }
    closePopupInfo = (e) =>{
        this.setState({
            triggerInfo: false,
        })
    }

    /**
     * Die Neue Daten der TestBaterie werden mit der Methode zum server geschickt und gespeichert
     * @param daten
     */
    postTestBaterie = (daten) => {
        console.log(daten);
        if(daten.pruefe_Felder){
            fetch('http://172.22.24.243:50593/LD', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:'jens@testemail3.de',
                    date: daten.date,
                    bew: daten.beweglichtkeit,
                    react: daten.reaction,
                    koord: daten.koordination,
                    sprint: daten.sprint,
                    JnR: daten.JandR,
                    medBall: daten.med_ball,
                    StWS: daten.stws,
                    agil: daten.agilitaet,
                    BORG: daten.borg,
                    Bleep: daten.borg,
                    height: "",
                    weight: "",
                    bodyfat: "",
                    leglength: "",
                    angle: ""
            })
        }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
            alert("Testbatterie gespeichert");
            this.closePopup();
        }
        else{
            if(!daten.pruefe_felder && daten.kommentar.length === 0) {
                alert("Nicht alle Felder wurden ausgefüllt. Bitte Kommentar mit Begründung schreiben");
            }
            else if (!daten.pruefe_felder && daten.kommentar.length > 0) {

                fetch('http://172.22.24.243:50593/LD', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email:'jens@testemail3.de',
                        date: daten.date,
                        bew: daten.beweglichtkeit,
                        react: daten.reaction,
                        koord: daten.koordination,
                        sprint: daten.sprint,
                        JnR: daten.JandR,
                        medBall: daten.med_ball,
                        StWS: daten.stws,
                        agil: daten.agilitaet,
                        BORG: daten.borg,
                        Bleep: daten.borg,
                        height: "",
                        weight: "",
                        bodyfat: "",
                        leglength: "",
                        angle: ""
                    })
                }).then(res => res.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
                alert("Testbatterie gespeichert");
                this.closePopup();
                //alert("Bitte prueden sie die Richtikeit der Eingabe, Nur nuemerische Werte sind erlaubt!")
            }
        }


    }

    render(){
      const {
          beweglichtkeit,
          reaction,
          koordination,
          sprint,
          JandR,
          med_ball,
          stws,
          agilitaet,
          borg,
          beep_test,
          hidde_alte_TestBaterie,
          setHidde_Alte_Testbaterie,
          onEdit,
          onSave,
          testBaterie,
      } = this.props;



        return (
            <Testbaterie beweglichtkeit={this.state.beweglichtkeit}
                        reaction={this.state.reaction}
                        koordination={this.state.koordination}
                        sprint={this.state.sprint}
                        JandR={this.state.JandR}
                        med_ball={this.state.med_ball}
                        stws={this.state.stws}
                        agilitaet={this.state.agilitaet}
                        borg={this.state.borg}
                        beep_test={this.state.beep_test}
                         trigger={this.state.trigger}
                         triggerInfo={this.state.triggerInfo}
                            Infonummer={ this.state.Infonummer}
                         postTestBaterie={this.postTestBaterie}
                        displayEvent={ this.displayEvent}
                         closePopUp={this.closePopup}
                         displayEventInfo={ this.displayEventInfo}
                         closePopUpInfo={this.closePopupInfo}
                        hideBearbeiten={this.state.hideBearbeiten}
                        hideSpeichern={this.state.hideSpeichern}
                         setBeweglichtkeit={this.setBeweglichtkeit}
                        setReaktion={this.setReaktion}
                        setKoordination={this.setKoordination}
                        setSprint={this.setSprint}
                        setJandR={this.setJandR}
                        setMedBall={this.setMedBall}
                        setStWS={this.setStWS}
                        setAgilitaet={this.setAgilitaet}
                        setBorg={this.setBorg}
                        setBeepTest={this.setBeepTest}
                         contentEditable={this.state.contenEditable}
                         onEdit={this.onEdit}
                         onSave={this.onSave}
                         hidde_alte_TestBaterie={hidde_alte_TestBaterie}
                        setHidde_Alte_Testbaterie={setHidde_Alte_Testbaterie}
                         testBaterie={testBaterie}
    />

        );
    }

}
export default TestBaterieController;