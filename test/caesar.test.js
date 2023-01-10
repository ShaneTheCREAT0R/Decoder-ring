const expect = require("chai").expect;
const caesar = require("../src/caesar.js").caesar

describe("caesar", () => {
  it("should return a coded message based on the given shift value.", () => {
  const input = "thinkful"
  const expected = "wklqnixo"
  const actual = caesar(input, 3)
  expect(actual).to.eql(expected);
   })
  
    it("should return a decoded message based on the given shift value.", () => {
  const input = "wklqnixo"
  const expected = "thinkful"
  const actual = caesar(input, 3, encode = false)
  expect(actual).to.eql(expected);
   })
  
  
  it ("returns false if the shift value is equal to 0.", () => {
    const input = "thinkful"
    const expected = false
    const actual = caesar(input, 0)
    expect(actual).to.eql(expected);
     }) 
  
  it ("returns false if the shift value is less than -25", () => {
    const input = "thinkful"
    const expected = false
    const actual = caesar(input, -40)
    expect(actual).to.eql(expected);
     }) 
  
    it ("returns false if the shift value is greater than 25.", () => {
    const input = "thinkful"
    const expected = false
    const actual = caesar(input, 70)
    expect(actual).to.eql(expected);
     }) 
  
    it ("returns false if the shift value is not present.", () => {
    const input = "thinkful"
    const expected = false
    const actual = caesar(input)
    expect(actual).to.eql(expected);
     }) 
  
      it ("should ignore capital letters.", () => {
    const input = "Capital Word"
    const expected = "ecrkvcn yqtf"
    const actual = caesar(input, 2)
    expect(actual).to.eql(expected);
     }) 
  
      it ("should handle shifts that go past the end of the alphabet.", () => {
    const input = "zebra"
    const expected = "bgdtc"
    const actual = caesar(input, 2)
    expect(actual).to.eql(expected);
     }) 
   
      it ("should maintain spaces throughout.", () => {
    const input = "abc !"
    const expected = " "
    const actual = caesar(input, 2)
    expect(actual.charAt(3)).to.equal(expected);
     }) 
  
        it ("should maintain special characters throughout.", () => {
    const input = "abc !"
    const expected = "!"
    const actual = caesar(input, 2)
    expect(actual.charAt(4)).to.equal(expected);
     }) 

})