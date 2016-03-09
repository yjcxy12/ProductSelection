import { take, call, put } from 'redux-saga/effects';
import {
    INIT_PRODUCT_LIST,
    INIT_PRODUCT_LIST_SUCCESS,
    SERVER_CALL_ERROR
} from '../constants/actionTypes';
import { getLocationId, getProductList } from '../services/productService';


export default function* initProductListSaga() {
    while (true) {
        const action = yield take(INIT_PRODUCT_LIST);
        try {
            const locationId = yield call(getLocationId, action && action.customerId);
            const productList = yield call(getProductList, locationId);
            yield put({
                type: INIT_PRODUCT_LIST_SUCCESS,
                productList
            });
        } catch (err) {
            yield put({
                type: SERVER_CALL_ERROR,
                message: 'Getting products failed.',
                error: err
            });
        }
    }
}
