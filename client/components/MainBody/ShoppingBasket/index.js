import React, { PropTypes } from 'react';
import { Paper, RaisedButton, List, ListItem, Divider } from 'material-ui';
import './style.scss';


function ShoppingBasket(props) {
    const { basketItemIdSet, productList, doCheckout } = props;
    const itemListElements = [...basketItemIdSet].map((itemId) => {
        const item = productList.find((product) => product.id === itemId);
        return item ? <ListItem key={ item.id }primaryText={ item.name } /> : null;
    });

    return (
        <Paper className="shopping-basket--container">
            <ListItem primaryText="BASKET" />
            <Divider />
            <List className="shopping-basket--item-list">
                { itemListElements }
            </List>
            <RaisedButton
                className="checkout-btn"
                disabled={ basketItemIdSet.size === 0 }
                label="Checkout"
                primary={ true }
                onClick={ doCheckout.bind(null, basketItemIdSet) } />
        </Paper>
    );
}

ShoppingBasket.propTypes = {
    basketItemIdSet: PropTypes.object.isRequired,
    productList: PropTypes.array.isRequired,
    doCheckout: PropTypes.func.isRequired
};

export default ShoppingBasket;
