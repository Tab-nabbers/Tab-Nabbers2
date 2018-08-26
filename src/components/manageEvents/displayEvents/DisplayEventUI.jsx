import React, { Component } from 'react';
import Sidebar from '../../../common/sidebar/Sidebar';


export default class DisplayEventsUI extends Component {
    render() {

        return (
            <div className="displayevents">
                <Sidebar {...this.props}/>
                <div>
                    <h2>I am the Display DisplayEventsUI UI Page</h2>
                </div>
            </div>
        );
    }
}

