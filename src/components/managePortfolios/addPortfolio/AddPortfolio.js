import AddPortfolioUI from './AddPortfolioUI';
import { connect } from 'react-redux';

const mapStateToProps  = (state, props) => {

    return {
       
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const AddPortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPortfolioUI);


export default AddPortfolio;