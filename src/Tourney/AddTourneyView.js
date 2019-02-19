import React, { Component } from 'react';
import Input from "../UI/Input";
import Confirmbutton from "../UI/Confirmbutton";

/**
 * @author Daniela
 * This View contains a Form for adding a Tourney.
 * @visibleName AddTourneyView
 */
class AddTourneyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            createTourney,
            cancelTourney,
            setTitel,
            setOrt,
            setStardDate,
            setEndDate,
            setLink,
            state,
            titel,
            ort,
            link,
            von,
            bis,
            search,
        } = this.props
        let date = new Date().toLocaleString();

        let buttons = [];
        if (search) {
            var b1 = <Confirmbutton onClick={cancelTourney}>Updaten</Confirmbutton>;
            var b2 = <Confirmbutton onClick={createTourney}>delete</Confirmbutton>
            var b3 = <Confirmbutton onClick={cancelTourney}>Abbrechen</Confirmbutton>;
            buttons = [...buttons, b1, b2, b3]
        }else {
            var b3 = <Confirmbutton onClick={cancelTourney}>Abbrechen</Confirmbutton>;
            var b4 = <Confirmbutton onClick={createTourney}>Erstellen</Confirmbutton>
            buttons = [...buttons, b3, b4]
        }


        return (
            <div id={"addTourneyView"}>
            <h3>Turnier erstellen</h3>
                <p>Die mit * gekennzeichneten Feldern sind verpflichtend</p>
                <div id={"createTourneyForm"}>

                        <h5>*Titel</h5>
                    <Input type="text" style={{width: '200px'}} value={titel} placeholder={"titel"} onChange={setTitel} />

                       <h5>*Ort</h5>
                       <Input type="text" style={{width: '200px'}} value={ort} onChange={setOrt}/>
                       <h5>*Startdatum</h5>
                       <input value={von}   type="date" id="tourney-start" name="trip-start"
                              onChange={setStardDate}
                              /*min="2018-01-01" max="2018-12-31"*//>
                      <h5>*Enddatum</h5>
                      <input value={bis}  type="date" id="tourney-end" name="trip-start"

                            /* min="2018-01-01" max="2018-12-31"*//>

                        <h5>Link</h5>
                        <Input value={link}  onChange={setLink}/>


                </div>
                <div id={"createTourneyButtons"}>
                    {buttons}
                </div>
            </div>
        );
    }
}

export default AddTourneyView;
