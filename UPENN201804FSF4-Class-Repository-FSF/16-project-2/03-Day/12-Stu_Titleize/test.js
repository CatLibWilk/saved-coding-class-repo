var expect = require("chai").expect;
var titleize = require("./titleize.js");

describe("titleize", function(){
    it("The first letter in string and first letter after space should be capital", function(){
        expect(titleize("dr zhivago")).to.equal("Dr Zhivago")
    });

    it("if given a number it should error", function(){
        expect(titleize("33333")).to.throw(Error)
    });
});