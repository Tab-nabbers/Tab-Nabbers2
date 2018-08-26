import ManageEventsUI from './ManageEventsUI';
import { connect } from 'react-redux';
import * as routerSelectors from '../../selectors/routerSelectors';

const mapStateToProps  = (state, props) => {
    const params = routerSelectors.getParams(props);
    const eventType = params.type;

    return {
        eventType
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const ManageEvents = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageEventsUI);


export default ManageEvents;