// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
     input = input.toLowerCase();
    let newString = "";
    const alphabet = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    const decodeKey = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    //encoding
    if (encode) {
      let letterMap = {};
      //find the letter and from the letter get the number of the array and number inside the array
      alphabet.forEach((letterArray, arrayIndex) => {
        letterArray.forEach((letter, letterIndex) => {
          letterMap[letter] = `${letterIndex + 1}${arrayIndex + 1}`;
        });
      });

      let inputArray = input.split("");

      const convertedArray = inputArray.map((charCharacter) => {
        let convertedCharacter = charCharacter;
        if (charCharacter == "i" || charCharacter == "j") {
          convertedCharacter = "(i/j)";
        }
        if (letterMap[convertedCharacter]) {
          convertedCharacter = letterMap[convertedCharacter];
        }
        return convertedCharacter;
      });

      const convertedString = convertedArray.join("");
      return convertedString;
    }

    //decoding
    let result = "";
    if (!encode) {
      key = decodeKey;
      splitString = input.split(" ");
      if (splitString.reduce((acc, array) => acc + array.length, 0) % 2)
        return false;
      splitString = splitString
        .map((section) => {
          return section.split("").reduce((acc, character, index, collect) => {
            if (character === " ") {
              acc.push(" ");
            } else if (!(index % 2)) {
              acc.push(character + collect[index + 1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
    }
    return splitString.map((character) => key[character] || " ").join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
