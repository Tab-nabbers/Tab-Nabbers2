import React, { Component } from 'react';
import CreateEvents from './createEvents/CreateEvents';
import DisplayEvents from './displayEvents/DisplayEvents';
import SearchEvents from './searchEvents/SearchEvents';
import FavoriteEvents from './favoriteEvents/FavoriteEvents';

import Sidebar from '../../common/sidebar/Sidebar';
import Header from '../../common/header/Header';

export default class ManageEventsUI extends Component {

    logout = () => {
        window.localStorage.clear();
        this.props.dispatchCustomAction({ type: 'LOGOUT' });
        this.props.history.push('/');

    };

    defaultComponent = () => {
        return <div>
            <Header {...this.props} />
            <Sidebar {...this.props}/>
            <h2>I am the Manage Events Page</h2>
        </div>
    };
    
    render() {
        const eventType = this.props.eventType;


        switch (eventType) {
            case 'search':
                return <SearchEvents {...this.props} logout={this.logout} />

            case 'favorite':
                return <FavoriteEvents {...this.props} logout={this.logout} />

            case 'myevents':
                return <DisplayEvents {...this.props} logout={this.logout} />

            case 'add':
                return <CreateEvents{...this.props} logout={this.logout} />

            default:
                return this.defaultComponent();
        }
    };
};