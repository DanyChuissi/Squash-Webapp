import React, {Component} from 'react';
import './EditRights.css'

class GroupRights extends Component {
    render() {
        return (
            <div className="GroupRights">
                <table id={"groupRightsTable"}>
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Profildaten</th>
                        <th>Trainingsdaten</th>
                        <th>Leistungsdaten</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Herren</th>
                        <td><input type="checkbox" id="maleAllR" value="checked"></input></td>
                        <td><input type="checkbox" id="maleProfileR" value="checked"></input></td>
                        <td><input type="checkbox" id="maleTrainingR" value="checked"></input></td>
                        <td><input type="checkbox" id="malePerformanceR" value="checked"></input></td>
                    </tr>
                    <tr>
                        <th>Damen</th>
                        <td><input type="checkbox" name="femaleAllR" value="checked"></input></td>
                        <td><input type="checkbox" name="femaleProfileR" value="checked"></input></td>
                        <td><input type="checkbox" name="femaleTrainingR" value="checked"></input></td>
                        <td><input type="checkbox" name="femalePerformanceR" value="checked"></input></td>
                    </tr>
                   <tr>
                       <th>u19</th>
                       <td><input type="checkbox" name="u19AllR" value="checked"></input></td>
                       <td><input type="checkbox" name="u19ProfileR" value="checked"></input></td>
                       <td><input type="checkbox" name="u19TrainingR" value="checked"></input></td>
                       <td><input type="checkbox" name="u19PerformanceR" value="checked"></input></td>
                   </tr>
                    <tr>
                        <th>u17</th>
                        <td><input type="checkbox" name="u17AllR" value="checked"></input></td>
                        <td><input type="checkbox" name="u17ProfileR" value="checked"></input></td>
                        <td><input type="checkbox" name="u17TrainingR" value="checked"></input></td>
                        <td><input type="checkbox" name="u17PerformanceR" value="checked"></input></td>
                    </tr>
                   <tr>
                       <th>u15</th>
                       <td><input type="checkbox" name="u15AllR" value="checked"></input></td>
                       <td><input type="checkbox" name="u15ProfileR" value="checked"></input></td>
                       <td><input type="checkbox" name="u15TrainingR" value="checked"></input></td>
                       <td><input type="checkbox" name="u15PerformanceR" value="checked"></input></td>
                   </tr>
                    </tbody>
                </table>
                <div>
                    <button id={"saveButton"}>Save</button>
                </div>
            </div>
        );
    }
}

export default GroupRights;
