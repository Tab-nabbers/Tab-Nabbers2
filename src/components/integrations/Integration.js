import IntegrationUI from './IntegrationUI';
import { connect } from 'react-redux';

const mapPropToState  = (state) => {
    return {
        profile: state.profile,
        integrations: state.integrations
    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const Integration = connect(
    mapPropToState,
    mapDispatchPropsToState
)(IntegrationUI);


export default Integration;