import EventDetailsUI from './EventDetailsUI';
import { getEventBriteEvents } from '../../../actions/actionCreators';
import * as selectors from '../../../selectors/eventSelectors';
import { connect } from 'react-redux';

const mapPropToState = (state) => {
    const events = selectors.getEvents(state);
    const totalEvents = selectors.getTotalEvents(state);
    const hasMoreEvents = selectors.hasMoreEvents(state);
    const pageCount = selectors.getPageCount(state);
    
    return {
        events,
        totalEvents,
        hasMoreEvents,
        pageCount
    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
        searchEventBrite: (value, latitude, longitude) => {
            dispatch(getEventBriteEvents(value, latitude, longitude))
        }
    };
};

const EventDetails = connect(
    mapPropToState,
    mapDispatchPropsToState
)(EventDetailsUI);


export default EventDetails;