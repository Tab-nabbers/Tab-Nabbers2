import React, { Component } from 'react';
import CreateEvents from './createEvents/CreateEvents';
import DisplayEvents from './displayEvents/DisplayEvents';
import SearchEvents from './searchEvents/SearchEvents';

export default class ManageEventsUI extends Component {

    logout = () => {
        window.localStorage.clear();
        this.props.history.push('/');
    };
    render() {
        const eventType = this.props.eventType;
        let DefaultComponent = (
            <div>
                <h2>I am the Manage Events Page</h2>
            </div>
        );
        

        switch (eventType) {
            case 'search':
                return <SearchEvents {...this.props} logout={this.logout} />

            case 'favorite':
                return <SearchEvents {...this.props} logout={this.logout} />

            case 'myevents':
                return <DisplayEvents {...this.props} logout={this.logout} />

            case 'add':
                return <CreateEvents{...this.props} logout={this.logout} />

            case 'nextweek':
                return <SearchEvents {...this.props} logout={this.logout} />

            default:
                return DefaultComponent;
        }
    };
};