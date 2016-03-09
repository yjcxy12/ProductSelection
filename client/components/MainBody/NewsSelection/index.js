import React, { PropTypes } from 'react';
import { Paper, List, ListItem, Divider } from 'material-ui';
import SelectableItem from '../SelectableItem';
import './style.scss';


function NewsSelection(props) {
    const {
        newsProductList,
        basketItemIdSet,
        addProductToBasket,
        removeProductFromBasket
    } = props;
    const childElements = newsProductList.map((product) =>
        <SelectableItem
            key={ product.id }
            isSelected={ basketItemIdSet.has(product.id) }
            product={ product }
            addProductToBasket={ addProductToBasket }
            removeProductFromBasket={ removeProductFromBasket } />
    );
    return (
        <Paper className="news-selection--container">
            <ListItem primaryText="NEWS" />
            <Divider />
            <List className="news-selection--list">
                { childElements }
            </List>
        </Paper>
    );
}

NewsSelection.propTypes = {
    basketItemIdSet: PropTypes.object.isRequired,
    newsProductList: PropTypes.array.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    removeProductFromBasket: PropTypes.func.isRequired
};

export default NewsSelection;
