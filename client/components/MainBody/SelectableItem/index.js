import React, { PropTypes } from 'react';
import { Checkbox } from 'material-ui';


function SelectableItem(props) {
    const _handleCheck = (event, value) => {
        const { product, addProductToBasket, removeProductFromBasket } = props;
        return value ?
            addProductToBasket(product.id) :
            removeProductFromBasket(product.id);
    };

    const { product, isSelected } = props;

    return (
        <Checkbox
            className="sports-selection--container"
            checked={ isSelected }
            label={ product.name }
            onCheck={ _handleCheck } />
    );
}

SelectableItem.propTypes = {
    product: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    addProductToBasket: PropTypes.func.isRequired,
    removeProductFromBasket: PropTypes.func.isRequired
};

export default SelectableItem;
