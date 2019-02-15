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
    state={
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
        hideBearbeiten: false,
        hideSpeichern: true,
        contenEditable: false,
        trigger : false,
        triggerInfo: false,
        Infonummer: '',
    }

    componentdidMount = () => {
        //TODO daten vom Server holen
    }

    postData = () => {
        //TODO Daten zum Server schicken
    }
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
    /**
     * Die Content in der Tabelle werden mit der Methode auf nicht etitable gesetzt
     */
    onSave = () => {
        this.setContentEditable(false);
        this.setHideButton();
        alert("Neue Werte gespeichert");
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
        console.log(daten)
        if(daten.pruefe_felder){
            fetch('https://172.22.24.243:50593/LD', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:'jens@testemail3.de',
                    date: daten.date,
                    beweglichtkeit: daten.beweglichtkeit,
                    reaction: daten.reaction,
                    koordination: daten.koordination,
                    sprint: daten.sprint,
                    JandR: daten.JandR,
                    med_ball: daten.med_ball,
                    stws: daten.stws,
                    agilitaet: daten.agilitaet,
                    borg: daten.borg,
                    beep_test: daten.borg,
            })
        })
            alert("Testbatterie gespeichert");
            this.closePopup();
        }
        else{
            if(!daten.pruefe_felder && daten.kommentar.length === 0) {
                alert("Nicht alle Felder wurden ausgefüllt. Bitte Kommentar mit Begründung schreiben");
            }
            else if (!daten.pruefe_felder && daten.kommentar.length > 0) {
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
      } = this.props;



        return (
            <Testbaterie beweglichtkeit={beweglichtkeit}
                        reaction={reaction}
                        koordination={koordination}
                        sprint={sprint}
                        JandR={JandR}
                        med_ball={med_ball}
                        stws={stws}
                        agilitaet={agilitaet}
                        borg={borg}
                        beep_test={beep_test}
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

    />

        );
    }

}
export default TestBaterieController;