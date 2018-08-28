import EventDetailsUI from './EventDetailsUI';
import { getEventBriteEvents, getCurrentEventbriteEvent } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/eventSelectors';
import { connect } from 'react-redux';

const mapPropToState = (state) => {
    const currentEvent = state.currentEvent;
    const totalEvents = selectors.getTotalEvents(state);
    const hasMoreEvents = selectors.hasMoreEvents(state);
    const pageCount = selectors.getPageCount(state);


    const logoUrl = selectors.getLogoLink(currentEvent);
    const title = selectors.getTitle(currentEvent);
    const htmlElements = selectors.getHtml(currentEvent);


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