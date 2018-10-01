import ManagePortfolioUI from './ManagePortfolioUI';
import { connect } from 'react-redux';

const mapStateToProps  = (state, props) => {
    const portfolioName = props.match.params.id;
    

    return {
        portfolioName
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const ManagePortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagePortfolioUI);


export default ManagePortfolio;