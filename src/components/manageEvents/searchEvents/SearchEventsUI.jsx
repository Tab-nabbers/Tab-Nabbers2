import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';
import Sidebar from '../../../common/sidebar/Sidebar';
import Header from '../../../common/header/Header';
import * as selectors from '../../../selectors/eventSelectors';
import './SearchEvent.css';
export default class SearchEventsUI extends Component {


    navigateToEventDetails = (id) => {
        this.props.history.push(`/event/details/${id}`);
    };

    createEventBox = (events) => {
        const { getLogoLink, getFullAddress, getTitle, getTimeStart } = selectors;
        const { isGetEventsPending } = this.props;

        if (isGetEventsPending) {
            return "Loading...";
        }
        return events.map((event, index) =>
            <div className="events-main__box-item" onClick={() => this.navigateToEventDetails(event.id)}>
                <h2> {getTitle(event)}</h2>
                <p> Address: {getFullAddress(event)} </p>
                <p>{getTimeStart(event)}</p>
                <img src={getLogoLink(event)} alt="" />
            </div>);
    };

    searchEventByValue = () => {
        const value = this.state.search;
        this.props.searchEventBrite(value);
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value })
    }

    render() {
        const { events } = this.props;

        return (
            <div className="events">
                <Header />
                <Sidebar {...this.props} />
                <div className="events-main">
                    <div className="events-main__search">

                        <Form onSubmit={this.searchEventByValue}>
                            <Input icon fluid placeholder='Search...'>
                                <input onChange={this.handleChange} />
                                <Icon name='search' />
                            </Input>
                        </Form>
                    </div>

                    <div className="events-main__box">
                        {this.createEventBox(events)}
                    </div>
                </div>
            </div>
        );
    }
};

