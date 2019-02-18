import React, {Component, Fragment} from 'react';
import Confirmbutton from "../../UI/Confirmbutton";
import './Kommentar.css';


/**
 *@author Dany Chuissi
 *
 * Klasse für die Kommentar, die im Leistungdiagnostik benutzt wurde
 *
 *
 * @visibleName Kommentar
 */
class Komemntar extends Component{
    state={
        kommentare: [],
        kommentarPlaceholder: 'Neuer Kommentar eingeben',
        id_kommentar: 0,
        kommentar: '',
        id_kommentarToChange: -1,
        hiddeChangeButton: true,
    }
    /**
     * neue Kommentare sollen mit der Methode gepostet. zurzeit werden diese nur in einem feld hinzugefügt
     */
    kommentar_posten = () => {
        let date= new Date().toLocaleString();
        let  k =
            {
                id: this.state.id_kommentar,
                name: 'trainer',
                text: this.state.kommentar,
                datum:  date,
            };
        let i = this.state.id_kommentar + 1;
        if(this.state.kommentar !== 'Neuer Kommentar eingeben' && this.state.kommentar !== ''){

            this.setState({
                kommentar: '',
                kommentare: [...this.state.kommentare, k],
                id_kommentar: i,
            })
        }
        else{
            alert("Bitte Kommentar eingeben")
        }

    }
    /**
     * Die Methode sucht den Kommentar, der zu den eingegebenen Id passt
     * @param id
     */
    zeigeKommentar = (id) => {
        let erg : '';
        this.state.kommentare.map( (komment) => {
            if(komment.id === id){
                 erg = komment;
            }
        });

        this.setState({
            kommentar: erg.text,
            id_kommentarToChange: id,
            hiddeChangeButton: !this.state.hiddeChangeButton,
        })

    }
    setKommentar = (e) => {
    this.setState({
        kommentar: e.target.value,
    })
   }
    /**
     * Change Kommentar ändern ein existierenden Kommentar
     */
   changeKommentar = () => {
        //let komment = this.state.kommentare[this.state.id_kommentarToChange];
            let kommentare2 = this.state.kommentare;
            if(this.state.id_kommentarToChange !== -1) {
                kommentare2[this.state.id_kommentarToChange].text = this.state.kommentar;
                this.setState({
                    kommentare: kommentare2,
                    hiddeChangeButton: !this.state.hiddeChangeButton,
                    kommentar: '',
                })
            }
   }

   render () {
        const{
            datum
        } = this.props;

        const aktuelle_Kommentar = this.state.kommentar;

        const komments = this.state.kommentare.map((d) =>
        <div className="alteKommentat" key={d.id}>
            <div>
                <div>
                    {d.name}
                </div>
                <div className="date_format">
                    {d.datum}
                </div>

            </div>
            <button onClick={() =>this.zeigeKommentar(d.id)}>
              edit
            </button>
            <div>
                {d.text}
            </div>
        </div>);

        /*const myTextArea = <textarea placeholder={this.state.kommentarPlaceholder} onChange={this.setKommentar}>
                                {this.state.kommentar}
                          </textarea>*/


        return (
           <Fragment>
               <div className="kommentar_leistung">
                   <div>
                       {komments}
                   </div>
                 {/*  {myTextArea}*/}
                   <textarea value={this.state.kommentar} placeholder="Neuer Kommentar eingeben" onChange={this.setKommentar}>

                   </textarea>

                   <Confirmbutton hidden={!this.state.hiddeChangeButton} onClick={this.kommentar_posten} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                       Kommentar senden
                   </Confirmbutton>
                   <Confirmbutton hidden={this.state.hiddeChangeButton} onClick={this.changeKommentar} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                       Änderung senden
                   </Confirmbutton>
               </div>
           </Fragment>
         );
   }
}

export default Komemntar;

