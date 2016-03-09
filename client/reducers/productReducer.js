import {
    INIT_PRODUCT_LIST_SUCCESS,
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    CHECKOUT_SUCCESS,
    GOTO_PRODUCT_SELECTION_PAGE,
    SERVER_CALL_ERROR,
    CLEAR_ERROR
} from '../constants/actionTypes';
import assign from 'object-assign';

const initialState = {
    isConfirmationPage: false,
    productList: [],
    basketItemIdSet: new Set(),
    error: ''
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_PRODUCT_LIST_SUCCESS:
            return assign({}, state, {
                productList: action.productList
            });
        case ADD_PRODUCT_TO_BASKET:
            return assign({}, state, {
                basketItemIdSet: new Set(state.basketItemIdSet.add(action.productId))
            });
        case REMOVE_PRODUCT_FROM_BASKET:
            state.basketItemIdSet.delete(action.productId);
            return assign({}, state, {
                basketItemIdSet: new Set(state.basketItemIdSet)
            });
        case CHECKOUT_SUCCESS:
            return assign({}, state, {
                isConfirmationPage: true
            });
        case GOTO_PRODUCT_SELECTION_PAGE:
            return assign({}, state, {
                isConfirmationPage: false
            });
        case SERVER_CALL_ERROR:
            console.error(action.error);
            return assign({}, state, {
                error: action.message
            });
        case CLEAR_ERROR:
            return assign({}, state, {
                error: ''
            });
        default:
            return state;
    }
}
