import {expect} from 'chai';

import Galah from '../src/index.js';

describe('Galah', () => {
    it('should be defined', () => {
        let galah = new Galah();
        expect(galah).to.be.defined;
    });

    it('should have add method defined', () => {
        let galah = new Galah();
        expect(galah.add).to.be.defined;
    });

    it('should have add method that returns the sum', () => {
        let galah = new Galah();
        expect(galah.add(2,2)).to.be.equal(4);
    });
});
