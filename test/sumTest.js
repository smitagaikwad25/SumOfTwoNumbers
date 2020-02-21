var assert = require('chai').assert
var sum = require('../main/sumOfNumbers')

describe('Test Cases for Sum Of Numberes', () => {

    it('given two values when not in proper Format should return true', () => {
        var values = sum.sum("", "")
        assert.equal(0, values)
    })

    it('given two values when not define  should return true', () => {
        var values = sum.sum()
        assert.equal(0, values)
    })

    it('given two values when one is in string format should return true', () => {
        var values = sum.sum("abc",2)
        assert.equal(0, values)
    })

    it('given two values when one is in string format should return true', () => {
        var values = sum.sum("abc",)
        assert.equal(0, values)
    })

    it('given two values when one is in string format should return true', () => {
        var values = sum.sum("abc","abc")
        assert.equal(0, values)
    })

    it('given two values when one is in string format should return true', () => {
        var values = sum.sum(2,"abc")
        assert.equal(0, values)
    })

    it('given two values when one is not in proper format should return true', () => {
        var values = sum.sum("",2)
        assert.equal(0, values)
    })

    it('given two values when one is not in proper format should return true', () => {
        var values = sum.sum(2,"")
        assert.equal(0, values)
    })

    it('given two values when one is not in proper format should return true', () => {
        var values = sum.sum(3,2)
        assert.equal(5, values)
    })
})

