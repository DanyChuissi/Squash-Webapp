import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';

/**
 * @author Daniela
 * This is a ModalView for changing the Password of an User.
 * @visibleName EditPasswordModalView
 */
class EditPasswordModalView extends Component {

    render() {
        const {
            createEditPassword,
            cancelEditPassword,
        } = this.props
        return (
            <div id={"EditPasswordModalView"}>
                <h2>Passwort ändern</h2>
                <div id={"changePasswordForm"}>
                    <div id="password">
                        <label>Aktuelles Password:</label>
                    </div>
                    <input id={"passwordInput"} placeholder={"Aktuelles Password eingeben"}/>

                    <div id="newPassword">
                        <label>Neues Password:</label>
                    </div>
                    <input id={"newPasswordInput"} placeholder={"Neues Password"}/>

                    <div id="newPasswordConfirm">
                        <label>Neues Password bestätigen:</label>
                    </div>
                    <input id={"newPasswordConfirmInput"} placeholder={"Neues Password bestätigen"}/>
                </div>
                <div id={"changePasswordButtons"}>
                    <Confirmbutton onClick={createEditPassword}>Ändern</Confirmbutton>
                    <Confirmbutton onClick={cancelEditPassword}>Abbrechen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default EditPasswordModalView;
