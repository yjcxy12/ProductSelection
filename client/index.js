import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ProductSelection from './containers/ProductSelection';
import rootSaga from './sagas';
import { getCookieValue } from 'utils';


const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = applyMiddleware(sagaMiddleware)(createStore)(rootReducer);
const containerElement = document.getElementById('main-display');
const customerId = getCookieValue('customerID');

if (containerElement !== null) {
    ReactDOM.render(
        <Provider store={ store }>
            <ProductSelection customerId={ customerId } />
        </Provider>,
        containerElement
    );
}
