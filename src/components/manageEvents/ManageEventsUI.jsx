import React, { Component } from 'react';
import CreateEvents from './createEvents/CreateEvents';
import DisplayEvents from './displayEvents/DisplayEvents';
import SearchEvents from './searchEvents/SearchEvents';

export default class ManageEventsUI extends Component {
    

    render() {
        const eventType = this.props.eventType;

        let DefaultComponent = (
            <div>
                <h2>I am the Manage Events Page</h2>
            </div>
        );

        switch (eventType) {
            case 'search':
                return <SearchEvents {...this.props}/>

            case 'favorite':
                return <SearchEvents {...this.props}/>

            case 'myevents':
                return <DisplayEvents {...this.props} />

            case 'add':
                return <CreateEvents{...this.props} />

            case 'nextweek':
                return <SearchEvents {...this.props}/>
        
            default:
                return <DefaultComponent />
        }
    };
};