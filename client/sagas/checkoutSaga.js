import { take, call, put } from 'redux-saga/effects';
import {
    DO_CHECKOUT,
    CHECKOUT_SUCCESS,
    SERVER_CALL_ERROR
} from '../constants/actionTypes';
import { doCheckout } from '../services/productService';


export default function* checkoutSaga() {
    while (true) {
        const action = yield take(DO_CHECKOUT);
        try {
            if (!action.basketItemIdSet || action.basketItemIdSet.size === 0) {
                throw new Error('No product in basket.');
            }
            const { success } =
                yield call(doCheckout, action.customerId, [...action.basketItemIdSet]);
            if (!success) {
                throw new Error('Chekcout failed.');
            }
            yield put({
                type: CHECKOUT_SUCCESS
            });
        } catch (err) {
            yield put({
                type: SERVER_CALL_ERROR,
                message: 'Checkout failed.',
                error: err
            });
        }
    }
}
