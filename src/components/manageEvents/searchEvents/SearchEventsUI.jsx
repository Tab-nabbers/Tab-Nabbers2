import React, { Component } from 'react';
import Sidebar from '../../../common/sidebar/Sidebar';

export default class SearchEventsUI extends Component {

    componentDidMount = () => {
        this.props.searchEventBrite('javascript');
    };

    render() {
        return(
            <div>
                <Sidebar {...this.props}/>
                <h2>I am Hello World</h2>
            </div>
        );
    }
};


