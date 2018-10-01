import FavoritePortfolioUI from './FavoritePortfolioUI';
import { connect } from 'react-redux';

const mapStateToProps  = (state, props) => {

    return {
    };
};

const mapDispatchToProps = () => {
    return {
        
    };
};

const FavoritePortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritePortfolioUI);


export default FavoritePortfolio;