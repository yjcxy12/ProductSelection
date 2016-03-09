import {
    INIT_PRODUCT_LIST,
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    DO_CHECKOUT,
    GOTO_PRODUCT_SELECTION_PAGE,
    CLEAR_ERROR
} from '../constants/actionTypes';


export function initProductList(customerId) {
    return {
        type: INIT_PRODUCT_LIST,
        customerId
    };
}

export function addProductToBasket(productId) {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        productId
    };
}

export function removeProductFromBasket(productId) {
    return {
        type: REMOVE_PRODUCT_FROM_BASKET,
        productId
    };
}

export function doCheckout(customerId, basketItemIdSet) {
    return {
        type: DO_CHECKOUT,
        customerId,
        basketItemIdSet
    };
}

export function gotoProductSelectionPage() {
    return {
        type: GOTO_PRODUCT_SELECTION_PAGE
    };
}

export function clearError() {
    return {
        type: CLEAR_ERROR
    };
}
