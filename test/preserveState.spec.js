import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('preserveState', () => {
    it('should correctly remove index if parameters are correct', () => {
        const array = [1, 2, 3];

        const newArray = Library.preserveState(Library.removeAtIndex, array, 1);

        expect(newArray).to.have.lengthOf(2);
        expect(newArray).to.eql([1, 3]);
    });

    it('should preserve initial state if parameters are incorrect', () => {
        const array = [1, 2, 3, 4, 5];

        const newArray = Library.preserveState(Library.removeIndex, array, 'willError');

        expect(newArray).to.have.lengthOf(array.length);
        expect(newArray).to.eql(array);
    });
});
