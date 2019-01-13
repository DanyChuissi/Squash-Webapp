import React, {Component, Fragment} from 'react';
import NewTestBaterieView from "./NewTestBaterieView";


class NewTestBaterieController extends Component {
    state ={
        trigger : false,
    }

    closePopup = () =>{
        this.setState({trigger: false})
    }
    render () {
        return (

            <NewTestBaterieView/>

        );
    }
}
export default NewTestBaterieController