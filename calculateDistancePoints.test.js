const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('jump more than k-point', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        })
      
        it('jump less than k-point', () => {
            const actual = calculateDistancePoints(96.5, 'normal', 98);

            const expected = 57;

            assert.equal(actual, expected);
        })
      
        it('jump k-point', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);

            const expected = 60;

            assert.equal(actual, expected);
        })
    })
  
    describe('big', () => {
        it('jump more than k-point', () => {
            const actual = calculateDistancePoints(134, 'big', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        })
      
        it('jump less than k-point', () => {
            const actual = calculateDistancePoints(119.5, 'big', 120);

            const expected = 59.1;

            assert.equal(actual, expected);
        })
      
        it('jump k-point', () => {
            const actual = calculateDistancePoints(120, 'big', 120);

            const expected = 60;

            assert.equal(actual, expected);
        })
    })
  
    describe('mammoth', () => {
        it('jump more than k-point', () => {
            const actual = calculateDistancePoints(227.5, 'mammoth', 200);

            const expected = 153;

            assert.equal(actual, expected);
        })
      
        it('jump less than k-point', () => {
            const actual = calculateDistancePoints(170, 'mammoth', 200);

            const expected = 84;

            assert.equal(actual, expected);
        })
        
        it('jump k-point', () => {
            const actual = calculateDistancePoints(200, 'mammoth', 200);

            const expected = 120;

            assert.equal(actual, expected);
        })
    })
})