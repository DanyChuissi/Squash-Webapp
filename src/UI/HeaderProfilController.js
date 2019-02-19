import React from 'react'
import HeaderProfilView from "./HeaderProfilView";


/**
 * @author Dany Chuissi
 *
 * Controller Klasse für das HeaderprofilView
 * @visibleName HeaderProfilController
 */

class HeaderProfilController extends React.Component{

    constructor(){
        super();
        this.state = {
            email: 'dani@test.de'}
    }

    setEmail =(e)=>{
        this.setState({email: e.target.value})
    }




    render(){
        return(
            <HeaderProfilView   className = "View"
                                email = {this.state.email}
                                setEmail = {this.setEmail()}
                                myFunction={showDropdown_Header()}

            />
        );
    }
}

/**
 * Wechseln zwischen Anzeigen und Ausblenden. wenn der Benutzer auf dem Dropdown klickt
 */
export function showDropdown_Header() {
    document.getElementById("myDropdown").classList.toggle("show");
}

export default HeaderProfilController;
