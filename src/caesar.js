// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  
  function caesar(input, shift, encode = true) {
   if (!shift || shift == 0 || shift < -25 || shift > 25) return false
   
    //decodes the string if the encode is set to false
    if (!encode) {
      shift = shift * -1;
    }
    
    //loop through the input word and shift each letter by the shift amount
    let newWord = ""
    let lowercaseInput= input.toLowerCase()
    for (let i = 0; i < lowercaseInput.length; i++){
      const codeNumber = lowercaseInput[i].charCodeAt()
      
      if (codeNumber > 122 || codeNumber < 97){
        newWord += lowercaseInput[i]
      }
      
      else {
        let shiftedNumber = codeNumber + shift
       while (shiftedNumber > 122){
         const difference = shiftedNumber - 122
         shiftedNumber = 96 + difference
       }
      
     while (shiftedNumber < 97){
        const difference = 97 - shiftedNumber 
        shiftedNumber = 123 - difference
      }
      
     newWord += String.fromCharCode(shiftedNumber); 

      } 
    }
   return newWord
  }
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
