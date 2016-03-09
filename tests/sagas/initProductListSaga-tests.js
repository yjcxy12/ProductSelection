import '../setup';
import { expect } from 'chai';
import initProductListSaga from '../../client/sagas/initProductListSaga';
import { take, call, put } from 'redux-saga/effects';
import {
    INIT_PRODUCT_LIST,
    INIT_PRODUCT_LIST_SUCCESS
} from '../../client/constants/actionTypes';
import { getLocationId, getProductList } from '../../client/services/productService';


describe('initProductListSaga', () => {
    const generator = initProductListSaga();
    expect(generator.next().value).to.eql(
        take(INIT_PRODUCT_LIST)
    );

    expect(generator.next().value).to.eql(
        call(getLocationId, undefined)
    );

    expect(generator.next().value).to.eql(
        call(getProductList, undefined)
    );

    expect(generator.next().value).to.eql(
        put({
            type: INIT_PRODUCT_LIST_SUCCESS,
            productList: undefined
        })
    );
});
