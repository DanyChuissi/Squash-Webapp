import React, {Component} from 'react';
import './App.css';

class PlayerProfileController extends Component {
    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }


    onEdit=()=>{
        var editable_elements = document.querySelectorAll("[contentEditable=false]");
        editable_elements[0].setAttribute("contentEditable", true);
        editable_elements[1].setAttribute("contentEditable", true);
        editable_elements[2].setAttribute("contentEditable", true);
        editable_elements[3].setAttribute("contentEditable", true);
        editable_elements[4].setAttribute("contentEditable", true);
        editable_elements[5].setAttribute("contentEditable", true);
        editable_elements[6].setAttribute("contentEditable", true);
        editable_elements[7].setAttribute("contentEditable", true);
        editable_elements[8].setAttribute("contentEditable", true);
        editable_elements[9].setAttribute("contentEditable", true);
        editable_elements[10].setAttribute("contentEditable", true);
        editable_elements[11].setAttribute("contentEditable", true);
        editable_elements[12].setAttribute("contentEditable", true);
        editable_elements[13].setAttribute("contentEditable", true);
    }





//TODO PlayerProfileView importieren, alle Properties übertragen und Methoden für Bearbeiten des Profils schreiben
render()
{
    return (
        <text>PlayerProfileController</text>
    );
}
}

export default PlayerProfileController