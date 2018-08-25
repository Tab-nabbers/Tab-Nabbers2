import SidebarUI from './SidebarUI';
import { connect } from 'react-redux';

const mapPropsToState  = () => {
    return {

    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const Sidebar = connect(
    mapPropsToState,
    mapDispatchToProps
)(SidebarUI);


export default Sidebar;