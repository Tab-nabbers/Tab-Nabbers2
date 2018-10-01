import React, { Component } from 'react';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';

import './settings.css';

class SettingsUI extends Component {


    render() {

       
        return (
            <div className="setting">
                <Header {...this.props}/>
                <Sidebar {...this.props}/>

                <div className="setting-container">
                    <h2>I am the Settings UI </h2>
                </div>
            </div>
        );
    }
}



export default SettingsUI;