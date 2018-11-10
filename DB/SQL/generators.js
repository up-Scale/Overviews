const casual = require('casual');
const categories = require('../categories');

const generateStringOfWords = function(min, max) {
  return casual.array_of_words(casual.integer(min, max)).join(',')
}

const generateImages = function(productId) {
  let images = '';
  for (let j = 0; j <= casual.integer(5, 15); j++) 
    images += `https://picsum.photos/800/600/?${casual.integer(1,100000)},${productId}\n`;
  return images;
};

const generateDescriptions = function(productId) {
  let rows = '';
  for (let j = 0; j <= casual.integer(3, 6); j++) rows += `${casual.title}\r${casual.description}\r${productId}\n`
  return rows;
};

const generateAttributes = function(productId) {
  return `${productId}\r${categories[casual.integer(0,25)]}\rhttps://www.youtube.com/results?search_query=massdrop\r${casual.date()}\r${generateStringOfWords(5, 20)}\r${generateStringOfWords(10, 50)}\n`
}

const generateBatch = function(generator, batchSize, startingProductId = 0) {
  let batch = '';
  for (let i = 0; i <= batchSize; i++) { batch += generator(startingProductId++) }
  return batch;
};

const generateSQLData = function(rounds, batchSize, generator, stream) {
  let round = 1;
  let productId = 0
  let batch = '';

  stream.on('finish', function() {
    console.log('stream finished. All data generated');
  })

  stream.on('drain', function() {
    console.log('drain triggered, on round: ', round);
    console.log('memory used: ', process.memoryUsage().heapUsed / 1000000);
    if (round++ <= rounds) {
      stream.write(batch);
      batch = generateBatch(generator, batchSize, productId += batchSize)
    } else stream.end();
  });

  batch = generateBatch(generator, batchSize, productId += batchSize);
  stream.write(generateBatch(generator, batchSize, productId -= batchSize));
}


module.exports = { generateImages, generateSQLData, generateAttributes, generateDescriptions }