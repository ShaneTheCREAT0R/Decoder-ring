// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
     const cipher = {};
     const alphabetMap = {};
  
    
    if (
      !alphabet ||
      alphabet.length !== 26
    )
      return false;

    
    const alphabetArray = alphabet.split("")
    let isUnique = true
    console.log(alphabetArray)
    alphabetArray.forEach((letter) => {
      if (alphabetMap[letter]) {
        isUnique = false
      } 
      alphabetMap[letter] = letter
    })
    
    if(!isUnique) return false
    
    const cipherAlphabet = encode ? standardAlphabet : alphabet
    const encoderAlphabet = encode ? alphabet : standardAlphabet

   
      for (let i = 0; i < 26; i++) {
        cipher[cipherAlphabet[i]] = encoderAlphabet[i];
      }
  
    let answer = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (!cipher[letter]) return letter;
        return cipher[letter];
      });
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
