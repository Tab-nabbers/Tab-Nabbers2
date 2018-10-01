import FavoriteEventsUI from './FavoriteEventsUI';
import { connect } from 'react-redux';


const mapPropToState = (state, props) => {


    return {
    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
    };
};

const FavoriteEvents = connect(
    mapPropToState,
    mapDispatchPropsToState
)(FavoriteEventsUI);


export default FavoriteEvents;