import React, {Component, Fragment} from 'react';
import HeaderProfilView from "../../UI/HeaderProfilView";
import {showDropdown_Header} from "../../UI/HeaderProfilController";
import HeaderProfileView from "../../UI/HeaderProfilView";
import Confirmbutton from "../../UI/Confirmbutton";
import PhisisDatenKurve from "./PhisisDatenKurve";
import KurvenDiagramm from "../KurvenDiagramm";
import SpineDiagramm from "../SpineDiagramm";
import BalkenDiagramm from "../BalkenDiagramm";
import PhisisDatenBalken from "./PhisisDatenBalken";



var a1 = {
    name: "Paul",
    vorname: "Müller",
    email: "email1",
};
var a2 = {
    name: "Sabrina",
    vorname: "Saul",
    email: "email2",
};
var a3 = {
    name: "Kristian",
    vorname: "Volmer",
    email: "email3",
};
//
var av = {
    name: "Athlet wählen",
    email: "",
};

/**
 * @author Dany Chuissi
 *
 * Klasse für die VergleichDaten Seite
 * Damit können bis zu 5 Athleten (TestBaterie-Daten und Physis-Daten) vergleichen werden
 *
 * @visibleName VergleichDaten
 */
class VergleichDaten extends Component{
    constructor() {
        super();
        this.state = {
            players: [ av,a1, a2, a3],
            physisDaten: [PDaten1, PDaten2, PDaten3],
            physisDaten_zu_vergleichen: [],
            athlet_zu_vergl: [],
            hideliste: true,
            index: 0,
            trigger : false,
            testArrayDatum: [datum1, datum2, datum3],

        };
        this.removeAthlet_zu_vergl = this.removeAthlet_zu_vergl.bind(this);
        this.addAthlet_zu_vergl = this.addAthlet_zu_vergl.bind(this);
    }

    displayKurve = () => {
        this.setState({trigger: true})
    }
    removeKurve = () => {
        this.setState({trigger: false})
    }

    /**
     * Die Methode prüft ob der User mindestens 2 Athleten gewählt hat
     * @param evnt
     * @param SyntheticEvent
     */
    displayEvent = (evnt, SyntheticEvent) => {
        if(this.state.physisDaten_zu_vergleichen.length > 1 ){
            this.setState({trigger: true})
        }
        else{
            alert("mindestens 2 Althleten wählen")
        }

    }
    /**
     * Die Methode prüft ob der gewählte Athlet schon in der Liste der Athleten zu vergleichen schon ist
     * @param email
     * @returns {boolean} gibt true züruck falls ja
     */
    pruefeVorhanden = (email) =>{
        let erg = false;
        this.state.athlet_zu_vergl.map( (player) => {
            if(player.email === email){
                erg = true
            }
        });
        return erg;
    }
    /**
     * Die Methode gibt den Index der Athlet der von der Liste (Athlet zu vergleichen ) gelöcht werden muss
     * @param email
     * @returns {number}
     */
    getIndex_Athlet_zu_remove_testbaterie = email => {
        let erg = -1;
        this.state.athlet_zu_vergl.map( (player) => {
            if(player.email === email){
                erg = this.state.athlet_zu_vergl.indexOf(player)
            }
        });
        return erg;
    }

    /**
     * Die Methode gibt den Index der Athlet der von der Liste (Athlet zu vergleichen ) gelöcht werden muss
     * @param email
     * @returns {number}
     */
    getIndex_PhysisDaten_zu_remove_testbaterie = email => {
        let erg = -1;
        this.state.physisDaten_zu_vergleichen.map( (player) => {
            if(player.email === email){
                erg = this.state.physisDaten_zu_vergleichen.indexOf(player)
            }
        });
        return erg;
    }

    /**
     * die Methode gibt alle test daten vom selected Athleten züruck
     * @param email
     * @returns {*}
     */
    getTestdatenvonSelectetAthlet = (email) => {
        let erg = null;
        this.state.testArrayDatum.map( (daten) => {
            if(daten.email === email){
                erg = daten
            }
        });
        return erg;
    }
    /**
     * ein Athlet der schon selektiert wurde wird mit dieser Methose markiert
     * @param e
     */
    setSelected = (e) =>{
        if( e.target.selectedIndex !== 0)
        {
            this.setState({
                selectet: e.target.value,
                index: e.target.selectedIndex
            });
            let index = e.target.selectedIndex;
            let ke = e.target.options[index].getAttribute('value');
        }
    }
    closePopup = () =>{
        this.setState({trigger: false})
    }
    /**
     * löscht der Ahtlet im Parameter von Der Liste (Athlet zu vergleichen)
     * @param email
     */
    onclicked = (email) => {
        this.removeAthlet_zu_vergl(email);
        this.setState({trigger: false})
    }
    getPlayerPhysisDaten = (email) => {
        let erg = null;
        this.state.physisDaten.map( (daten) => {
            if(daten.email === email){
                erg = daten
            }
        });
        return erg;
    }

    /**
     * Add Athlet in der Liste (Athlet zu vergleichen)
     */
    addAthlet_zu_vergl (){
        if(this.state.index !== 0) {
            let pname = this.state.players[this.state.index].name;
            let pvorname = this.state.players[this.state.index].vorname + '  ';
            let pemail = this.state.players[this.state.index].email;
            let daten = this.getTestdatenvonSelectetAthlet(pemail)
            if (daten != null) {
            daten.name = pvorname + ' ' + pname;

            if (this.pruefeVorhanden(pemail) !== true) {
                let PhysisDaten = this.getPlayerPhysisDaten(pemail);
                PhysisDaten.name = pvorname + ' ' + pname;
                this.setState({
                    athlet_zu_vergl: [...this.state.athlet_zu_vergl, daten],
                    physisDaten_zu_vergleichen: [...this.state.physisDaten_zu_vergleichen, PhysisDaten],
                    hideliste: false,
                })
            } else {
                alert("Athlet schon hinzufügt");
            }
            }
        }else{
            alert("Bitte Athlet wählen");
        }
    };

    /**
     * remove Athlet von der Liste (Athlet zu vergleichen)
     * @param e
     */
    removeAthlet_zu_vergl(e){

        if(typeof e !== "undefined") {
            var array = [...this.state.athlet_zu_vergl];
            var array_PhysisDaten = [... this.state.physisDaten_zu_vergleichen];
            var index = this.getIndex_Athlet_zu_remove_testbaterie(e);
            var index_PhysisDaten  = this.getIndex_PhysisDaten_zu_remove_testbaterie(e);
            if (index !== -1 && index_PhysisDaten !== -1) {
                array.splice(index, 1);
                array_PhysisDaten.splice(index_PhysisDaten, 1);
                this.setState({
                    athlet_zu_vergl: array,
                    physisDaten_zu_vergleichen: array_PhysisDaten,
                });
            }

        }
    };
       render(){

        let kurve = [];
           let testKurve =  <div style={{paddingBottom: '20px'}}>
                                   <div className="head_athletvergleich">Physis Daten </div>
                                   <PhisisDatenBalken attribute={this.state.physisDaten_zu_vergleichen}/>
                            </div> ;
        let physiskurve = <div style={{marginTop: '30px'}}>
                                <div className="head_athletvergleich">TestBaterie Daten</div>
                                <BalkenDiagramm attribute={this.state.athlet_zu_vergl}/>
                          </div> ;


        kurve = [... kurve, testKurve];
        kurve = [... kurve, physiskurve];




           const selectedListItems = this.state.athlet_zu_vergl.map((d) =>
               <li onClick={this.onclicked.bind(this, d.email)} key={d.email} value={d.name}>
                   {d.name }{ '      '}
                   <label style={{color: 'red'}}> X</label>
               </li>);
           let options =this.state.players.map((player) =>
               <option key={player.email} data-key={player.mail} value={player.email}>{player.name} {player.vorname} </option>
           );

        return (
           <div>
                <HeaderProfileView email = {"test"}  myFunction={showDropdown_Header} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div>
                    <div>
                        <div className="head_athletvergleich">
                            <label>Athlet-Vergleich</label>
                        </div>

                        <div className="athlet_vergleich_box">

                            <select  onChange={this.setSelected}>
                                {options}
                            </select>
                            <Confirmbutton onClick={this.addAthlet_zu_vergl} myStyle= {{padding: '5px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}} >
                                add
                            </Confirmbutton>
                            <Confirmbutton onClick={this.displayEvent}  myStyle= {{padding: '5px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}} >
                                Athlete vergleichen
                            </Confirmbutton>
                        </div>
                        <div className="selected_item">
                            <div>
                                <div  style={{fontSize: '15px'}}  hidden={this.state.hideliste} id='selectedItem'>
                                    {selectedListItems}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vergleich">
                        {this.state.trigger?
                                kurve: "Bitte 2 bis 5 Athleten auswählen"}
                    </div>
                </div>
           </div>

        );
    }
}
export default VergleichDaten;

var datum1 = {
    beweglichtkeit: 13,
    reaction: 17,
    koordination: 2,
    sprint: 5.12,
    JandR: 31.5,
    med_ball: 5.35,
    stws: 206,
    agilitaet:17,
    borg: 20,
    beep_test: 11.20,
    name: '07-01-2019',
    email: 'email1',
};
var datum2 = {
    beweglichtkeit: 19,
    reaction: 14,
    koordination: 5,
    sprint: 8.12,
    JandR: 45.5,
    med_ball: 12.35,
    stws: 106,
    agilitaet:23,
    borg: 14,
    beep_test: 18.20,
    name: '24-12-2018',
    email: 'email2',
};
var datum3 = {
    beweglichtkeit: 10,
    reaction: 24,
    koordination: 1,
    sprint: 2.12,
    JandR: 20.5,
    med_ball: 15.35,
    stws: 156,
    agilitaet:27,
    borg: 29,
    beep_test: 21.20,
    name: '20-11-2018',
    email: 'email3'
};

var PDaten1 = {
    email: 'email1',
    alter: 29,
    groesse: 160,
    gewicht: 0,
    koerperfett: 6.25,
    beinlaenge: 60,
    beinwinkel: 30,
}
var PDaten2 = {
    email: 'email2',
    alter: 16,
    groesse: 180,
    gewicht: 60,
    koerperfett: 8.75,
    beinlaenge: 70,
    beinwinkel: 20,
}
var PDaten3 = {
    email: 'email3',
    alter: 19,
    groesse: 150,
    gewicht: 82,
    koerperfett: 12.15,
    beinlaenge: 55,
    beinwinkel: 40,
}