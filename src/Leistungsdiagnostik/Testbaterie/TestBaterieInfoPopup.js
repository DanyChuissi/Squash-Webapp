import React, {Component, Fragment} from 'react';
import './Testbaterie.css';

/*
* InfoNummer: Props Nummer und zugerörige Info_Content
* 0 = Allgemeine Info der Testbaterie
* 1 = Beweglichkeit
* 2 = Reaktion
* 3= Koordination
* 4 = Sprint
* 5 = J & R
* 6 = Med Ball
* 7 =StWs
* 8 = Agilität
* 9 = Borg test
* 10 = Beep test
* */

class TestBaterieInfoPopup extends Component{

   render(){
        const {
            InfoNummer,
       } = this.props;

        let Infos;
        switch (InfoNummer) {
            case 0:
                Infos =
                    <div  className="popupInfo">
                        <h2>Sportmotorische Testbatterie</h2>
                        <text>
                            Ziel der entwickelten Testbatterie zur Messung der ausgewählten sportmotorischen
                            Fähigkeiten ist es, ein Leistungsprofil Squash zu erstellen und die Frage zu klären,
                            welche Ausprägungen die jeweiligen Leistungsmerkmale in Abhängigkeit vom
                            Spielniveau haben.
                        </text>
                        <h2>   Sportmotorische Tests</h2>
                        <text>  Unter sportmotorischen Tests versteht man wissenschaftliche Routineverfahren zur
                            Bestimmung eines oder mehrerer theoretisch definierbarer und empirisch abgrenzbare
                            Persönlichkeitsmerkmale bzgl. des individuellen, allgemeinen oder speziellen
                            motorischen Fähigkeitsniveaus (Vgl. Bös, K., 1987). Sie bestehen aus Bewegungsaufgaben,
                            bei denen die Probanden aufgefordert werden, das im Sinne der Aufgabenstellung
                            bestmögliche Ergebnis zu erzielen. Die gemessenen Daten lassen dann
                            über den Vergleich mit offiziellen Leistungsnormen eine Bewertung des individuellen
                            Ausprägungsgrades der jeweils gemessenen motorischen Fähigkeit zu.
                        </text>
                        <h2>  Durchführung</h2>
                         <text>   Untersucht werden aus ökonomischen Gründen die herausgestellten allgemeinen
                            konditionellen Fähigkeiten mittels einer nach dem Vorbild verschiedener Testverfahren
                            in der Literatur zusammengestellten Testbatterie. Die Auswahl der einzelnen
                            Tests der Testbatterie erfolgte nach den Prinzipien Objektivität, Reliabilität, Validität,
                            Vergleichbarkeit, Ökonomie und Nützlichkeit.
                         </text>
                        <h2>   Die Testbatterie </h2>

                         <text>   Testabfolge:<br/>
                            1. Beweglichkeitstest<br/>
                            2. Reaktionstest<br/>
                            3. Koordinationstest<br/>
                            4. Sprinttest<br/>
                            5. Agilitätstest<br/>
                            6. Krafttests<br/>
                            7. Ausdauertest<br/>
                        </text>
                    </div>;
                break;
            case 1:
                Infos =
                <div  className="popupInfo">
                    <h2>Beweglichkeit</h2>
                    <text>


                        <text className="textBold" > Beweglichkeitstest: </text>Sit-and-Reach<br/>
                        <br/>
                        <text className="textBold" > Testinhalt: </text>Rumpfbeweglichkeit und Dehnfähigkeit der Rumpf- und hinteren
                        Beinmuskulatur.<br/>
                        <text className="textBold" > Aufgabenstellung: </text>Der Proband sitzt ohne Schuhe mit gestreckten Beinen
                        gegen die Sit-and-Reach-Box auf dem Boden mit den Händen an der 23 cm-
                        Markierung (Beginn der Sit-and-Reach-Box)und versucht seinen Oberkörper mit
                        gestreckten Armen so weit wie möglich nach vorne in Richtung der Fußspitzen
                        über die Sit-and-Reach-Vorrichtung zu beugen. Die maximale Endposition muss
                        mind. 2 s gehalten werden.<br/>
                        <text className="textBold" > Messung und Wertung: </text>Gemessene Distanz zwischen Fingerspitze und Fußsohlenniveau
                        in cm. Jeder Proband erhält zwei Versuche, von denen der bessere
                        gewertet wird. Die Leistungsbewertung erfolgt per Normtabelle (Vgl. ACSM’s
                        Guidelines, 2010).<br/>
                        <text className="textBold" > Organisation: </text>Vor Beginn wird dem Probanden die Bewegungsaufgabe demonstriert.<br/>
                        <text className="textBold" > Testgeräte: </text>Magnesia, Maßband oder Sit-and-Reach-Vorrichtung.<br/>
                    </text>
                </div>;
                break;
            case 2:
                Infos =
                <div  className="popupInfo">
                    <h2> Reaktionsfähigkeit</h2>

                    <text>
                        <text className="textBold" > Reaktionsfähigkeitstest: </text>Fallstabtest<br/>
                        <br/>
                        <text className="textBold" >Testinhalt: </text>Reaktionszeit auf Bewegung.<br/>
                        <text className="textBold" > Aufgabenstellung: </text>Der Proband kniet vor einer Bank, auf der sein geschickterer
                        Arm mit der Kleinfingerseite ruht. Finger und Daumen sind im Winkel
                        von 90_ gestreckt. Der Versuchsleiter hält einen 40 cm langen, dünnen Stab
                        senkrecht ca. 1 cm von der Handinnenseite und vom Daumen des Probanden
                        entfernt. Die Stabunterseite schließt mit der Unterkante der Hand ab. Der Stab
                        wird fallen gelassen und der Proband versucht, den fallenden Stab so schnell
                        wie möglich zu greifen.<br/>
                        <text className="textBold" > Messung und Wertung: </text>Gemessen wird die Entfernung der Stabunterkante
                        von der Unterkante der Hand. Jeder Proband erhält zwei Versuche, von denen
                        der bessere gewertet wird. Die Leistungsbewertung erfolgt per Normtabelle
                        (Vgl. Loosch, 1999).<br/>
                        <text className="textBold" > Organisation: </text>Vor Beginn der Testung wird dem Probanden der Ablauf demonstriert.
                        Anschließend erhält jeder Proband zwei ungewertete Probeversuche.<br/>
                        <text className="textBold" > Testgeräte: </text>40 cm langer, dünner Stab, Bank, Maßband.<br/>
                    </text>
                </div>;
                break;
            case 3:
                Infos =
                    <div  className="popupInfo">
                        <h2> Koordination</h2>
                        <text>
                            <text className="textBold" > Koordinationstest: </text>Einbeinstand<br/>
                            <br/>
                            <text className="textBold" >Testinhalt: </text>Großmotorische Koordination der unteren Extremitäten bei statischen
                            Präzisionsaufgaben.<br/>
                            <text className="textBold" > Aufgabenstellung: </text>Der Proband steht mit dem bevorzugten Bein 60 s lang auf
                            einer T-Schiene. Nach 20 s schließt der Proband seine Augen. Nach weiteren
                            20 s legt der Proband den Kopf mit geschlossenen Augen in den Nacken. Das
                            freie Bein darf weder den Boden, die T-Schiene, noch das Standbein berühren.<br/>
                            <text className="textBold" > Messung und Wertung:  </text>Jeder Kontakt des freien Beins mit der T-Schiene,
                            dem Standbein oder dem Boden gilt als Fehlerpunkt.<br/>
                            <text className="textBold" > Organisation: </text>Jeder Proband erhält zwei Versuche, von denen der bessere
                            gewertet wird. Zwischen den Versuchen ist eine Pause von mind. einer Minute
                            einzuhalten.<br/>
                            <text className="textBold" > Testgeräte:  </text>Niveaugleiche Ebene, T-Schiene, Stoppuhr.<br/>

                        </text>
                    </div>;
                break;
            case 4:
                Infos =
                    <div  className="popupInfo">
                        <h2> Schnelligkeit</h2>
                        <text>


                            <text className="textBold" > Schnelligkeitstest: </text>S30m-Sprint<br/>
                            <br/>
                            <text className="textBold" > Testinhalt: </text>Antrittsschnelligkeit, Beschleunigungsfähigkeit und Laufgeschwindigkeit.<br/>
                            <text className="textBold" > Aufgabenstellung: </text>Der Proband sprintet 30m aus dem Hochstart von einer
                            1m vor der ersten Lichtschranke postierten Startlinie.<br/>
                            <text className="textBold" > Messung und Wertung: </text>Messung der Teilzeiten nach 5, 10 und 30m; jeder
                            Proband erhält zwei Versuche, von denen der bessere gewertet wird.<br/>
                            <text className="textBold" > Organisation: </text>Zwischen den beiden Versuchen ist auf eine vollständige Erholung
                            des Probanden zu achten (Regenerationsphase von 2 min). Es ist für
                            einen ausreichenden Auslauf zu sorgen.<br/>
                            <text className="textBold" > Testgeräte: </text>Niveaugleiche Ebene, Klebeband (Start- und Zielmarkierungen),
                            Lichtschrankensystem mit vier Lichtschranken (alternativ vier Stoppuhren),
                            Maßband.<br/>
                        </text>
                    </div>;
                break;

            case 5:
                Infos =
                    <div  className="popupInfo">
                        <h2>Schnellkraft</h2>
                        <text>
                            <text className="textBold" >Krafttest untere Extremitäten: </text>Jump and Reach<br/>
                            <br/>
                            <text className="textBold" > Testinhalt: </text>Explosivkraft der unteren Extremitäten.<br/>
                            <text className="textBold" > Aufgabenstellung: </text>Der Proband tritt vorlings an eine Wand, streckt die Hände
                            in die Hochhalte und markiert mit den Spitzen der Mittelfinger in Schulterbreite
                            die Reichhöhe. Die beiden Markierungen sollen dabei auf gleicher Höhe liegen.
                            Anschließend tritt der Proband ca. 20 bis 30 cm von der Wand zurück, stellt sich
                            seitlich zu ihr, springt beidbeinig nach beliebiger Ausholbewegung vom Boden
                            ab und tippt mit der Spitze des Mittelfingers der nahe zur Wand gelegenen Hand
                            möglichst hoch an die Wand. Um die jeweiligen Berührpunkte zu markieren,
                            werden die Finger mit Kreide bestrichen.<br/>
                            <text className="textBold" > Messung und Wertung: </text>Die Differenz der beiden Markierungshöhen in cm
                            bildet die Messgröße. Jeder Proband hat zwei Versuche, von denen der bessere
                            Versuch, also der, mit der höheren Sprunghöhe, gewertet wird. Die Leistungsbewertung
                            erfolgt per Normtabelle (Vgl. Beck/Bös, 1995).<br/>
                            <text className="textBold" > Organisation: </text>Jeder Proband erhält zwei ungewertete Probeversuche.
                            Testgeräte: Wand, Maßband, Magnesia, Hocker.<br/>
                        </text>
                    </div>;
                break;

            case 6:
                Infos =
                    <div  className="popupInfo">
                        <h2>Schnellkraft</h2>
                        <text>
                            <text className="textBold" > Krafttest obere Extremitäten: </text>Medizinballstoß mit fixiertem Rumpf<br/>
                        <br/>
                            <text className="textBold" > Testinhalt: </text>Schnellkraft der oberen Extremitäten (Arm- und Schultermuskulatur).<br/>
                            <text className="textBold" > Aufgabenstellung: </text>Der Proband sitzt auf einer Bank mit dem Rücken zur
                            Wand und berührt diese mit geraden Rücken. Der Medizinball wird mit beiden
                            Händen umfasst, vor die Brust gehalten und mit einem Druckpassstoß so weit
                            wie möglich nach vorn geworfen. Der Rücken darf dabei den Wandkontakt nicht
                            verlieren.<br/>
                            <text className="textBold" > Messung und Wertung: </text>Jeder Proband erhält zwei Versuche, von denen der
                            bessere gewertet wird. Gemessen wird die Stoßweite in cm gemessenen von
                            der Wand bis zum Landepunkt des Balls. Die Leistungsbewertung erfolgt per
                            Normtabelle (Vgl. Beck/Bös, 1995).<br/>
                            <text className="textBold" > Organisation: </text>Jeder Proband erhält zwei ungewertete Probeversuche.<br/>
                            <text className="textBold" > Testinhalt: </text>Testgeräte: Niveaugleiche Ebene, Medizinball (2 kg), Bank, Wand, Maßband.<br/>
                        </text>
                    </div>;
                break;

            case 7:
                Infos =
                    <div  className="popupInfo">
                        <h2>Schnellkraft</h2>
                        <text>
                            <text className="textBold" >Krafttest untere Extremitäten:  </text>Standweitsprung<br/>
                            <br/>
                            <text className="textBold" > Testinhalt: </text>Schnellkraft der unteren Extremitäten.<br/>
                            <text className="textBold" > Aufgabenstellung: </text>Der Proband versucht von einer markierten Absprunglinie
                            aus mit unmittelbar an der Absprunglinie positionierten Füßen durch beidbeinigem
                            Absprung möglichst weit nach vorne zu springen. Die Landung erfolgt
                            beidbeinig auf einer zur Absprunglinie niveaugleichen Ebene. Der Landepunkt
                            wird markiert.<br/>
                            <text className="textBold" > Messung und Wertung: </text>Gemessen wird die Differenz zwischen Absprunglinie
                            und liniennächstem Landeabdruck in cm. Ein Zurückgreifen mit den Armen
                            während der Landung oder ein Nach-vorne-fallen-lassen ist nicht zulässig. In
                            diesen Fällen ist jedoch ein erneuter Versuch erlaubt. Jeder Proband erhält
                            zwei Versuche, von denen der bessere gewertet wird. Die Leistungsbewertung
                            erfolgt per Normtabelle (Vgl. Beck/Bös, 1995).<br/>
                            <text className="textBold" > Organisation: </text>Zu Beginn der Testung wird dem Probanden der Standweitsprung
                            demonstriert und dabei auf die positive Wirkung des Armschwungs
                            hingewiesen. Jeder Proband erhält zwei ungewertete Probeversuche.<br/>
                            <text className="textBold" > Testgeräte: </text>Niveaugleiche Ebene, Maßband, Magnesia.<br/>
                        </text>
                    </div>;
                break;

            case 8:
                Infos =
                    <div  className="popupInfo">
                        <h2>  Agilität</h2>
                        <text>
                            <text className="textBold" > Agilitätstest: </text>Change-of-Direction Speed Test<br/>
                            <br/>
                            <text className="textBold" > Testinhalt: </text>Agilität.<br/>
                            <text className="textBold" >Aufgabenstellung: </text>Der Proband durchläuft von einer Startlinie aus auf ein
                            Kommando so schnell wie möglich einen vorgegebenen Parcours, der durch
                            große und kleine Hütchen markiert ist. Dabei gilt es, die kleineren Hütchen
                            mit einer Hand zu berühren, die großen Hütchen müssen lediglich umlaufen
                            werden. Der Test endet mit Überqueren der Ziellinie (Wilkonson, M., et al. 2012).<br/>

                            <text className="textBold" > Messung und Wertung: </text>Gemessen wird die für das Durchlaufen des Parcours
                            benötigte Zeit. Jeder Proband erhält zwei Versuche, von denen der bessere
                            gewertet wird.<br/>
                            <text className="textBold" > Organisation: </text>Organisation: Vor Beginn der Testung wird dem Probanden die Verlauf über
                            den Verlauf des Parcours aufgeklärt. Es werden jedoch keine Hinweise zu
                            effektiven Lauftechniken gegeben. Zwischen den beiden Versuche ist auf eine
                            vollständige Erholung des Probanden zu achten (Pause von 2 min zwischen
                            den Versuchen).<br/>
                            <text className="textBold" >Testgeräte: </text>Niveaugleiche Ebene, Klebeband (Start-, Ziellinie), 7 große und 8
                            kleine Hütchen, Stoppuhr.<br/>
                        </text>
                    </div>;
                break;

            case 9:
                Infos =
                    <div  className="popupInfo">
                        <h2>VO2max Test</h2>
                        <text>
                            Wir nehmen die HF vorm Laufen und nach jeder Stufe und bilden dann die Differenz zwischen den Werten der jeweils aufeinanderfolgenden Stufen.
                            Bei dem Raums haben wir z.B.: +17, +18, +17, +10 <br/>
                            In der Regel sind diese Differenz entweder schon von Anfang an sehr ähnlich oder pendeln sich am Ende gegen einen Wert ein. Diesen Wert wählen wir dann als Steigung für unsere Herzfrequenz im Belastungsverlauf.<br/>
                            Ohne die +10 würden wir in diesem Fall 17 (als Median) wählen. Rechnen wir mal mit 17 weiter… <br/>
                            Jetzt benötigen wir die maximale HF (am besten exakt, notfalls über die Formel 220-Alter): das wäre also hier 220-17=203.<br/>
                            Wir berechnen weiter die Differenz zwischen der HFmax und der HF der letzten Stufe: 203-188=15.<br/>
                            Er hat also noch 15 Schläge Kapazität bis zum Maximum.<br/>
                            Wenn wir jetzt wissen, wie schnell seine HF bei zunehmender Belastung (mit fixem Belastungsprotokoll) steigt, können wir also ausrechnen, wieviele Stufen er noch hätte absolvieren können.<br/>
                            Für eine angenommene Steigung von 17 würden wir also rechnen: 15/17=0,88. Er könnte also noch 0,88 Stufen laufen und würde somit den bei einer Geschwindigkeit von 14+2x0,88=15,76 km/h beenden.<br/>
                            <br/>
                            Damit können wir jetzt seine VO2max abschätzen: VO2max (ml/kg/min)=4,25+0,18xv(m/min)=4,25+0,18x15,76/3,6x60=51,53.<br/>
                            <br/>
                            Jetzt könnte es bei diesem Spieler allerdings sein, dass sich seine HF erst sehr spät der hohen Belastung anpasst und seine eigentliche Steigung eher bei 10 liegt. Das würde ich nach deinem subjektiven Eindruck entscheiden: wenn er noch super fit wirkte, dann ist die Wahrscheinlichkeit, dass er die nächste Stufe
                            schon nicht mehr ganz geschafft hätte, eher gering. Zusätzlich kann dir der Wert auf der BORG-Skala helfen, um abzuschätzen, wie k.o. er schon war.<br/>
                            Berechnen wir das Ganze nochmal mit einer HF-Steigung von 10, so erhalten wir: VO2max=4,25+0,18x17/3,6x60=55,5.
                        </text>
                    </div>;
                break;

            case 10:
                Infos =
                    <div  className="popupInfo">
                        <h2>Ausdauer</h2>
                        <text>


                            <text className="textBold" >Ausdauerleistungstest: </text>20m-Shuttle run Test <br/>
                            <br/>
                            <text className="textBold" >Testinhalt: </text>Maximale Sauerstoffaufnahme zur Bewertung der aeroben Ausdauerleistungsfähigkeit. <br/>
                            <text className="textBold" >Aufgabenstellung: </text>Der Proband steht im Hochstart an der markierten Startlinie. <br/>
                            Auf ein akustisches Signal beginnt der Proband zunächst im gehen.
                            Bewältigt werden muss eine durch zwei Linien markierte Strecke von 20m. Die
                            Laufgeschwindigkeit wird dabei über den Abstand der akustischen Signale
                            bestimmt. Der Proband soll sich dabei immer so schnell fortbewegen, dass er
                            mit ertönen des Signals jeweils das Streckenende erreicht. Eine Genauigkeit
                            von _1 bis 2m ist ausreichend. In Folge einer stetigen Verkürzung der zeitlichen
                            Abstände der akustischen Signale kommt es somit zu einer progressiven
                            Geschwindigkeitssteigerung. Der Test ist beendeten, wenn es dem Probanden
                            nicht möglich ist, die 20m-Strecke in der durch das akustische Signal
                            vorgegebenen Geschwindigkeit zurückzulegen (Abstand > 5m) (Vgl. Beck/Bös,
                            1995). <br/>
                            <text className="textBold" >Messung und Wertung: </text>Gemessen wird die Anzahl der Minuten (=Stufen,
                            auch halbe Stufen), in denen die vorgegebene Geschwindigkeit eingehalten
                            werden kann. Die Leistungsbeurteilung erfolgt per Normtabelle (Beck/Bös,
                            1995). <br/>
                            <text className="textBold" >Organisation: </text>Der Shuttle run Test bildet den Abschluss der Testbatterie. Er
                            kann von bis zu 20 Probanden gleichzeitig ausgeführt werden. Ein spezielles
                            Aufwärmen vor dem Test ist nicht zusätzlich erforderlich. <br/>
                            <text className="textBold" >Testgeräte: </text>Niveaugleiche Fläche, Klebeband (Streckenmarkierung), Shuttle
                            run- CD/-MP3 mit akustischen Signalen, CD-bzw. MP3-Player. <br/>

                        </text>
                    </div>;
                break;
        }


        return (
            <Fragment>
                {Infos}
            </Fragment>
        );
    }

}
export default TestBaterieInfoPopup;