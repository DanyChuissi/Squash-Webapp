import React, {Component, Fragment} from 'react';
import Confirmbutton from "../../UI/Confirmbutton";
import './Kommentar.css';

class Komemntar extends Component{
    state={
        kommentare: [],
        kommentarPlaceholder: 'Neuer Kommentar eingeben',
        id_kommentar: 0,
        kommentar: '',
    }
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
    zeigeKommentar = (id) => {
        let erg : '';
        this.state.kommentare.map( (komment) => {
            if(komment.id === id){
                 erg = komment;
            }
        });

        this.setState({
            kommentar: erg.text,
        })

    }
    setKommentar = (e) => {
    this.setState({
        kommentar: e.target.value,
    })
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
                   <textarea placeholder={this.state.kommentarPlaceholder} onChange={this.setKommentar}>

                          </textarea>

                   <Confirmbutton onClick={this.kommentar_posten} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                       Kommentar senden
                   </Confirmbutton>
               </div>
           </Fragment>
         );
   }
}

export default Komemntar;

