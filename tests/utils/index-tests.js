import '../setup';
import { expect } from 'chai';
import * as utils from '../../client/utils';


describe('utils', () => {
    describe('#getCookieValue', () => {
        it('should get cookie value', () => {
            document.cookie = 'myKey=abcd';
            expect(utils.getCookieValue('myKey')).to.equal('abcd');
        });
    });
});
