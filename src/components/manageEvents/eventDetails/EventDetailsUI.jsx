import React, { Component, Fragment } from 'react';
import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';
import ReactHtmlParser from 'react-html-parser';

import './EventDetails.css';
export default class EventDetailsUI extends Component {
    static displayName = 'Event Details';
    componentDidMount = () => {
        document.title = "Event Details";
        const { getCurrentEvent, event } = this.props;

        if (!event) {
            const id = this.props.match.params.id;
            getCurrentEvent(id);
        }

    };

    render() {
        const { title, htmlElements } = this.props;

        return (
            <div className="event-details">
                <Header />
                <Sidebar { ...this.props }/>
                <div className="event-details__container">
                    <h2> {title} </h2>

                    <img src={this.props.logoUrl} alt="" />
                    {ReactHtmlParser(htmlElements)}
                </div>


            </div>
        );
    }
};

