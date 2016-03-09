import React, { PropTypes } from 'react';
import SportsSelection from './SportsSelection';
import NewsSelection from './NewsSelection';
import ShoppingBasket from './ShoppingBasket';
import './style.scss';


function MainBody(props) {
    const {
        sportsProductList,
        newsProductList,
        basketItemIdSet,
        addProductToBasket,
        removeProductFromBasket,
        doCheckout
    } = props;

    return (
        <div className="main-body--container">
            <SportsSelection
                basketItemIdSet={ basketItemIdSet }
                sportsProductList={ sportsProductList }
                addProductToBasket={ addProductToBasket}
                removeProductFromBasket={ removeProductFromBasket } />
            <NewsSelection
                basketItemIdSet={ basketItemIdSet }
                newsProductList={ newsProductList}
                addProductToBasket={ addProductToBasket}
                removeProductFromBasket={ removeProductFromBasket } />
            <ShoppingBasket
                basketItemIdSet={ basketItemIdSet }
                productList={ sportsProductList.concat(newsProductList) }
                doCheckout={ doCheckout } />
        </div>
    );
}

MainBody.propTypes = {
    sportsProductList: PropTypes.array.isRequired,
    newsProductList: PropTypes.array.isRequired,
    basketItemIdSet: PropTypes.object.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    removeProductFromBasket: PropTypes.func.isRequired,
    doCheckout: PropTypes.func.isRequired
};

export default MainBody;
