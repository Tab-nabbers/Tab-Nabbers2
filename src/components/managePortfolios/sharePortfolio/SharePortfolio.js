import SharePortfolioUI from './SharePortfolioUI';
import { connect } from 'react-redux';

const mapStateToProps  = (state, props) => {

    return {
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const SharePortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(SharePortfolioUI);


export default SharePortfolio;