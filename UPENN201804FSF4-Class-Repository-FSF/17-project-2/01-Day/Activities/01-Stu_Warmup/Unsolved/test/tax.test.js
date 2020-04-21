var expect = require("chai").expect;
var calculateTax = require("../tax");

describe("tax", function(){
    it("should return the amount passed * 1.08", function(){
        expect(calculateTax(5)).to.equal("5.40")
    });

    it("should only take numbers", function(){
        expect(function(){calculateTax("chickens")}).to.throw(Error)
    });
});
