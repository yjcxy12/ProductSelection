import '../setup';
import { expect } from 'chai';
import productReducer from '../../client/reducers/productReducer';
import {
    INIT_PRODUCT_LIST_SUCCESS
} from '../../client/constants/actionTypes';


const initialState = {
    isConfirmationPage: false,
    productList: [],
    basketItemIdSet: new Set(),
    error: ''
};

describe('productReducer', () => {
    it('should handle intiial state', () => {
        expect(productReducer(undefined, {})).to.eql(
            initialState);
    });

    it('should handle INIT_PRODUCT_LIST_SUCCESS', () => {
        const productList = [
            { id: 1 },
            { id: 2, name: 'test' }
        ];
        expect(productReducer(initialState, {
            type: INIT_PRODUCT_LIST_SUCCESS,
            productList
        })).to.eql({
            isConfirmationPage: false,
            productList,
            basketItemIdSet: new Set,
            error: ''
        });
    });
});
