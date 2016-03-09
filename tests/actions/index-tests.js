import '../setup';
import { expect } from 'chai';
import * as actions from '../../client/actions';
import {
    INIT_PRODUCT_LIST,
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    DO_CHECKOUT,
    GOTO_PRODUCT_SELECTION_PAGE,
    CLEAR_ERROR
} from '../../client/constants/actionTypes';


describe('actions', () => {
    describe('#initProductList()', () => {
        it('should handle INIT_PRODUCT_LIST', () => {
            expect(actions.initProductList('4343')).to.eql({
                type: INIT_PRODUCT_LIST,
                customerId: '4343'
            });
        });
    });

    describe('#addProductToBasket()', () => {
        it('should handle ADD_PRODUCT_TO_BASKET', () => {
            expect(actions.addProductToBasket('4343')).to.eql({
                type: ADD_PRODUCT_TO_BASKET,
                productId: '4343'
            });
        });
    });

    describe('#removeProductFromBasket()', () => {
        it('should handle REMOVE_PRODUCT_FROM_BASKET', () => {
            expect(actions.removeProductFromBasket('4343')).to.eql({
                type: REMOVE_PRODUCT_FROM_BASKET,
                productId: '4343'
            });
        });
    });

    describe('#doCheckout()', () => {
        it('should handle DO_CHECKOUT', () => {
            const basketItemIdSet = new Set([2, 3, 4]);
            expect(actions.doCheckout('4343', basketItemIdSet)).to.eql({
                type: DO_CHECKOUT,
                customerId: '4343',
                basketItemIdSet
            });
        });
    });

    describe('#gotoProductSelectionPage()', () => {
        it('should handle GOTO_PRODUCT_SELECTION_PAGE', () => {
            expect(actions.gotoProductSelectionPage()).to.eql({
                type: GOTO_PRODUCT_SELECTION_PAGE
            });
        });
    });

    describe('#clearError()', () => {
        it('should handle CLEAR_ERROR', () => {
            expect(actions.clearError('4343')).to.eql({
                type: CLEAR_ERROR
            });
        });
    });
});
