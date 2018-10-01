import SettingsUI from './SettingsUI';
import { connect } from 'react-redux';

const mapPropToState  = () => {
    return {

    };
};

const mapDispatchPropsToState = () => {
    return {
        
    };
};

const Settings = connect(
    mapPropToState,
    mapDispatchPropsToState
)(SettingsUI);


export default Settings;