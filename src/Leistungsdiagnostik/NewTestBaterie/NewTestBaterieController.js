import React, {Component, Fragment} from 'react';
import NewTestBaterieView from "./NewTestBaterieView";


class NewTestBaterieController extends Component {

    constructor(props){
        super(props)
    }


    render () {
        const {

            postTestBaterie,
            closePopUp,
        } = this.props;
        return (

            <NewTestBaterieView
                                postTestBaterie={postTestBaterie}
                                closePopUp={ closePopUp}/>

        );
    }
}
export default NewTestBaterieController