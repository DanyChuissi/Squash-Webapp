import React, {Component, Fragment} from 'react';
import "./PhysisDaten.css"
import Confirmbutton from "../../UI/Confirmbutton";
import '../../EditPlayerProfile/EditPlayerProfile.css';
import Input from "../../UI/Input";


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
                         <td id={"physisDaten"} onChange={setGroesse} >
                             <Input type="number" hidden={!contentEditable} style={Style} placeholder={groesse} onChange={setGroesse} />
                             <div hidden={contentEditable}>{groesse}</div>
                         </td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Gewicht</th>
                        <td id={"physisDaten"} onChange={setGewicht}>
                            <Input type="number" hidden={!contentEditable} style={Style} placeholder={gewicht} onChange={setGewicht} />
                            <div hidden={contentEditable}>{gewicht}</div>
                        </td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Körperfett</th>
                        <td id={"physisDaten"} onChange={setKoerperfett} >
                            <Input type="number" hidden={!contentEditable} style={Style} placeholder={koeperfett} onChange={setKoerperfett} />
                            <div hidden={contentEditable}>{koeperfett}</div>
                        </td>
                    </tr>
                    <tr  id={"table_css"}>
                        <th>Beinlänge</th>
                        <td id={"physisDaten"} onChange={setBeinlaenge} >
                            <Input type="number" hidden={!contentEditable} style={Style} placeholder={beinlaenge} onChange={setBeinlaenge} />
                            <div hidden={contentEditable}>{beinlaenge}</div>
                        </td>
                    </tr>
                    <tr id={"table_css"}>
                        <th >Beinwinkel</th>
                        <td id={"physisDaten"} onChange={setBeinwinkel} >
                            <Input type="number" hidden={!contentEditable} style={Style} placeholder={beinwinkel} onChange={setBeinwinkel} />
                            <div hidden={contentEditable}>{beinwinkel}</div>
                        </td>
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