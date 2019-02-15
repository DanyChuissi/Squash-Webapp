import React, {Component, Fragment} from 'react';
import NewTestBaterieView from "./NewTestBaterieView";

/**
 * @author Dany Chuissi
 *
 *Controller Klasse für die NewTestBaterie Seite
 *
 * @visibleName NewTestBaterieController
 */
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