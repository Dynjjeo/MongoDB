// mocha dùng để test

const mocha = require("mocha")
const assert = require("assert")
// Describe process test
describe("Mieu ta demo", function(){
    // creat test
    it('kiem tra 2 so cong lai ', function(){
        assert(1+1 == 2)
    })
})
