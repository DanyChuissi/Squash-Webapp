import React, {Component, Fragment} from 'react';
import NewTestBaterieView from "./NewTestBaterieView";


class NewTestBaterieController extends Component {

    render () {
        const {
            closePopUp,
            postTestBaterie,
        } = this.props;
        return (

            <NewTestBaterieView postTestBaterie={postTestBaterie} closePopUp={closePopUp}/>

        );
    }
}
export default NewTestBaterieController