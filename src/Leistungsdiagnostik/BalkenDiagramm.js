import React, {Component, Fragment} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import Confirmbutton from "../UI/Confirmbutton";
import './Leistungdiagnostik.css';

/**
 * @author Dany Chuissi
 *
 * Die Klasse zeigt ein Balkendiagramm an
 *
 * @visibleName BalkenDiagramm
 */

class BalkenDiagramm extends Component {
    state = {
        athlet1: '',
        athlet2: '',
        athlet3: '',
        athlet4: '',
        athlet5: '',
    }
    getAthletDaten (email) {
        //TODO fetch leistungdiagnostik from Athlket
    }




    render() {
        const {
            attribute,
        } = this.props;
        const length = attribute.length;

        var data;
        let name1 ='';
        let name2 = '';
        let name3 = '';
        let name4 = '';
        let name5 = '';
        switch (length) {
            case 1:
                name1 = attribute[0].name;
                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].beweglichtkeit},
                    {name: 'Reaktion', a1: attribute[0].reaction},
                    {name: 'Koordination', a1: attribute[0].koordination},
                    {name: 'Sprint', a1: attribute[0].sprint},
                    {name: 'J & R', a1: attribute[0].JandR},
                    {name: 'StWs', a1: attribute[0].stws},
                    {name: 'Med.Ball', a1: attribute[0].med_ball},
                    {name: 'Agilität', a1: attribute[0].agilitaet},
                    {name: 'BORG Test', a1: attribute[0].borg},
                    {name: 'Beep test', a1: attribute[0].beep_test},
                ];
                break;

            case 2:
                name1 = attribute[0].name;
                name2 = attribute[1].name;
                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].beweglichtkeit, a2: attribute[1].beweglichtkeit},
                    {name: 'Reaktion', a1: attribute[0].reaction, a2: attribute[1].reaction},
                    {name: 'Koordination', a1: attribute[0].koordination, a2: attribute[1].koordination},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint},
                    {name: 'J & R', a1: attribute[0].JandR, a2: attribute[1].JandR},
                    {name: 'StWs', a1: attribute[0].stws, a2: attribute[1].stws},
                    {name: 'Med.Ball', a1: attribute[0].med_ball, a2: attribute[1].med_ball},
                    {name: 'Agilität', a1: attribute[0].agilitaet, a2: attribute[1].agilitaet},
                    {name: 'BORG Test', a1: attribute[0].borg, a2: attribute[1].borg},
                    {name: 'Beep test', a1: attribute[0].beep_test, a2: attribute[1].beep_test},
                ];
                break;
            case 3:
                /*this.setState( {athlet1: this.getAthletDaten(attribute[0].email)} );
                this.setState( {athlet2: this.getAthletDaten(attribute[1].email)} );
                this.setState( {athlet3: this.getAthletDaten(attribute[2].email)} );*/
                name1 = attribute[0].name;
                name2 = attribute[1].name;
                name3 = attribute[2].name;
                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].beweglichtkeit, a2: attribute[1].beweglichtkeit, a3: attribute[2].beweglichtkeit},
                    {name: 'Reaktion', a1: attribute[0].reaction, a2: attribute[1].reaction, a3: attribute[2].reaction},
                    {name: 'Koordination', a1: attribute[0].koordination, a2: attribute[1].koordination, a3: attribute[2].koordination},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint, a3: attribute[2].sprint},
                    {name: 'J & R', a1: attribute[0].JandR, a2: attribute[1].JandR, a3: attribute[2].JandR},
                    {name: 'StWs', a1: attribute[0].stws, a2: attribute[1].stws, a3: attribute[2].stws},
                    {name: 'Med.Ball', a1: attribute[0].med_ball, a2: attribute[1].med_ball, a3: attribute[2].med_ball},
                    {name: 'Agilität', a1: attribute[0].agilitaet, a2: attribute[1].agilitaet, a3: attribute[2].agilitaet},
                    {name: 'BORG Test', a1: attribute[0].borg, a2: attribute[1].borg, a3: attribute[2].borg},
                    {name: 'Beep test', a1: attribute[0].beep_test, a2: attribute[1].beep_test, a3: attribute[2].beep_test},
                ];
                break;
        }



        let bars = [];
        let b;
        let b2;
        let b3;

        if(attribute.length === 1){
            b = <Bar name={name1} type="monotone" dataKey="a1" stroke="#008000" activeDot={{r: 8}}/>;
            bars = [...bars, b];
        }
        else if(attribute.length === 2){
            b =  <Bar name={name1}  dataKey="a1" fill="#008000" />;
            b2 =    <Bar name={name2} dataKey="a2" fill="#b8860b" />;
            bars = [...bars, b];
           bars = [...bars, b2];
        }
        else if(attribute.length === 3){
           b =  <Bar name={name1}  dataKey="a1" fill="#008000"/>;
            b2 =  <Bar name={name2} dataKey="a2" fill="#b8860b" />;
            b3 =  <Bar name={name3} dataKey="a3" fill="#2980B9"/>;
            bars  = [...bars , b];
            bars  = [...bars , b2];
            bars  = [...bars , b3];
        }

        /* Für ein Element*/
        if(!attribute.isArray) {
            name1 = attribute.date;
            data = [
                {name: 'Beweglichkeit', a1: attribute.bew},
                {name: 'Reaktion', a1: attribute.react},
                {name: 'Koordination', a1: attribute.koord},
                {name: 'Sprint', a1: attribute.sprint},
                {name: 'J & R', a1: attribute.JnR},
                {name: 'StWs', a1: attribute.StWS},
                {name: 'Med.Ball', a1: attribute.medBall},
                {name: 'Agilität', a1: attribute.agil},
                {name: 'BORG Test', a1: attribute.BORG},
                {name: 'Beep test', a1: attribute.Bleep}
            ];

            b = <Bar name={name1} type="monotone" dataKey="a1" fill="#2980B9"/>;
            bars = [...bars, b];

            console.log(("longeur: " + data.length))
            if (data.length === 0) {
                data = {label: 'No data available', a1: 'No data available'}
// OR data = undefined;
            }
        }

        return (
            <Fragment>
                <ResponsiveContainer>
                    <BarChart width={600} height={300} data={data}
                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        {bars}
                    </BarChart>
                </ResponsiveContainer>
            </Fragment>
        );

    }
}
export default BalkenDiagramm;

/*
<Line  type="monotone" dataKey="a4" stroke="#ff0000" activeDot={{r: 8}}/>
                            <Line  type="monotone" dataKey="a4" stroke="#ff0000" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="a5" stroke="#7fff00" activeDot={{r: 8}}/>
* */

/*
* data = [
                    {name: 'Beweglichkeit', a1: this.state.athlet1.beweglichkeit, a2: this.state.athlet2.beweglichkeit, a3: this.state.athlet2.beweglichkeit},
                    {name: 'Reaktion', a1: this.state.athlet1.reaktion, a2: this.state.athlet1.reaktion, a3: this.state.athlet1.reaktion},
                    {name: 'Koordination', a1: this.state.athlet1.koordination, a2: this.state.athlet1.koordination, a3: this.state.athlet1.koordination},
                    {name: 'Sprint',  a1: this.state.athlet1.sprint, a2: this.state.athlet1.sprint, a3: this.state.athlet1.sprint},
                    {name: 'J & R', a1: this.state.athlet1.jandr, a2: this.state.athlet1.jandr, a3: this.state.athlet1.jandr},
                    {name: 'Med.Ball', a1: this.state.athlet1.med.ball, a2: this.state.athlet1.med.ball, a3: this.state.athlet1.med.ball},
                    {name: 'Agilität', a1: this.state.athlet1.agilitaet, a2: this.state.athlet1.agilitaet, a3: this.state.athlet1.agilitaet},
                    {name: 'BORG Test', a1: this.state.athlet1.borgtest, a2: this.state.athlet1.borgtest, a3: this.state.athlet1.borgtest},
                    {name: 'Beep test', a1: this.state.athlet1.beeptest, a2: this.state.athlet1.beeptest, a3: this.state.athlet1.beeptest},
                ];
* */


/*
*  <LineChart width={500} height={500} data={data}
                               margin={{top: 5, right: 5, left: 8, bottom: 35}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        {lines}
                    </LineChart>
* */