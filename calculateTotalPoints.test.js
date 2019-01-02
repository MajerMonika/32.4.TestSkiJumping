const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('wind and gate change', () => {
        it('negative wind and negative gate', () => {
            const actual = calculateTotalPoints(106, "normal", 98, [18.5, 19, 18.5, 18.5, 18.5] , -12, -5);
    
            const expected = 114.5;
    
            assert.equal(actual, expected);
        })

        it('negative wind and positive gate', () => {
            const actual = calculateTotalPoints(134, "big", 120, [18.5,19,19,19.5,20], -5.4, 8.4);
    
            const expected = 145.7;
    
            assert.equal(actual, expected);
        })

        it('positive wind and positive gate', () => {
            const actual = calculateTotalPoints(227.5, "mammoth", 200, [17.5,18,18.5,18.5,18.5], 8.7, 8.4)
    
            const expected = 225.1;
    
            assert.equal(actual, expected);
        })
    })
})