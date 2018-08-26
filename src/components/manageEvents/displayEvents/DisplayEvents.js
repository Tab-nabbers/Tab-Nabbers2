import DisplayEventsUI from './DisplayEventUI';
import { connect } from 'react-redux';

const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const DisplayEvents = connect(
    mapPropToState,
    mapDispatchPropsToState
)(DisplayEventsUI);


export default DisplayEvents;