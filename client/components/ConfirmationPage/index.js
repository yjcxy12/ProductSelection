import React, { PropTypes } from 'react';
import { Paper, List, ListItem, RaisedButton } from 'material-ui';
import './style.scss';


function ConfirmationPage(props) {
    const {
        customerId,
        productList,
        basketItemIdSet,
        gotoProductSelectionPage
    } = props;
    const itemListElements = [...basketItemIdSet].map((itemId) => {
        const item = productList.find((product) => product.id === itemId);
        return item ? <ListItem key={ item.id } primaryText={ item.name } /> : null;
    });

    return (
        <Paper className="confirmation-page">
            <RaisedButton
                label="Back"
                onClick={ gotoProductSelectionPage }
                primary={ true } />
            <List>
                <ListItem primaryText={ `Customer ID: ${customerId}`} />
                { itemListElements }
            </List>
        </Paper>
    );
}

ConfirmationPage.propTypes = {
    customerId: PropTypes.string.isRequired,
    productList: PropTypes.array.isRequired,
    basketItemIdSet: PropTypes.object.isRequired,
    gotoProductSelectionPage: PropTypes.func.isRequired
};

export default ConfirmationPage;
