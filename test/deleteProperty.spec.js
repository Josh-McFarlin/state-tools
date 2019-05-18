import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('deleteProperty', () => {
    it('should fail if type of first parameter is not an object', () => {
        const obj = [];

        expect(() => Library.deleteProperty(obj, 'test')).to.throw(TypeError, 'The first parameter must be an Object!');
    });

    it('should fail if type of second parameter is not a string', () => {
        const obj = {};

        expect(() => Library.deleteProperty(obj, 123)).to.throw(TypeError, 'The second parameter must be a String!');
    });

    it('should fail if index is not in object', () => {
        const obj = {};

        expect(() => Library.deleteProperty(obj, 'test')).to.throw(Error, 'Object does not have the provided property!');
    });

    it('should correctly remove property from object', () => {
        const obj = {
            test: 123
        };

        const newObj = Library.deleteProperty(obj, 'test');

        expect(Object.keys(newObj)).to.have.lengthOf(0);
        expect(newObj).to.eql({});
    });
});
