import DashboardUI from './DashboardUI';
import { connect } from 'react-redux';

const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const Dashboard = connect(
    mapPropToState,
    mapDispatchPropsToState
)(DashboardUI);


export default Dashboard;