import React, {Component, Fragment} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";


class PhisisDatenKurve extends Component {
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
        alert(length)
        var data;
        let name1 ='';
        let name2 = '';
        let name3 = '';
        let name4 = '';
        let name5 = '';
        switch (length) {
            case 1:
                name1 = attribute[0].alter;

               data = [
                    {name: 'Alter', a1: attribute[0].alter},
                    {name: 'Größe', a1: attribute[0].groesse},
                    {name: 'Gewicht', a1: attribute[0].gewicht},
                    {name: 'Korperfett', a1: attribute[0].koerperfett},
                    {name: 'Beinlänge', a1: attribute[0].beinlaenge},
                    {name: 'Beinwinckel', a1: attribute[0].beinwinkel},
                ];
                break;

            case 2:
                name1 = attribute[0].name;
                name2 = attribute[1].name;
                data = [
                    {name: 'Alter', a1: attribute[0].alter, a2: attribute[1].alter},
                    {name: 'Größe', a1: attribute[0].groesse, a2: attribute[1].groesse},
                    {name: 'Gewicht', a1: attribute[0].gewicht, a2: attribute[1].gewicht},
                    {name: 'Korperfett', a1: attribute[0].koerperfett, a2: attribute[1].koerperfett},
                    {name: 'Beinlänge', a1: attribute[0].beinlaenge, a2: attribute[1].beinlaenge},
                    {name: 'Beinwinckel', a1: attribute[0].beinwinkel, a2: attribute[1].beinwinkel},
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
                    {name: 'Alter', a1: attribute[0].alter, a2: attribute[1].alter, a3: attribute[2].alter},
                    {name: 'Größe', a1: attribute[0].groesse, a2: attribute[1].groesse, a3: attribute[2].groesse},
                    {name: 'Gewicht', a1: attribute[0].gewicht, a2: attribute[1].gewicht, a3: attribute[2].gewicht},
                    {name: 'Korperfett', a1: attribute[0].koerperfett, a2: attribute[1].koerperfett, a3:  attribute[2].koerperfett},
                    {name: 'Beinlänge', a1: attribute[0].beinlaenge, a2: attribute[1].beinlaenge, a3: attribute[2].beinlaenge},
                    {name: 'Beinwinckel', a1: attribute[0].beinwinkel, a2: attribute[1].beinwinkel, a3: attribute[2].beinwinkel},
                ];
                break;
        }


        //alert(attribute[0].alter +" , "+ attribute[1].alter +" "+attribute[2].gewicht);

        let lines = [];
        let l;

        if(attribute.length === 1){
            l = <Line name={name1} type="monotone" dataKey="a1" stroke="#008000" activeDot={{r: 8}}/>
            lines = [...lines, l];
        }
        else if(attribute.length === 2){
            l =  <Line name={name1} type="monotone" dataKey="a1" stroke="#008000" activeDot={{r: 8}}/>
            let l2 =    <Line name={name2} type="monotone" dataKey="a2" stroke="#ff0000" activeDot={{r: 8}}/>
            lines = [...lines, l];
            lines = [...lines, l2];
        }
        else if(attribute.length === 3){
            l =  <Line name={name1} type="monotone" dataKey="a1" stroke="#008000" activeDot={{r: 8}}/>
            let l2 =    <Line name={name2} type="monotone" dataKey="a2" stroke="#ff0000" activeDot={{r: 8}}/>
            let l3 = <Line name={name3} type="monotone" dataKey="a3" stroke="#2980B9" activeDot={{r: 8}}/>
            lines = [...lines, l];
            lines = [...lines, l2];
            lines = [...lines, l3];
        }


        return (
            <Fragment>
                <ResponsiveContainer>
                    <LineChart width={500} height={500} data={data}
                               margin={{top: 5, right: 5, left: 8, bottom: 35}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        {lines}
                    </LineChart>
                </ResponsiveContainer>
            </Fragment>
        );

    }

}

export default PhisisDatenKurve;