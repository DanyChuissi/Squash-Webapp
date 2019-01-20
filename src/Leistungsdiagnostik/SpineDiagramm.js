import React, {Component, Fragment} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import './Testbaterie/Testbaterie.css';
import Confirmbutton from "../UI/Confirmbutton";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";

const standard = {
    beweglichtkeit: 30,
    reaction: 10,
    koordination: 10,
    sprint: 10,
    JandR: 60,
    med_ball: 10,
    stws: 10,
    agilitaet: 20,
    borg: 40,
    beep_test: 30,
};

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


        const   Nbeweglichtkeit = (beweglichtkeit * 100) / standard.beweglichtkeit;
        const     Nreaction = (reaction * 100) / standard.reaction;
        const    Nkoordination = (koordination * 100) / standard.koordination;
        const   Nsprint = (sprint * 100) / standard.sprint;
        const   NJandR = (JandR * 100) / standard.JandR;
        const   Nmed_ball = (med_ball * 100) / standard.med_ball;
        const  Nstws = (stws * 100) / standard.stws;
        const  Nagilitaet = (agilitaet * 100) / standard.agilitaet;
        const    Nborg = (borg * 100) / standard.borg;
        const   Nbeep_test = (beep_test * 100) / standard.beep_test;

        /*const data = [


            {subject: 'Beweglichkeit', A: beweglichtkeit, fullMark: 150,},
            {subject: 'Reaktion', A: reaction, fullMark: 150},
            {subject: 'Koordination', A: koordination, fullMark: 150},
            {subject: 'Sprint', A: sprint, fullMark: 150},
            {subject: 'J & R', A: JandR, fullMark: 150},
            {subject: 'Med Ball', A: med_ball, fullMark: 150},
            {subject: 'Agilität', A: agilitaet, fullMark: 150},
            {subject: 'Stws', A: stws, fullMark: 150},
            {subject: 'BORG', A: borg, fullMark: 150},
            {subject: 'Beep Test', A: beep_test, fullMark: 150},
        ];*/

        const data = [


            {subject: 'Beweglichkeit', A: Nbeweglichtkeit, fullMark: 150,},
            {subject: 'Reaktion', A: Nreaction, fullMark: 150},
            {subject: 'Koordination', A: Nkoordination, fullMark: 150},
            {subject: 'Sprint', A: Nsprint, fullMark: 150},
            {subject: 'J & R', A: NJandR, fullMark: 150},
            {subject: 'Med Ball', A: Nmed_ball, fullMark: 150},
            {subject: 'Agilität', A: Nagilitaet, fullMark: 150},
            {subject: 'Stws', A: Nstws, fullMark: 150},
            {subject: 'BORG', A: Nborg, fullMark: 150},
            {subject: 'Beep Test', A: Nbeep_test, fullMark: 150},
        ];

        return (
            <Fragment>
                <div className="testbaterie_bo">
                    <div className="spinediagramm_leisrun">
                        <RadarChart cx={350} cy={170} outerRadius={130} width={680} height={310} data={data}>
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="subject"/>
                            <PolarRadiusAxis angle={90} domain={[0, 100]}/>
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
