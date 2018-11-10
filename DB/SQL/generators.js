const casual = require('casual');

const generateImages = function(productId) {
  let images = '';
  for (let j = 0; j <= casual.integer(5, 15); j++) {
    images += `https://picsum.photos/800/600/?${casual.integer(1,100000)},${productId}\n`;
  }
  return images;
};

const generateImagesBatch = function(stream, batchSize, startingProductId = 0) {
  let batch = '';
  for (let i = 0; i <= batchSize; i++) { batch += generateImages(startingProductId++) }
  stream.write(batch)
};

const generateSQLData = function(rounds, batchSize, generator, stream) {
  let round = 1;
  let productId = 0

  stream.on('finish', function() {
    console.log('stream finished. All data generated');
  })

  stream.on('drain', function() {
    if (round++ < rounds) {
      generator(stream, batchSize, productId += batchSize);
    } else stream.end();
  });

  generator(stream, batchSize, productId)
}


module.exports = { generateImagesBatch, generateSQLData }