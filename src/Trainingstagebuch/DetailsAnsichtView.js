import React from 'react'
import "./Details.css";
import Label from "../UI/Label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import ReactTable from "react-table";

/**
 * @author Dany
 *  Die Klasse definiert die Tabelle für mit alle details über Trainingsdaten des Spieler
 *  sowie eien Kurve Diagramm mit der Änderung der Herzfrequenz
 * @visibleName DetailsAnsichtView
 */

class DetailsAnsichtView extends React.Component {

    render() {
        const {
            datum,
            schwerpunkt,
            dauer,
            intensitaet,
            uebungen,
            mentale_Ersch,
            bemerkung,
            koerperliche_Ersch,
            muskelkarter,
            puls,
            aenderungswuensche,
            schlafdauer,
            gewicht,
            maximale_herzf,
            minimale_herzf,
            durschnittliche_herzf,
            wegstrecke,
            geschwindigkeit,
            geaendert_am,


        } = this.props;

        const graph_data = [
            {name: 'Zp 1',  Herzfrequenz: 90},
            {name: 'Zp 2',  Herzfrequenz: 91},
            {name: 'Zp 3',  Herzfrequenz: 93},
            {name: 'Zp 3',  Herzfrequenz: 86},
            {name: 'Zp 4',  Herzfrequenz: 100},
            {name: 'Zp 5',  Herzfrequenz: 110},
            {name: 'Zp 6',  Herzfrequenz: 130},
            {name: 'Zp 7',  Herzfrequenz: 180},
            {name: 'Zp 8',  Herzfrequenz: 150},
            {name: 'Zp 9',  Herzfrequenz: 140},
            {name: 'Zp 10', Herzfrequenz: 130},
            {name: 'Zp 11', Herzfrequenz: 80},
            {name: 'Zp 12', Herzfrequenz: 90},
            {name: 'Zp 13', Herzfrequenz:100},
        ];

        return (

            <div style={{backgroundColor: 'white', paddingBottom:'50px', paddingTop:'15px'}}>
                <div className="navD">
                    Trainingstagesbuch (Detail Ansicht)
                </div>
                <div className="detail_main">
                    <table className="detail_daten">
                        <tbody>
                        <tr id={"table_css"}>
                            <th className="th">Datum</th>
                            <td>{datum}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Schwerpunkt</th>
                            <td>{schwerpunkt}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Dauer[Minuten]</th>
                            <td>{dauer}</td>
                            <td>{geaendert_am}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Intensität/Unfang[1-5]</th>
                            <td>{intensitaet}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th  className="th">Übungen</th>
                            <td>{uebungen}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Mentale Erschöpfung</th>
                            <td>{mentale_Ersch}</td>
                            <td></td>
                        </tr >
                        <tr id={"table_css"}>
                            <th className="th">Bemerkung</th>
                            <td>{bemerkung}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Körperliche Erschöpfung[1-5]</th>
                            <td>{koerperliche_Ersch}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Muskelkarter[1-5]</th>
                            <td>{muskelkarter}</td>
                            <td className="td">{}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Puls</th>
                            <td >{puls}</td>
                            <td>{}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Änderungswünsche</th>
                            <td>{aenderungswuensche}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Schlafdauer</th>
                            <td>{schlafdauer}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Gewicht</th>
                            <td>{gewicht}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Minimale Herzfrequenz</th>
                            <td>{minimale_herzf}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Maximale Herzfrequenz</th>
                            <td>{maximale_herzf}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Durschnittliche Herzfrequenz</th>
                            <td>{durschnittliche_herzf}</td>
                            <td></td>
                        </tr>

                        <tr id={"table_css"}>
                            <th  className="th">Wegstrecke</th>
                            <td>{wegstrecke}</td>
                            <td></td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="th">Geschwindigkeit</th>
                            <td>{gewicht}</td>
                            <td>{}</td>
                        </tr>

                        </tbody>
                    </table>
                    <div className="diagramm">
                        <ResponsiveContainer>
                            <LineChart width={500} height={500} data={graph_data}
                                       margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="Herzfrequenz" stroke="#8884d8" activeDot={{r: 8}}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


        );

    }

}

export default DetailsAnsichtView;