import 'babel-polyfill';
import { fork } from 'redux-saga/effects';
import initProductListSaga from './initProductListSaga';
import checkoutSaga from './checkoutSaga';

export default function* rootSaga() {
    yield [
        fork(initProductListSaga),
        fork(checkoutSaga)
    ];
}
