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
    constructor(props){
    super(props);
        this.state = {
            groesse: '',
            gewicht: '',
            koeperfett: '',
            beinlaenge: '',
            beinwinkel: '',
            player: '',
            hideBearbeiten: false,
            hideSpeichern: true,
            contenEditable: false,
            physisDaten: '',
        }
    }

    componentDidMount(): void {
        console.log(this.props.email)
        var url = "http://172.22.24.243:50608/physisdata/getData?email="+this.props.email
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        physisDaten: result
                    });
                    console.log(this.state.physisDaten)
                    console.log(url)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error)
                }
            ).then((responseJson) => {
               this.setState({
                   groesse: this.state.physisDaten.groesse,
                   gewicht: this.state.physisDaten.gewicht,
                   koeperfett: this.state.physisDaten.kfa,
                   beinlaenge: this.state.physisDaten.beinlaenge,
                   beinwinkel: this.state.physisDaten.beinwinkel,
               })
        })
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
            fetch('http://172.22.24.243:50608/physisdata/setData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                email: this.props.email,
                groesse: this.state.groesse,
                gewicht: this.state.gewicht,
                beinwinkel: this.state.beinwinkel,
                kfa: this.state.koeperfett,
                beinlaenge: this.state.beinlaenge

                })
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
       this.setContentEditable(false);
        this.setHideButton();
        alert("Neue Werte Gespeichert");
    }

    render () {
        const {
            email,
        }=this.props;
        return (
            <PhysisDatenView groesse={this.state.groesse}
                             gewicht={this.state.gewicht}
                             koeperfett={this.state.koeperfett}
                             beinlaenge={this.state.beinlaenge}
                             beinwinkel={this.state.beinwinkel}
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