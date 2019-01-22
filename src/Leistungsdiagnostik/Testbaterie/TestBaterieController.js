import React, {Component} from 'react';
import Testbaterie from './Testbaterie';




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

    onEdit = () => {
        this.setContentEditable(true);
        this.setHideButton();
    }

    onSave = () => {
        this.setContentEditable(false);
        this.setHideButton();
        alert("Neue Werte Gespeichert");
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
    postTestBaterie = () => {
            alert("TestBaterie gespeichert");
            this.closePopup();
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
          beep_test
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

    />

        );
    }

}
export default TestBaterieController;