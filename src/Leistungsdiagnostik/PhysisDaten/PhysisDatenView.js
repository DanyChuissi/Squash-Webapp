import React, {Component, Fragment} from 'react';
import "./PhysisDaten.css"
import Confirmbutton from "../../UI/Confirmbutton";
import '../../EditPlayerProfile/EditPlayerProfile.css';

/**
 * @author Dany Chuissi
 *
 * die Klasse definiert wie die PhysisDaten angezeigt werden
 *
 * @visibleName PhysisDatenView
 */
class PhysisDatenView extends React.Component{
    render () {
        const {
            groesse,
            gewicht,
            koeperfett,
            beinlaenge,
            beinwinkel,

            setGroesse,
             setGewicht,
            setKoerperfett,
              setBeinlaenge,
          setBeinwinkel,
             setPlayer,
             onEdit,
            onSave,
            contentEditable,
            hideBearbeiten,
            hideSpeichern,

        } = this.props;
         let Style = {};
        if(hideBearbeiten){
            Style = bearbeitbarStyle
        }
        return (
            <Fragment>
                <div className="thead_leistung">
                    <label >Physis Daten</label>
                </div>

                <table style={{marginBotton: '20px'}}>

                    <tbody className= "tbody_leistung">
                    <tr id={"table_css"}>
                         <th >Größe</th>
                         <td style={Style} placeholder={"No Data Found"} onChange={setGroesse} contentEditable={contentEditable} required>{groesse}</td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Gewicht</th>
                        <td style={Style} placeholder={"No Data Found"} onChange={setGewicht} contentEditable={contentEditable} required>{gewicht}</td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Körperfett</th>
                        <td style={Style} placeholder={"No Data Found"} onChange={setKoerperfett} contentEditable={contentEditable} required>{koeperfett}</td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Beinlänge</th>
                        <td style={Style} placeholder={"No Data Found"} onChange={setBeinlaenge} contentEditable={contentEditable} required>{beinlaenge}</td>
                    </tr>
                    <tr id={"table_css"}>
                        <th >Beinwinkel</th>
                        <td style={Style} placeholder={"No Data Found"}  onChange={setBeinwinkel} contentEditable={contentEditable} required>{beinwinkel}</td>
                    </tr>
                    </tbody>
                </table>

                <div className="physisdaten_box">
                    <Confirmbutton onClick={onEdit} hidden={hideBearbeiten} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}} >
                        Bearbeiten
                    </Confirmbutton>
                    <Confirmbutton onClick={onSave} hidden={hideSpeichern} myStyle= {{padding: '9px' , marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                        Speichern
                    </Confirmbutton>
                </div>

            </Fragment>
        );
    }
}
const bearbeitbarStyle = {
    color: '#2980B9',
    opacity: '0.9'
};
export default PhysisDatenView;