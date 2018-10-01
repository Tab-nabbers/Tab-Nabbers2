import React, { Component } from 'react';

import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';


export default class FavoriteEventsUI extends Component {
    render() {

        return (
            <div className="events">
                <Header {...this.props}/>
                <Sidebar {...this.props}/>
                <div className="events-favorite">
                    <h2>I am the Display DisplayEventsUI UI Page</h2>
                </div>
            </div>
        );
    }
}

