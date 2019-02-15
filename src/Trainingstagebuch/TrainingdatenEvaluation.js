import React, {Component, Fragment} from 'react';

/**
 * @author Dany Chuissi
 *
 * Die Klasse definiert eine Tabelle mit einem gesamt Auswertung der Trainingsdaten
 */
class TrainingdatenEvaluation extends Component{
       state = {
           overall_Evaluation : '',
           summe_Ergebnisse: '',
       }

    /**
     * Die Methode nimmt die Daten des Gesamt Auswertung im Server und Set die State Variable.
     */
    componentWillMount(): void {
           // TODO Daten vom Server fetchen
           this.setState({
               overall_Evaluation:  auswertung,
           })

       }

       berechneGesamt = () => {
        let tmpErgebniss = {
            summeDauer: '',
            summeTage: '',
            summeHz: '',
        };
       }

       render(){
        return (
            <Fragment>
                <div  className="table_Auswertung_css">
                    <table>
                        <tbody className= "tbody_leistung_Auswertun">
                        <tr id={"table_css"}>
                            <th className="testName_auswertung">

                            </th>
                            <td className="evaluationClass">
                                U15
                            </td>
                            <td className="evaluationClass">
                                U17
                            </td>
                            <td className="evaluationClass">
                                U19
                            </td>
                            <td className="evaluationClass">
                                Damen
                            </td>
                            <td className="evaluationClass">
                                Herren
                            </td>
                            <td className="evaluationClass">
                                Gesamt
                            </td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName_auswertung">
                                durchschnittliche Dauer
                            </th>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_dauer_U15}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_dauer_U17}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_dauer_U19}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_dauer_damen}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_dauer_herren}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.summeDauer}</td>
                        </tr>

                        <tr id={"table_css"}>
                            <th className="testName_auswertung">
                                Anzahl der Trainingstage
                            </th>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.anzahlTage_U15}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.anzahlTage_U17}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.anzahlTage_U19}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.anzahlTage_damen}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.anzahlTage_herren}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.summeTage}</td>
                        </tr>

                        <tr id={"table_css"}>
                            <th className="testName_auswertung">
                                durchschnittliche Herzfrequenz
                            </th>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_Hz_U15}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_Hz_U17}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_Hz_U19}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_Hz_damen}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.dursch_Hz_herren}</td>
                            <td  placeholder={"No Data Found"} >{this.state.overall_Evaluation.summe_Hz}</td>
                        </tr>






                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
       }
}

export default TrainingdatenEvaluation;


/**
 * Test Daten
 *
 * @type {{dursch_Hz_U17: string, dursch_dauer_herren: string, dursch_Hz_U15: string, anzahlTage_U15: string, dursch_dauer_U15: string, anzahlTage_U17: string, dursch_dauer_U17: string, dursch_Hz_damen: string, dursch_dauer_U19: string, dursch_Hz_U19: string, dursch_Hz_herren: string, anzahlTage_damen: string, anzahlTage_U19: string, anzahlTage_herren: string, dursch_dauer_damen: string}}
 */
let auswertung = {
    dursch_dauer_U15: '230',
    anzahlTage_U15: '24',
    dursch_Hz_U15: '80',

    dursch_dauer_U17: '300',
    anzahlTage_U17: '23',
    dursch_Hz_U17: '90',

    dursch_dauer_U19: '120',
    anzahlTage_U19: '34',
    dursch_Hz_U19: '57',

    dursch_dauer_damen: '333',
    anzahlTage_damen: '44',
    dursch_Hz_damen: '78',

    dursch_dauer_herren: '400',
    anzahlTage_herren: '50',
    dursch_Hz_herren: '100',

    summeDauer: '345',
    summeTage: '29',
    summe_Hz: '81',
};