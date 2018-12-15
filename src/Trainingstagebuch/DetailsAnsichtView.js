import React from 'react'
import "./Details.css";
import "../PlayerList/PlayerList.css";
import Label from "../UI/Label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";

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
            modalOpened,

            toggleModal,
        } = this.props;
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        const data2 = {
            labels: ['Scatter'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [
                        {x: 65, y: 75},
                        {x: 59, y: 49},
                        {x: 80, y: 90},
                        {x: 81, y: 29},
                        {x: 56, y: 36},
                        {x: 55, y: 25},
                        {x: 40, y: 18},
                    ]
                }
            ]
        };
        return (

                <div >
                    <div className="nav">
                        Trainingstagesbuch (Detail Ansicht)
                    </div>
                    <div className="detail_main">
                        <div className="detail_daten">
                            <ResponsiveContainer>
                                <div className="detail_daten_column">
                                    <div className="detai_daten_row1"><a>Datum</a></div>
                                    <div className="detai_daten_row2"><a>Schwerpunkt</a></div>
                                    <div className="detai_daten_row1"><a>Dauer[Minuten]</a></div>
                                    <div className="detai_daten_row2"><a>Intensität/Unfang[1-5]</a></div>
                                    <div className="detai_daten_row1"><a>Übungen</a></div>
                                    <div className="detai_daten_row2"><a>Mentale Erschöpfung</a></div>
                                    <div className="detai_daten_row1"><a>Bemerkung</a></div>
                                    <div className="detai_daten_row2"><a>Körperliche Erschöpfung[1-5]</a></div>
                                    <div className="detai_daten_row1"><a>Muskelkarter[1-5]</a></div>
                                    <div className="detai_daten_row2"><a>Puls</a></div>
                                    <div className="detai_daten_row1"><a>Änderungswünsche</a></div>
                                    <div className="detai_daten_row2"><a>Schlafdauer</a></div>
                                    <div className="detai_daten_row1"><a>Gewicht</a></div>
                                    <div className="detai_daten_row2"><a>Maximale Herzfrequenz</a></div>
                                    <div className="detai_daten_row1"><a>Minimale Herzfrequenz</a></div>
                                    <div className="detai_daten_row2"><a>Durschnittliche Herzfrequenz</a></div>
                                    <div className="detai_daten_row1"><a>Wegstrecke</a></div>
                                    <div className="detai_daten_row2"><a>Geschwindigkeit</a></div>
                                </div>
                            </ResponsiveContainer>
                            <ResponsiveContainer>
                                <div className="detail_daten_column">
                                    <div className="detai_daten_row1">{datum}</div>
                                    <div className="detai_daten_row2">{schwerpunkt}</div>
                                    <div className="detai_daten_row1">{dauer}</div>
                                    <div className="detai_daten_row2">{intensitaet}</div>
                                    <div className="detai_daten_row1">{uebungen}</div>
                                    <div className="detai_daten_row2">{mentale_Ersch}</div>
                                    <div className="detai_daten_row1">{bemerkung}</div>
                                    <div className="detai_daten_row2">{koerperliche_Ersch}</div>
                                    <div className="detai_daten_row1">{muskelkarter}</div>
                                    <div className="detai_daten_row2">{puls}</div>
                                    <div className="detai_daten_row1">{aenderungswuensche}</div>
                                    <div className="detai_daten_row2">{schlafdauer}</div>
                                    <div className="detai_daten_row1">{gewicht}</div>
                                    <div className="detai_daten_row2">{maximale_herzf}</div>
                                    <div className="detai_daten_row1">{minimale_herzf}</div>
                                    <div className="detai_daten_row2">{durschnittliche_herzf}</div>
                                    <div className="detai_daten_row1">{wegstrecke}</div>
                                    <div className="detai_daten_row2">{geschwindigkeit}</div>
                                </div>
                            </ResponsiveContainer>
                            <ResponsiveContainer>
                                <div className="detail_daten_column">
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{geaendert_am}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                    <div className="detai_daten_row1">{}</div>
                                    <div className="detai_daten_row2">{}</div>
                                </div>
                            </ResponsiveContainer>
                        </div>
                        <div className="diagramm">
                            <ResponsiveContainer>
                                <LineChart width={500} height={500} data={data}
                                           margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>


        );

    }

}

export default DetailsAnsichtView;
