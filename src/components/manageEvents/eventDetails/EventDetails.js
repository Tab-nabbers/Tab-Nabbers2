import EventDetailsUI from './EventDetailsUI';
import { getEventBriteEvents, getCurrentEventbriteEvent } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/eventSelectors';
import { connect } from 'react-redux';

function findEventById(events, id) {

    for (let i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            return events[i];
        }
    }
}

const mapPropToState = (state, props) => {

    const events = state.events;
    const id = props.match.params.id;

    let event = {};

    if (events.length >= 1) {
        event = findEventById(events, id);
    } else {
        event = state.currentEvent;
    }
    

    const totalEvents = selectors.getTotalEvents(state);
    const hasMoreEvents = selectors.hasMoreEvents(state);
    const pageCount = selectors.getPageCount(state);


    const logoUrl = selectors.getLogoLink(event);
    const title = selectors.getTitle(event);
    const htmlElements = selectors.getHtml(event);


    return {
        totalEvents,
        hasMoreEvents,
        pageCount,
        logoUrl,
        title,
        htmlElements
    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
        searchEventBrite: (value, latitude, longitude) => {
            dispatch(getEventBriteEvents(value, latitude, longitude))
        },

        getCurrentEvent: (id) => {
            dispatch(getCurrentEventbriteEvent(id));
        }
    };
};

const EventDetails = connect(
    mapPropToState,
    mapDispatchPropsToState
)(EventDetailsUI);


export default EventDetails;