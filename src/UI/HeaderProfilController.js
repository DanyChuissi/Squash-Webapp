import React from 'react'
import HeaderProfilView from "./HeaderProfilView";
import NotificationsView from "../Notifications/NotificationsView";

/**
 * @author Dany
 *
 * @visibleName HeaderProfilControll
 */
export function onLogoCenter() {
        return (
            <NotificationsView/>
        );
}
export const onLogoMenuClick = () => {
    alert("On MenuLogomenu gecklick ");
    return(
        <div> <NotificationsView/></div>
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

    state ={
        email:'',
    }
    setEmail = (e) => {
        this.setState({email: e.target.value})
    }
    render(){
        return(
            <HeaderProfilView   className = "View"
                                email = {this.state.email}
                                setEmail = {this.setEmail()}
                                onLogoCenterClick={onLogoCenterClick}
                                onLogoMenuClick = {onLogoMenuClick()}
                                onLogoCenter ={this.onLogoCenter()}
                                myFunction={myFunction()}
            />
        );
    }
}

export default HeaderProfilController;