const expect = require("chai").expect;
const polybius = require("../src/polybius.js").polybius

describe("polybius", () => {
 
    it("When encoding, it translates a message to a numbered string.", () => {
  const input = "thinkful"
  const expected = "4432423352125413"
  const actual = polybius(input)
  expect(actual).to.eql(expected);
   })
  
      it("When decoding, it translates a numbered string to a message.", () => {
  const input = "3251131343 2543241341"
  const expected = "hello world"
  const actual = polybius(input, encode = false)
  expect(actual).to.eql(expected);
   })
  
  
  
  it("When encoding, it translates the letters i and j to 42.", () => {
  const input = "ij"
  const expected = "4242"
  const actual = polybius(input)
  expect(actual).to.eql(expected);
   })
  
  it("When decoding, it translates 42 to (i/j).", () => {
  const input = "4432423352125413"
  const expected = "th(i/j)nkful"
  const actual = polybius(input, encode = false)
  expect(actual).to.eql(expected);
   })
    
    it("It ignores capital letters.", () => {
  const input = "Thinkful Test"
  const expected = "4432423352125413 44513444"
  const actual = polybius(input)
  expect(actual).to.eql(expected);
   })
  
      it("It maintains spaces in the message before and after encoding.", () => {
  const input = "space here"
  const expected = "3453113151 32512451"
  const actual = polybius(input)
  expect(actual).to.eql(expected);
   })
  
        it("It maintains spaces in the message before and after decoding.", () => {
  const input = "3453113151 32512451"
  const expected = "space here"
  const actual = polybius(input, encode = false)
  expect(actual).to.eql(expected);
   })
  
  
})
