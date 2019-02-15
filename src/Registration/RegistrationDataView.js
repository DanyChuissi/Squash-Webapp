import React, {Component, Fragment} from 'react';
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
import Label from "../UI/Label";
import Confirmbutton from "../UI/Confirmbutton";
import Footer from "../UI/Footer";

/**
 * @author Dany Chuissi
 *
 * Definiert das Aussehen der Registration Seite
 * @visibleName RegistrationDataView
 */
class RegistrationDataView extends Component{
    render() {
        const {
            vorname,
            nachname,
            gDatum,
            strasse,
            Hnummer,
            plz,
            ort,
            festnetzNummer,
            handyNummer,

            setVorname,
            setNachname,
            setGdatum,
            setStrasse,
            setHnummer,
            setPlz,
            setOrt,
            setFestnummer,
            setHandynummer,
            submitData,
        }=this.props;

        return (
            <Fragment>
                <div style={{height: '100vh', width: '100vw'}}>
                    <div className="headerR">
                        <img src={logomenuMitte} style={{ height: '18vmin', width: '25vmin'}}/>
                    </div>
                    <div className="navR">
                        Registrierung
                    </div>
                    <div className="mainR">
                        <div className="boxRR_Data">
                            Die mit einem * gekenntzeichneten Felder sind verpflichtend
                            <div className="boxR_Data">
                                <Label>*Vorname: </Label>
                                <input type="text"  placeholder={"Vorname"}  value={vorname} onChange={setVorname}/>
                                <Label>*Nachname: </Label>
                                <input type="text"  placeholder={"Nachname"} value={nachname} onChange={setNachname}/>
                                <Label>*Geburtsdatum: </Label>
                                <input type="date" placeholder={"Geburtsdatum"} value={gDatum} onChange={setGdatum}/>
                                <Label>*Strasse: </Label>
                                <div className= "adresse_Data">

                                    <input type="text"  placeholder={"Strasse"}  value={strasse} onChange={setStrasse}/>
                                    <div className= "adresse_Data">
                                        <Label>*Hausnummer: </Label>
                                        <input type="text"  placeholder={"Hausnummer"}  value={Hnummer} onChange={setHnummer}/>
                                   </div>
                                </div>
                                <Label>*Plz: </Label>
                                <div  className= "adresse_Data">
                                        <div>
                                        <input type="text"  placeholder={"Postleizahl"} value={plz} onChange={setPlz}/>
                                      </div>
                                    <div >
                                        <Label>*Ort: </Label>
                                        <input className="ort_css" type="text"  placeholder={"Ort"}  value={ort} onChange={setOrt}/>
                                   </div>
                                </div>
                                <Label>*Festnetznummer: </Label>
                                <input type="text" placeholder={"Festnetznummer"} value={festnetzNummer} onChange={setFestnummer}/>
                                <Label>*Handynummer: </Label>
                                <input type="text" placeholder={"Handynummer"} value={handyNummer} onChange={setHandynummer}/>
                            </div>

                            <div><Confirmbutton myStyle= {{padding: '13px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}} onClick={submitData}>
                                Bestätigen
                            </Confirmbutton></div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default RegistrationDataView;