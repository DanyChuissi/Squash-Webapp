import React, {Component, Fragment} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import './Testbaterie/Testbaterie.css';
import Confirmbutton from "../UI/Confirmbutton";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";

class SpineDiagramm extends Component {
    render() {
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

        const data = [


            {subject: 'Beweglichkeit', A: beweglichtkeit, fullMark: 150},
            {subject: 'Reaktion', A: reaction, fullMark: 150},
            {subject: 'Koordination', A: koordination, fullMark: 150},
            {subject: 'Sprint', A: sprint, fullMark: 150},
            {subject: 'J & R', A: JandR, fullMark: 150},
            {subject: 'Med Ball', A: med_ball, fullMark: 150},
            {subject: 'Agilität', A: agilitaet, fullMark: 150},
            {subject: 'Stws', A: stws, fullMark: 150},
            {subject: 'BORG', A: borg, fullMark: 150},
            {subject: 'Beep Test', A: beep_test, fullMark: 150},
        ];

        return (
            <Fragment>
                <div className="testbaterie_bo">
                    <div className="spinediagramm_leisrun">
                        <RadarChart cx={450} cy={170} outerRadius={130} width={680} height={310} data={data}>
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="subject"/>
                            <PolarRadiusAxis angle={90} domain={[0, 150]}/>
                            <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                        </RadarChart>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default SpineDiagramm;

/*
{subject: 'Beweglichkeit', A: {beweglichtkeit}, fullMark: 150},
            {subject: 'Reaktion', A: {reaction}, fullMark: 150},
            {subject: 'Koordination', A: {koordination}, fullMark: 150},
            {subject: 'Sprint', A: {sprint}, fullMark: 150},
            {subject: 'J & R', A: {JandR}, fullMark: 150},
            {subject: 'Med Ball', A: {med_ball}, fullMark: 150},
            {subject: 'Agilität', A: {agilitaet}, fullMark: 150},
            {subject: 'Stws', A: {stws}, fullMark: 150},
            {subject: 'BORG', A: {borg}, fullMark: 150},
            {subject: 'Beep Test', A: {beep_test}, fullMark: 150},
* */
