import chai from 'chai';
import { describe } from 'mocha';

import Library from '../src';


const { expect } = chai;

describe('Library', () => {
    it('should get the library version', () => {
        expect(Library.version).to.eql('0.1.1');
    });

    it('should get the library name', () => {
        const name = Library.name();

        expect(name).to.eql('state-tools');
    });
});
