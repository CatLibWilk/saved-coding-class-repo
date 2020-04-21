var expect = require("chai").expect;
var disemvowel = require("./disemvowel.js");


describe("disemvowel", function(){
    it("should remove all the vowels", function(){
        expect(disemvowel("pizza")).to.equal("pzz")
    });

    it("numbers", function(){
        expect(disemvowel(33)).to.equal("33")
    });
});