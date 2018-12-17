import React, { Component } from 'react';
import './PlayerTable.css'
import HeaderProfilView from "../UI/HeaderProfilView";
import Label from '../UI/Label';
import Input from "../UI/Input";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {myFunction} from '../UI/HeaderProfilController';
import {onLogoCenterClick} from '../UI/HeaderProfilController';
 import {onLogoMenuClick} from '../UI/HeaderProfilController';

/**
 * @author Dany
 *
 * @visibleName PlayerProfilView
 */
class PlayerTable extends Component{

    render(){
        const {
            suchBegriff,
            options,
            email,
            setSuchBegriff,
            getList,
        }=this.props
            const defaultOption = options[0];
        return <React.Fragment>
            <div>
                <HeaderProfilView email = {email} myFunction={myFunction} onLogoCenterClick={ onLogoCenterClick} onLogoMenuClick={onLogoMenuClick} >
                    <HeaderProfilView/>
                </HeaderProfilView>
                <div className="nav" style={{color: 'black', fontFamily: 'Arial Rounded MT Bold', fontSize: 30}}>
                    Athleten
                </div>
                <div className="haupt">
                    <div className="boxx">

                        <div className="box1">
                            <div className="box11">
                                <div><Label style={{color: 'white'}}>Einträge pro zeite: </Label></div>
                                <div><Dropdown placeholderClassName={""} className="auswahl" options={options}
                                               onChange={this._onSelect} value={defaultOption} placeholder=""/></div>
                            </div>
                            <div className="box11">
                                <Label className="standardLabel" style={{color: 'white'}}> Suchbegriff:</Label>
                                <Input classname={""} placeholder={"Suchen"} value={suchBegriff}
                                            onChange={setSuchBegriff}/>
                            </div>

                        </div>
                        <div className="box2">
                            {getList}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default PlayerTable