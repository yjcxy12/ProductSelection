import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/Header';
import MainBody from 'components/MainBody';
import Footer from 'components/Footer';
import InfoPopup from 'components/InfoPopup';
import ConfirmationPage from 'components/ConfirmationPage';
import * as actionCreators from '../../actions';
import './style.scss';

class ProductSelection extends Component {
    componentDidMount() {
        const { actions, customerId } = this.props;
        actions.initProductList(customerId);
    }

    render() {
        const {
            customerId,
            sportsProductList,
            newsProductList,
            basketItemIdSet,
            actions,
            error,
            isConfirmationPage
        } = this.props;
        const displayBodyElement = !isConfirmationPage ? (
            <div className="app--container">
                <Header />
                <MainBody
                    sportsProductList={ sportsProductList }
                    newsProductList={ newsProductList }
                    basketItemIdSet={ basketItemIdSet }
                    addProductToBasket={ actions.addProductToBasket }
                    removeProductFromBasket={ actions.removeProductFromBasket }
                    doCheckout={ actions.doCheckout.bind(null, customerId) } />
                <Footer />
                <InfoPopup
                    message={ error }
                    isOpen={ error !== ''}
                    closePopup={ actions.clearError } />
            </div>
        ) :
        (
            <div className="app--container">
                <ConfirmationPage
                    customerId={ customerId }
                    productList={ sportsProductList.concat(newsProductList) }
                    basketItemIdSet={ basketItemIdSet }
                    gotoProductSelectionPage={ actions.gotoProductSelectionPage } />
            </div>
        );

        return displayBodyElement;
    }
}

ProductSelection.propTypes = {
    actions: PropTypes.object.isRequired,
    customerId: PropTypes.string.isRequired,
    locationId: PropTypes.string,
    sportsProductList: PropTypes.array.isRequired,
    newsProductList: PropTypes.array.isRequired,
    basketItemIdSet: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    isConfirmationPage: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        sportsProductList: state.productReducer.productList.filter((product) =>
            product.category === 'sports'),
        newsProductList: state.productReducer.productList.filter((product) =>
            product.category === 'news'),
        basketItemIdSet: state.productReducer.basketItemIdSet,
        error: state.productReducer.error,
        isConfirmationPage: state.productReducer.isConfirmationPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection);
