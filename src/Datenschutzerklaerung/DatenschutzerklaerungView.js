import React, { Component } from 'react';
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
import "./Datenschutzerklaerung.css";
import datenS1 from './Datenschutz1.png'
import datenS2 from './Datenschutz2.png'
import datenS3 from './Datenschutz3.png'
//window.PDFJS.workerSrc  = process.env.PUBLIC_URL + '/pdf.worker.js'

class DatenschutzerklaerungView extends Component{

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div >
                <div className="headerDatenS">
                    <img src={logomenuMitte} style={{ height: '18vmin', width: '25vmin'}}/>
                </div>
                <div className="mainDS">
                    <h1>Datenschutzerklärung</h1>
                    Sehr geehrte Nutzerin, sehr geehrter Nutzer,<br/>
                    der Schutz Ihrer personenbezogenen und gesundheitlichen Daten ist uns wichtig. Nach der
                    EU-Datenschutz-Grundverordnung (DSGVO) sind wir verpflichtet, Sie darüber zu informieren,
                    zu welchem Zweck unsere Anwendung Daten erhebt, speichert oder weiterleitet. Diesem
                    Dokument können Sie auch entnehmen, welche Rechte Sie als betroffene Person in Bezug
                    auf den Datenschutz haben.<br/>
                    <br/>
                    <br/>
                    <h3>Verantwortlichkeit für die Datenverarbeitung </h3><br/>
                    <br/>

                    Max Mustermann<br/>
                    Musterstraße 10<br/>
                    44444 Musterstadt<br/>
                    <br/>
                    Tel.: 01234 567890<br/>
                    Mail: Mustermann@datenschutz.de<br/>
                    <br/>


                    <h3>Zweck der Datenverarbeitung</h3><br/>
                    Die erhobenen Daten sollen dabei helfen den IST-Zustand des Athleten. Mithilfe der
                    Informationen soll überprüft werden, ob sich der Athlet im richtigen Trainingsbereich
                    befindet. Die Anwendung soll darstellen, ob das aktuelle Training sinnvoll ist, oder
                    bestimmte Aspekte angepasst und modifiziert werden könnten. Hierbei wird jedes Training
                    eines Athleten individuell betrachtet. Mithilfe der erhobenen Daten und zunehmender
                    Trainingserfahrung kann der Athlet beispielsweise ein Formtief plausibel erklären und besser
                    damit umgehen. Zusätzlich können Ziele definiert, Makrozyklen eingetragen und
                    Trainingsergebnisse verwaltet werden.<br/>
                    Um den IST-Zustand ermitteln zu können werden personenbezogene Daten, insbesondere
                    Gesundheitsdaten verarbeitet. Daten die durch die Anwendung ermittelt werden sind:<br/>
                    - Name, Vorname<br/>
                    - E-Mail-Adresse<br/>
                    - Geburtsdatum<br/>
                    - Geschlecht<br/>
                    - Telefonnummer<br/>
                    - Herzfrequenz<br/>
                    - Körpergewicht<br/>
                    - Körpergröße<br/>
                    - Verletzungen (sollten Dokumentiert werden)<br/>
                    - Schlafdauer<br/>
                    - Trainingsdokumentationen<br/>
                    Die Erhebung der Gesundheitsdaten ist Voraussetzung um die individuelle Förderung des
                    Spielers zu steigern. Werden die notwendigen Informationen nicht bereitgestellt, kann kein
                    zuverlässiger IST-Zustand für das Training des Athleten erstellt werden.<br/>
                    <br/>
                    <br/>
                    <h3>Empfänger der Daten</h3><br/>
                    Ihre Daten werden durch die Anwendung nicht an Dritte übermittelt. Sämtliche erhobenen
                    Daten werden nur mit Personen geteilt, die einen Zugriff durch den Verein erhalten haben
                    und dazu berechtigt sind diese Daten zu sehen. Empfänger dieser Informationen werden der
                    Direktor, der Bundestrainer, der U13-U19 Trainer der jeweiligen Altersklasse sein, sowie der
                    Männer- bzw. Frauentrainer. Bei Bedarf können auch Sportwissenschaftler und
                    Athletikexperten involviert werden. Bei minderjährigen Nutzern haben die Eltern ebenfalls
                    einen lesenden Zugriff auf die Daten ihres Kindes.<br/>
                    <br/>
                    <br/>
                    <h3>Speicherung der Daten</h3><br/>
                    Sämtliche Daten, dies umfasst die Leistungsdiagnostik, Messungen des Körpergewichts und
                    Körpergröße sowie die Vitaldaten ,werden bis zur Profillöschung erhalten bleiben. Erst
                    nachdem das Profil gelöscht wurde werden auch diese Daten gelöscht, da Spieler auch
                    erneut nach einer Pause in den Kader können und diese so ihre alten Daten weiterhin
                    verwenden können.<br/>
                    <br/>
                    <br/>
                    <h3>Rechte der Nutzer</h3><br/>
                    Als Nutzer der Anwendung stehen Ihnen nach der DSGVO verschiedene Rechte zu.<br/>
                    <br/>
                    <br/>

                    <h5>Recht auf Auskunft:</h5><br/>
                    Als betroffene Person haben Sie das Recht zu erfahren ob personenbezogene Daten
                    verarbeitet werden. Wenn Daten von Ihnen verarbeitet werden können Sie weiterführend
                    Auskunft über die Zwecke der Verarbeitung, welche Daten verarbeitet werden, wer Zugang
                    zu den Daten hat und wie lange die Daten gespeichert werden.<br/>
                    <br/>
                    <br/>

                    <h5>Recht auf Berichtigung:</h5><br/>
                    Falls personenbezogene Daten falsch oder unvollständig sein sollten haben Sie das Recht auf
                    die Korrektur dieser Daten.<br/>
                    <br/><br/>


                    <h5>Recht auf Einschränkung:</h5><br/>
                    Sie haben das Recht die Verarbeitung der Daten einzuschränken, falls die Richtigkeit der
                    Daten bestritten wird. In diesem Falle muss die verantwortliche Person die Richtigkeit der
                    Daten überprüfen. Sollte die Verarbeitung der Daten unrechtmäßig erfolgen aber die
                    Löschung der Daten von Ihnen abgelehnt wird können diese Datenebenfalls eingeschränkt
                    werden. Falls die personenbezogenen Daten nicht mehr gebraucht werden, die betroffene
                    Person diese jedoch noch zur Verteidigung von Rechtsansprüchen benötigt, können die
                    Daten ebenfalls eingeschränkt werden.<br/>

                    Sollte eine Einschränkung der Daten vorliegen muss die betroffene darüber informiert, wenn
                    diese Einschränkung aufgehoben wird<br/><br/>

                    <h5>Recht auf Löschung:</h5><br/>
                    Falls die erhobenen Daten nicht mehr für die Verarbeitung notwendig sind, die Einwilligung
                    wiederrufen wurde, die Daten unrechtmäßig verarbeitet wurden oder wenn die Löschung
                    zur Erfüllung einer rechtlichen Verpflichtung durch den europäischen oder nationalen
                    Gesetzgeber vorgesehen wurde.<br/>
                    Sollte eine verantwortliche Person Daten des Betroffenen veröffentlicht haben, sind diese
                    Daten zu Löschen.<br/>
                    <br/>
                    <h5>Recht auf Widerruf:</h5><br/>
                    Die betroffene Person hat jederzeit das Recht die Einwilligung zu widerrufen. Die bis zu
                    diesem Zeitpunkt erhobenen Daten bleiben jedoch rechtmäßig.<br/>
                    <br/>
                    <br/>

                    <h3>Minderjährige Nutzer</h3><br/>
                    Bei Nutzern unter 18 Jahren ist neben der Einverständniserklärung des Athleten auch eine
                    weitere Einverständniserklärung der Eltern einzuholen. Die Eltern bekommen einen Account
                    und haben mit diesem einen leserlichen Zugriff auf die Daten ihres Kindes. Sie haben nicht
                    die Möglichkeit etwas einzutragen.<br/>
                    Sollte der Athlet die Volljährigkeit erreichen kann der Zugang der Eltern auf Wunsch des
                    Athleten gesperrt werden. Andernfalls bleibt dieser so lange bestehen, bis der Athlet einen
                    neuen Vertrag unterzeichnet.<br/>
                    <br/>

                    <h3>Recht auf Beschwerde bei einer Aufsichtsbehörde</h3><br/>
                    Sollten Sie der Meinung sein, dass die Verarbeitung der personenbezogenen Daten gegen
                    die DSGVO verstößt haben Sie das Recht bei der zuständigen Aufsichtsbehörde eine
                    Beschwerde einzulegen.<br/>
                    Die Aufsichtsbehörden für die einzelnen Bundesländer sind in der anschließenden Liste
                    aufgeführt.<br/>
                    <br/>
                    <div>
                    <img className="bsimg" src={datenS1}/>

                    <img  className="bsimg" src={datenS2} />

                    <img   className="bsimg" src={datenS3} />

                    </div>
                </div>
            </div>
        );
    }
}

export default DatenschutzerklaerungView