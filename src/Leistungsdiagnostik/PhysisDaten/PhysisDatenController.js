import React, {Component} from 'react';
import PhysisDatenView from './PhysisDatenView';


/**
 * @author Dany Chuissi
 *
 * Controller Klasse für die PhysisDatenView
 *
 * @visibleName PhysisDatenController
 */
class PhysisDatenController extends Component{
    state = {
        groesse: '',
        gewicht: '',
        koeperfett: '',
        beinlaenge: '',
        beinwinkel: '',
        player: '',
        hideBearbeiten: false,
        hideSpeichern: true,
        contenEditable: false,
    }

    componentdidMount = () => {
        //TODO daten vom Server holen
    }

    postData = () => {
        //TODO Daten zum Server schicken
    }
    setContentEditable = (e) => {
        this.setState({contenEditable: e})
    }
    setGroesse = (e) => {
        this.setState({groesse: e.target.value})
    }

    setGewicht = (e) => {
        this.setState({gewicht: e.target.value})
    }

    setKoeperfett = (e) => {
        this.setState({koeperfett: e.target.value})
    }
    setBeinlaenge = (e) => {
        this.setState({beinlaenge: e.target.value})
    }

    setBeinwinkel = (e) => {
        this.setState({beinwinkel: e.target.value})
    }
    setplayer = (e) => {
        this.setState({player: e.target.value})
    }

    setHideButton = () => {
        this.setState({
            hideBearbeiten: !this.state.hideBearbeiten,
            hideSpeichern: !this.state.hideSpeichern,
        })
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

    render () {
        const {
            groesse,
            gewicht,
            koeperfett,
            beinlaenge,
            beinwinkel,
        }=this.props;
        return (
            <PhysisDatenView groesse={groesse}
                             gewicht={gewicht}
                             koeperfett={koeperfett}
                             beinlaenge={beinlaenge}
                             beinwinkel={beinwinkel}
                             player ={this.state.player}
                             hideBearbeiten={this.state.hideBearbeiten}
                             hideSpeichern={this.state.hideSpeichern}
                             setGroesse={this.setGroesse}
                             setGewicht={this.setGewicht}
                             setKoerperfett={this.setKoeperfett}
                             setBeinlaenge={this.setBeinlaenge}
                             setBeinwinkel={this.setBeinwinkel}
                             setPlayer={this.setplayer}
                             onEdit={this.onEdit}
                             onSave={this.onSave}
                             contentEditable={this.state.contenEditable}
                             setContenEditable={this.setContentEditable}
            />
        );
    }
}
export default PhysisDatenController