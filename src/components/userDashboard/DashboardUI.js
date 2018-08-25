import React, { Component } from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';

import './dashboard.css';

export default class DashboardUI extends Component {
    render() {

        return (
            <div className="dashboard">
                <Header />
                <Sidebar {...this.props} />

                <div className="dashboard-container">
                    <h2>I am the Dashboard UI Page</h2>
                </div>
            </div>
        );
    }
}

