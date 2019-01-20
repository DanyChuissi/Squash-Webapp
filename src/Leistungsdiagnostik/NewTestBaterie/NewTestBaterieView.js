import React, {Component, Fragment} from 'react';
import './NewTestBaterie.css';
import Label from "../../UI/Label";
import Input from "../../UI/Input";
import Confirmbutton from "../../UI/Confirmbutton";

class NewTestBaterieView extends Component{
    state = {
        beweglichtkeit: '',
        reaction: '',
        koordination: '',
        sprint: '',
        JandR: '',
        med_ball: '',
        stws: '',
        agilitaet: '',
        borg: '',
        beep_test: '',
    }
    setBeweglichtkeit = (e) => {
        this.setState({beweglichtkeit: e.target.value})
    }
    setReaktion = (e) => {
        this.setState({reaktion: e.target.value})
    }

    setKoordination = (e) => {
        this.setState({koordination: e.target.value})
    }

    setSprint= (e) => {
        this.setState({sprint: e.target.value})
    }
    setJandR = (e) => {
        this.setState({JandR: e.target.value})
    }

    setMedBall = (e) => {
        this.setState({med_ball: e.target.value})
    }
    setStWS = (e) => {
        this.setState({stws: e.target.value})
    }

    setAgilitaet= (e) => {
        this.setState({agilitaet: e.target.value})
    }
    setBorg = (e) => {
        this.setState({borg: e.target.value})
    }

    setBeepTest = (e) => {
        this.setState({beep_test: e.target.value})
    }




    render(){
        const{
            athlet,
            closePopUp,
            postTestBaterie,
        }= this.props;
        let datum = new Date().toLocaleDateString();

        return (
            <Fragment>
                  <div className="boxRR_newtestbaterie">
                      <Label> Neue TestBaterie </Label>
                      <div>
                          <Label>Datum</Label>
                          <Label >{datum}</Label>
                      </div>

                      <div className="main_newLeistung">

                          <div className="box_newtestbaterie">
                              <Label>Beweglichtkeit: </Label>
                              <Input placeholder={"Beweglichkeit"} value={this.state.beweglichtkeit} onChange={this.setBeweglichtkeit}/>
                              <Label>Reaction: </Label>
                              <Input  placeholder={"Reaction"} value={this.state.reaction} onChange={this.setReaktion}/>
                              <Label> Koordination: </Label>
                              <Input  placeholder={"Koordination"} value={this.state.koordination} onChange={this.setKoordination}/>
                              <Label>Sprint: </Label>
                              <Input placeholder={"Sprint"} value={this.state.sprint} onChange={this.setSprint}/>
                              <Label>J and R: </Label>
                              <Input   placeholder={"J and R"} value={this.state.JandR} onChange={this.setJandR}/>
                          </div>
                          <div className="box_newtestbaterie">
                              <Label>Med_Ball: </Label>
                              <Input  placeholder={"Med Ball"} value={this.state.med_ball} onChange={this.setMedBall}/>
                              <Label>StWS:</Label>
                              <Input  placeholder={"StWS"} value={this.state.stws} onChange={this.setStWS}/>
                              <Label>Agitlität: </Label>
                              <Input  placeholder={"Agilität"} value={this.state.agilitaet} onChange={this.setAgilitaet}/>
                              <Label>BORG Test: </Label>
                              <Input   placeholder={"BORG Test"} value={this.state.borg} onChange={this.setBorg}/>
                              <Label>Beep Test: </Label>
                              <Input  placeholder={"Beep Test"} value={this.state.beep_test} onChange={this.setBeepTest}/>
                          </div>
                      </div>
                      <textarea placeholder=" Kommentar eingeben" className="kommentar_newleistung">

                      </textarea>
                      <div className="newTestbaterie_button">
                          <Confirmbutton onClick={postTestBaterie} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                              Speichern
                          </Confirmbutton>
                          <Confirmbutton onClick={closePopUp}  myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                              Abbrechen
                          </Confirmbutton>

                      </div>
                  </div>
            </Fragment>
        );
    }
}

const myStyle= {
    padding: '5px', marginTop: '4px', paddingRight: '15px', paddingLeft: '15px'}
export default NewTestBaterieView