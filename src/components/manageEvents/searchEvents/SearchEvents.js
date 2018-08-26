import SearchEventsUI from './SearchEventsUI';
import { getEventBriteEvents } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

const mapPropToState = () => {
    return {

    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
        searchEventBrite: (value) => {
            dispatch(getEventBriteEvents(value))
        }
    };
};

const SearchEvents = connect(
    mapPropToState,
    mapDispatchPropsToState
)(SearchEventsUI);


export default SearchEvents;