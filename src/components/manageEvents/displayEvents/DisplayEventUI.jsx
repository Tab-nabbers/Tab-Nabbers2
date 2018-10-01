import React, { Component } from 'react';
import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';


export default class DisplayEventsUI extends Component {
    render() {

        return (
            <div className="events">
                <Header {...this.props}/>
                <Sidebar {...this.props}/>
                <div className="events-display">
                    <h2>I am the Display UI Page</h2>
                </div>
            </div>
        );
    }
}

