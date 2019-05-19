import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('push', () => {
    it('should fail if type of first parameter is not an Array', () => {
        const array = {};

        expect(() => Library.push(array, 0)).to.throw(TypeError, 'The first parameter must be an Array!');
    });

    it('should correctly add one item to array', () => {
        const array = [1, 2, 3];

        const newArray = Library.push(array, 4);

        expect(newArray).to.have.lengthOf(4);
        expect(newArray).to.eql([1, 2, 3, 4]);
    });

    it('should correctly add more than one item to array', () => {
        const array = [1, 2, 3];

        const newArray = Library.push(array, 4, 5, 6);

        expect(newArray).to.have.lengthOf(6);
        expect(newArray).to.eql([1, 2, 3, 4, 5, 6]);
    });
});
