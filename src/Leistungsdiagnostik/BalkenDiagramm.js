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
    render() {
        const {
            attribute,
        } = this.props;
        const length = attribute.length;

        console.log(attribute)
        console.log(length)
        var data = {label: 'No data available', a1: 'No data available'}
        let name1 ='';
        let name2 = '';
        let name3 = '';
        let name4 = '';
        let name5 = '';


        let bars = [];
        let b;
        let b2;
        let b3;
        let b4;
        let b5;

        switch (length) {
            case 1:
                name1 = attribute[0].email;
                b = <Bar name={name1} type="monotone" dataKey="a1" stroke="#008000" activeDot={{r: 8}}/>;
                bars = [...bars, b];

                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].bew},
                    {name: 'Reaktion', a1: attribute[0].react},
                    {name: 'Koordination', a1: attribute[0].koord},
                    {name: 'Sprint', a1: attribute[0].sprint},
                    {name: 'J & R', a1: attribute[0].JnR},
                    {name: 'StWs', a1: attribute[0].StWS},
                    {name: 'Med.Ball', a1: attribute[0].medBall},
                    {name: 'Agilität', a1: attribute[0].agil},
                    {name: 'BORG Test', a1: attribute[0].BORG},
                    {name: 'Beep test', a1: attribute[0].Bleep},
                ];
                break;

            case 2:
                name1 = attribute[0].email;
                name2 = attribute[1].email;

                b =  <Bar name={name1}  dataKey="a1" fill="#008000" />;
                b2 =    <Bar name={name2} dataKey="a2" fill="#b8860b" />;
                bars = [...bars, b];
                bars = [...bars, b2];

                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].bew, a2: attribute[1].bew},
                    {name: 'Reaktion', a1: attribute[0].react, a2: attribute[1].react},
                    {name: 'Koordination', a1: attribute[0].koord, a2: attribute[1].koord},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint},
                    {name: 'J & R', a1: attribute[0].JnR, a2: attribute[1].JnR},
                    {name: 'StWs', a1: attribute[0].StWS, a2: attribute[1].StWS},
                    {name: 'Med.Ball', a1: attribute[0].medBall, a2: attribute[1].medBall},
                    {name: 'Agilität', a1: attribute[0].agil, a2: attribute[1].agil},
                    {name: 'BORG Test', a1: attribute[0].BORG, a2: attribute[1].BORG},
                    {name: 'Beep test', a1: attribute[0].Bleep, a2: attribute[1].Bleep},
                ];
                break;
            case 3:
                /*this.setState( {athlet1: this.getAthletDaten(attribute[0].email)} );
                this.setState( {athlet2: this.getAthletDaten(attribute[1].email)} );
                this.setState( {athlet3: this.getAthletDaten(attribute[2].email)} );*/
                name1 = attribute[0].email;
                name2 = attribute[1].email;
                name3 = attribute[2].email;

                b =  <Bar name={name1}  dataKey="a1" fill="#008000"/>;
                b2 =  <Bar name={name2} dataKey="a2" fill="#b8860b" />;
                b3 =  <Bar name={name3} dataKey="a3" fill="#2980B9"/>;
                bars  = [...bars , b];
                bars  = [...bars , b2];
                bars  = [...bars , b3];

                console.log(name3)
                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].bew, a2: attribute[1].bew, a3: attribute[2].bew},
                    {name: 'Reaktion', a1: attribute[0].react, a2: attribute[1].react, a3: attribute[2].react},
                    {name: 'Koordination', a1: attribute[0].koord, a2: attribute[1].koord, a3: attribute[2].koord},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint, a3: attribute[2].sprint},
                    {name: 'J & R', a1: attribute[0].JnR, a2: attribute[1].JnR, a3: attribute[2].JnR},
                    {name: 'StWs', a1: attribute[0].StWS, a2: attribute[1].StWS, a3: attribute[2].StWS},
                    {name: 'Med.Ball', a1: attribute[0].medBall, a2: attribute[1].medBall, a3: attribute[2].medBall},
                    {name: 'Agilität', a1: attribute[0].agil, a2: attribute[1].agil, a3: attribute[2].agil},
                    {name: 'BORG Test', a1: attribute[0].BORG, a2: attribute[1].BORG, a3: attribute[2].BORG},
                    {name: 'Beep test', a1: attribute[0].Bleep, a2: attribute[1].Bleep, a3: attribute[2].Bleep},
                ];
                break;
            case 4:
                name1 = attribute[0].email;
                name2 = attribute[1].email;
                name3 = attribute[2].email;
                name4 = attribute[3].email;

                b =  <Bar name={name1}  dataKey="a1" fill="#008000"/>;
                b2 =  <Bar name={name2} dataKey="a2" fill="#b8860b" />;
                b3 =  <Bar name={name3} dataKey="a3" fill="#2980B9"/>;
                b4 =  <Bar name={name4} dataKey="a4" fill="#2980B9"/>
                bars  = [...bars , b];
                bars  = [...bars , b2];
                bars  = [...bars , b3];
                bars  = [...bars , b4];

                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].bew, a2: attribute[1].bew, a3: attribute[2].bew,  a4: attribute[3].bew},
                    {name: 'Reaktion', a1: attribute[0].react, a2: attribute[1].react, a3: attribute[2].react , a4: attribute[3].react},
                    {name: 'Koordination', a1: attribute[0].koord, a2: attribute[1].koord, a3: attribute[2].koord , a4: attribute[3].koord},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint, a3: attribute[2].sprint , a4: attribute[3].sprint},
                    {name: 'J & R', a1: attribute[0].JnR, a2: attribute[1].JnR, a3: attribute[2].JnR , a4: attribute[3].JnR},
                    {name: 'StWs', a1: attribute[0].StWS, a2: attribute[1].StWS, a3: attribute[2].StWS , a4: attribute[3].StWS},
                    {name: 'Med.Ball', a1: attribute[0].medBall, a2: attribute[1].medBall, a3: attribute[2].medBall , a4: attribute[3].medBall},
                    {name: 'Agilität', a1: attribute[0].agil, a2: attribute[1].agil, a3: attribute[2].agil , a4: attribute[3].agil},
                    {name: 'BORG Test', a1: attribute[0].BORG, a2: attribute[1].BORG, a3: attribute[2].BORG , a4: attribute[3].BORG},
                    {name: 'Beep test', a1: attribute[0].Bleep, a2: attribute[1].Bleep, a3: attribute[2].Bleep , a4: attribute[3].Bleep},
                    ];
                break;
            case 5:
                name1 = attribute[0].name;
                name2 = attribute[1].name;
                name3 = attribute[2].name;
                name4 = attribute[3].name;
                name5 = attribute[4].name;

                b =  <Bar name={name1}  dataKey="a1" fill="#008000"/>;
                b2 =  <Bar name={name2} dataKey="a2" fill="#b8860b" />;
                b3 =  <Bar name={name3} dataKey="a3" fill="#2980B9"/>;
                b4 =  <Bar name={name4} dataKey="a4" fill="#2980B9"/>;
                b5 =  <Bar name={name5} dataKey="a5" fill="#2980B9"/>;
                bars  = [...bars , b];
                bars  = [...bars , b2];
                bars  = [...bars , b3];
                bars  = [...bars , b4];
                bars  = [...bars , b5];

                data = [
                    {name: 'Beweglichkeit', a1: attribute[0].bew, a2: attribute[1].bew, a3: attribute[2].bew,  a4: attribute[3].bew ,  a5: attribute[4].bew},
                    {name: 'Reaktion', a1: attribute[0].react, a2: attribute[1].react, a3: attribute[2].react , a4: attribute[3].react , a5: attribute[4].react},
                    {name: 'Koordination', a1: attribute[0].koord, a2: attribute[1].koord, a3: attribute[2].koord , a4: attribute[3].koord , a5: attribute[4].koord},
                    {name: 'Sprint', a1: attribute[0].sprint, a2: attribute[1].sprint, a3: attribute[2].sprint , a4: attribute[3].sprint , a5: attribute[4].sprint},
                    {name: 'J & R', a1: attribute[0].JnR, a2: attribute[1].JnR, a3: attribute[2].JnR , a4: attribute[3].JnR , a5: attribute[4].JnR},
                    {name: 'StWs', a1: attribute[0].StWS, a2: attribute[1].StWS, a3: attribute[2].StWS , a4: attribute[3].StWS , a5: attribute[4].StWS},
                    {name: 'Med.Ball', a1: attribute[0].medBall, a2: attribute[1].medBall, a3: attribute[2].medBall , a4: attribute[3].medBall , a5: attribute[4].medBall},
                    {name: 'Agilität', a1: attribute[0].agil, a2: attribute[1].agil, a3: attribute[2].agil  , a4: attribute[3].agil , a5: attribute[4].agil},
                    {name: 'BORG Test', a1: attribute[0].BORG, a2: attribute[1].BORG, a3: attribute[2].BORG , a4: attribute[3].BORG , a5: attribute[4].BORG},
                    {name: 'Beep test', a1: attribute[0].Bleep, a2: attribute[1].Bleep, a3: attribute[2].Bleep , a4: attribute[3].Bleep , a5: attribute[4].Bleep},

                ];
                break;
            case 0:
                name1 = "default";

                b = <Bar name={name1} type="monotone" dataKey="a1" fill="#2980B9"/>;
                bars = [...bars, b];
                if (data.length === 0) {
                    data = {label: 'No data available', a1: 'No data available'}
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








        }



        }

        console.log("data")
        console.log(data)
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