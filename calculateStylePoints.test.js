const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('different notes', () => {
        it('note with comma', () => {
            const actual = calculateStylePoints([11.5, 13.5, 16.5, 17.5, 20])
            
            const expected = 47.5;

            assert.equal(actual, expected);
        })
      
        it('note without comma', () => {
            const actual = calculateStylePoints([11, 13, 16, 17, 20])
            
            const expected = 46;

            assert.equal(actual, expected);
        })
    })

    describe('a few same notes', () => {      
        it('two same notes', () => {
            const actual = calculateStylePoints([13, 13, 16, 17, 20])
            
            const expected = 46;

            assert.equal(actual, expected);
        })
      
        it('two same notes with comma', () => {
            const actual = calculateStylePoints([13.5, 13.5, 16.5, 17.5, 20])
            
            const expected = 47.5;

            assert.equal(actual, expected);
        })
      
        it('three same notes', () => {
            const actual = calculateStylePoints([10, 14, 14, 14, 20])
            
            const expected = 42;

            assert.equal(actual, expected);
        })
      
        it('three same notes with comma', () => {
            const actual = calculateStylePoints([10.5, 14.5, 14.5, 14.5, 20])
            
            const expected = 43.5;

            assert.equal(actual, expected);
        })
      
        it('five same notes', () => {
            const actual = calculateStylePoints([14, 14, 14, 14, 14])
            
            const expected = 42;

            assert.equal(actual, expected);
        })
      
        it('five same notes with comma', () => {
            const actual = calculateStylePoints([14.5, 14.5, 14.5, 14.5, 14.5])
            
            const expected = 43.5;

            assert.equal(actual, expected);
        })
    })
})