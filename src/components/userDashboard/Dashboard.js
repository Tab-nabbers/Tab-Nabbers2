import DashboardUI from './DashboardUI';
import { connect } from 'react-redux';

const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = (dispatch) => {
    return {
        dispatchCustomAction: (action) => {
            dispatch(action);
        }
    };
};

const Dashboard = connect(
    mapPropToState,
    mapDispatchPropsToState
)(DashboardUI);


export default Dashboard;