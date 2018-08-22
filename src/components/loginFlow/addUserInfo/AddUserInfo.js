import AddUserInfoUI from './AddUserInfoUI';
import { connect } from 'react-redux';

const mapStateToProps  = (state, props) => {

    return {
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const AddUserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUserInfoUI);


export default AddUserInfo;