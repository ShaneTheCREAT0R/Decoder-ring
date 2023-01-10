// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js").substitution

describe("substitution", () => {
 
    it("Should encode a message given an alphabet.", () => {
  const input = "message"
  const alphabet = "plmoknijbuhvygctfxrdzeswaq"
  const expected = "ykrrpik"
  const actual = substitution(input, alphabet)
  expect(actual).to.eql(expected);
   })
  
      it("Should decode a message given an alphabet.", () => {
  const input = "ykrrpik"
  const alphabet = "plmoknijbuhvygctfxrdzeswaq"
  const expected = "message"
  const actual = substitution(input, alphabet, false)
  expect(actual).to.eql(expected);
   })
  
  
    it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
  const input = "message"
  const alphabet = "plmoknijbuhvygctfxrdzesw"
  const expected = false
  const actual = substitution(input, alphabet)
  expect(actual).to.eql(expected);
   })
  
 
    it("It returns false if there are any duplicate characters in the given alphabet.", () => {
  const input = "message"
  const alphabet = "plmoknijbuhvygctfxswaqswaq"
  const expected = false
  const actual = substitution(input, alphabet)
  expect(actual).to.eql(expected);
   })
  
      it("Maintains spaces in the message, before and after encoding.", () => {
  const input = "You are an excellent spy"
  const alphabet = "xoyqmcgrukswaflnthdjpzibev"
  const expected = "elp xhm xf mbymwwmfj dne"
  const actual = substitution(input, alphabet)
  expect(actual).to.eql(expected);
   })
  
      it("Maintains spaces in the message, before and after decoding.", () => {
  const input = "elp xhm xf mbymwwmfj dne"
  const alphabet = "xoyqmcgrukswaflnthdjpzibev"
  const expected = "you are an excellent spy"
  const actual = substitution(input, alphabet, false)
  expect(actual).to.eql(expected);
   })
  
     it("Ignores capital letters.", () => {
  const input = "You Are An Excellent Spy"
  const alphabet = "xoyqmcgrukswaflnthdjpzibev"
  const expected = "elp xhm xf mbymwwmfj dne"
  const actual = substitution(input, alphabet)
  expect(actual).to.eql(expected);
   })
})
