import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('set', () => {
    it('should fail if type of first parameter is not an object', () => {
        const obj = [];

        expect(() => Library.set(obj, 'test', 1)).to.throw(TypeError, 'The first parameter must be an Object!');
    });

    it('should fail if type of second parameter is not a string', () => {
        const obj = {};

        expect(() => Library.set(obj, 123, 1)).to.throw(TypeError, 'The second parameter must be a String!');
    });

    it('should correctly set simple property in object', () => {
        const obj = {};

        const newObj = Library.set(obj, 'test', 123);

        expect(newObj).to.have.nested.property('test');
        expect(newObj.test).to.eql(123);
    });

    it('should correctly override property in object', () => {
        const obj = {
            existing: 123
        };

        const newObj = Library.set(obj, 'existing', 456);

        expect(newObj).to.have.nested.property('existing');
        expect(newObj.existing).to.eql(456);
    });

    it('should correctly set nested property in object', () => {
        const obj = {};

        const newObj = Library.set(obj, 'a.b[2].c', 123);

        expect(newObj).to.have.nested.property('a.b[2].c');
        expect(newObj.a.b[2].c).to.eql(123);
    });
});
