import React, { Component } from 'react';
import '../App.css';
import  "./EditRights.css";
import SpecificRights from "./SpecificRights";
import GroupRights from "./GroupRights";
import CoachList from "./CoachList";
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction} from "../UI/HeaderProfilController";


class EditRightsView extends Component {
    render() {

        const {
            email,
        }=this.props
        function myFunction2 (){
            console.log("test");
        }
        return (
            <div>
            <HeaderProfileView email = {email}  myFunction={myFunction} >
                <HeaderProfileView/>
            </HeaderProfileView>
            <div className="EditRights">

                <div id={"roleList"}>
                    <CoachList/>
                </div>

                <div id={"rights"}>
                    <h2>Zugriffsrechte</h2>
                    <div id={"specificRights"}>
                        <SpecificRights />
                    </div>
                   <div id={"groupRights"}>
                       <GroupRights/>
                   </div>
                </div>
            </div>
            </div>
        );
    }
}

export default EditRightsView;
