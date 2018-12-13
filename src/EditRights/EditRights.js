import React, { Component } from 'react';
import '../App.css';
import  "./EditRights.css";
import SpecificRights from "./SpecificRights";
import GroupRights from "./GroupRights";
import CoachList from "./CoachList";


class EditRightsView extends Component {
    render() {

        return (
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
        );
    }
}

export default EditRightsView;
