import React, {Component} from 'react';
import DetailsAnsichtView from './DetailsAnsichtView';
import Modal from 'react-modal';


class DetailsAnsichtController extends React.Component{
    constructor(prosp){
        super()
        this.state={
            datum: '',
            schwerpunkt: '',
            dauer: '',
            intensitaet: '',
            uebungen: '',
            mentale_Ersch: '',
            bemerkung: '',
            koerperliche_Ersch: '',
            muskelkarter: '',
            puls: '',
            aenderungswuensche: '',
            schlafdauer: '',
            gewicht: '',
            maximale_herzf: '',
            minimale_herzf: '',
            durschnittliche_herzf: '',
            wegstrecke: '',
            geschwindigkeit: '',

            geaendert_am: '',
            modalOpened: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    }
    render(){

        return(
            <DetailsAnsichtView datum={this.state.datum}
                                schwerpunkt={this.state.schwerpunkt}
                                dauer={this.state.dauer}
                                intensitaet={this.state.intensitaet}
                                uebungen={this.state.uebungen}
                                mentale_Ersch={this.state.mentale_Ersch}
                                bemerkung={this.state.bemerkung}
                                koerperliche_Ersch={this.state.koerperliche_Ersch}
                                muskelkarter={this.state.muskelkarter}
                                puls={this.state.puls}
                                aenderungswuensche={this.state.aenderungswuensche}
                                schlafdauer={this.state.schlafdauer}
                                gewicht={this.state.gewicht}
                                maximale_herzf={this.state.maximale_herzf}
                                minimale_herzf={this.state.minimale_herzf}
                                durschnittliche_herzf={this.state.durschnittliche_herzf}
                                wegstrecke={this.state.wegstrecke}
                                geschwindigkeit={this.state.geschwindigkeit}
                                geaendert_am={this.state.geaendert_am}
                                modalOpened={this.state.modalOpened}
                                toggleModal={this.toggleModal()}
            />
        );
    }

}

export default DetailsAnsichtController;
