import React, {Component, Fragment} from 'react';
import Confirmbutton from "../../UI/Confirmbutton";
import './Kommentar.css';

class Komemntar extends Component{
    state={
        kommentare: [],
        kommentar: 'Kommentar Eingeben',
        id_kommentar: 0,
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
        let i = this.state.kommentar + 1;
        if(this.state.kommentar !== 'Kommentar Eingeben' && this.state.kommentar !== ''){
            this.setState({
                kommentare: [...this.state.kommentare, k],
                kommentar: 'Kommentar Eingeben',
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

        const komment = this.state.kommentare.map((d) =>
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

        return (
           <Fragment>
               <div className="kommentar_leistung">
                   <div>
                       {komment}
                   </div>
                   <textarea placeholder={this.state.kommentar} onChange={this.setKommentar}>

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

