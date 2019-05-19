import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('addAtIndex', () => {
    it('should fail if type of first parameter is not an Array', () => {
        const array = {};

        expect(() => Library.addAtIndex(array, 0, 1)).to.throw(TypeError, 'The first parameter must be an Array!');
    });

    it('should fail if type of second parameter is not an Integer', () => {
        const array = [];

        expect(() => Library.addAtIndex(array, 'error', 1)).to.throw(TypeError, 'The second parameter must be an Integer!');
    });

    it('should fail if index is not in array', () => {
        const array = [];

        expect(() => Library.addAtIndex(array, -1, 5)).to.throw(Error, 'Index cannot be less than zero!');

        expect(() => Library.addAtIndex(array, 1, 5)).to.throw(Error, 'Index cannot be greater than the length of the array!');
    });

    it('should correctly add item to array at index', () => {
        const array = [1, 2, 3];

        const newArray = Library.addAtIndex(array, 1, 5);

        expect(newArray).to.have.lengthOf(4);
        expect(newArray).to.eql([1, 5, 2, 3]);
    });
});
