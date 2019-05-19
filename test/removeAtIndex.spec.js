import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('removeAtIndex', () => {
    it('should fail if type of first parameter is not an Array', () => {
        const array = {};

        expect(() => Library.removeAtIndex(array, 0)).to.throw(TypeError, 'The first parameter must be an Array!');
    });

    it('should fail if type of second parameter is not an Integer', () => {
        const array = [];

        expect(() => Library.removeAtIndex(array, 'error')).to.throw(TypeError, 'The second parameter must be an Integer!');
    });

    it('should fail if index is not in array', () => {
        const array = [];

        expect(() => Library.removeAtIndex(array, -1)).to.throw(Error, 'Index cannot be less than zero!');

        expect(() => Library.removeAtIndex(array, 0)).to.throw(Error, 'Index cannot be greater than or equal to the length of the array!');
    });

    it('should correctly remove index from array', () => {
        const array = [1, 2, 3];

        const newArray = Library.removeAtIndex(array, 0);

        expect(newArray).to.have.lengthOf(2);
        expect(newArray).to.eql([2, 3]);
    });
});
