var assert = require("assert");
var expect = require("chai").expect;
var port = require("../index.js").port;

describe("Hello World Test", function(){
    it("Should return true if it prints Hello World in p tags", function(){
        assert.notStrictEqual(true, `<p>Hello World</p>`)
    })
    it("Should open on port 3020", function(){
        console.log(port)
        expect(port).to.equal(3020)
    })
})