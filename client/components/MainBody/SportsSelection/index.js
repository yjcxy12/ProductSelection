import React, { PropTypes } from 'react';
import { Paper, List, ListItem, Divider } from 'material-ui';
import SelectableItem from '../SelectableItem';
import './style.scss';


function SportsSelection(props) {
    const {
        sportsProductList,
        basketItemIdSet,
        addProductToBasket,
        removeProductFromBasket
    } = props;
    const childElements = sportsProductList.map((product) =>
        <SelectableItem
            isSelected={ basketItemIdSet.has(product.id) }
            key={ product.id }
            product={ product }
            addProductToBasket={ addProductToBasket }
            removeProductFromBasket={ removeProductFromBasket } />
    );
    return (
        <Paper className="sports-selection--container">
            <ListItem primaryText="SPORTS" />
            <Divider />
            <List className="sports-selection--list">
                { childElements }
            </List>
        </Paper>
    );
}

SportsSelection.propTypes = {
    basketItemIdSet: PropTypes.object.isRequired,
    sportsProductList: PropTypes.array.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    removeProductFromBasket: PropTypes.func.isRequired
};

export default SportsSelection;
