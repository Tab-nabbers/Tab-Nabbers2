import React, { Component } from 'react';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';

import './integration.css';

class IntegrationUI extends Component {

    render() {

       
        return (
            <div className="integration">
                <Header {...this.props}/>
                <Sidebar {...this.props}/>

                <div className="integration-container">
                    <h2>I am the Integration UI</h2>
                </div>
            </div>
        );
    }
}



export default IntegrationUI;