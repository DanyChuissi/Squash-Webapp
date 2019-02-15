import React, {Component, Fragment} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import './Testbaterie.css';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import Input from "../../UI/Input";
import Confirmbutton from "../../UI/Confirmbutton";
import Popup from "reactjs-popup";
import NewTestBaterieController from "../NewTestBaterie/NewTestBaterieController";
import { GoInfo } from "react-icons/go";
import { IconContext } from "react-icons";
import TestBaterieInfoPopup from "./TestBaterieInfoPopup";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";


/**
 * @author Dany Chuissi
 *
 * Klasse für die AlteTestbaterie
 *
 * @visibleName AlteTestBaterieView
 */

class AlteTestBaterieView extends Component {
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
            beep_test,

        } = this.props;



        return (
            <Fragment>
                <div  className="table_css">
                    <table>
                        <tbody className= "tbody_leistung">
                        <tr id={"table_css"}>
                            <th className="testName">
                                Beweglichkeit[cm]
                            </th>
                            <td placeholder={"No Data Found"}>{beweglichtkeit}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                Reaktion[cm]
                            </th>
                            <td  placeholder={"No Data Found"} >{reaction}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                Koordination
                            </th>
                            <td placeholder={"No Data Found"}  >{koordination}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                Sprint[sec]
                            </th>
                            <td   placeholder={"No Data Found"}  >{sprint}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                J & R
                            </th>
                            <td   placeholder={"No Data Found"}  >{JandR}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Med Ball
                            </th>
                            <td  placeholder={"No Data Found"}  >{med_ball}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">StWS
                            </th>
                            <td   placeholder={"No Data Found"}  >{stws}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Agilität
                            </th>
                            <td   placeholder={"No Data Found"}  >{agilitaet}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">BORG Test
                            </th>
                            <td  placeholder={"No Data Found"}  >{borg}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Beep Test
                            </th>
                            <td  placeholder={"No Data Found"}  >{beep_test}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </Fragment>
        );
    }
}
export default AlteTestBaterieView;