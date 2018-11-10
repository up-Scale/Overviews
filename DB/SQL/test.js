const casual = require('casual');

const generateStringOfWords = function(min, max) {
  return casual.array_of_words(casual.integer(min, max)).join(',')
}

console.log(generateStringOfWords(2, 5))