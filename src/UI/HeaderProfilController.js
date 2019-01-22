import React from 'react'
import HeaderProfilView from "./HeaderProfilView";
//import NotificationsView from "../Notifications/NotificationsView";
import LoginView from "../Login/LoginView";
import PlayerListView from "../PlayerList/PlayerListView";

/**
 * @author Dany
 *
 * @visibleName HeaderProfilControll
 */
export function onLogoCenter() {
        return (
            0
            //<NotificationsView/>
        );
}
export const onLogoMenuClick = () => {
    alert("On MenuLogomenu gecklick ");
    return(

        <div>{this.state.Children.setStaten()}</div>
    );
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
export function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

export const onLogoCenterClick = () => {
    alert("test Click");
}
class HeaderProfilController extends React.Component{

    constructor(){
        super();
        this.state = {
            email: ''}
    }

    setEmail =(e)=>{
        this.setState({email: e.target.value})
    }




    render(){
        return(
            <HeaderProfilView   className = "View"
                                email = {this.state.email}
                                setEmail = {this.setEmail()}
                                onLogoCenterClick={onLogoCenterClick}
                                onLogoMenuClick = {onLogoMenuClick()}
                                myFunction={myFunction()}

            />
        );
    }
}

export default HeaderProfilController;
