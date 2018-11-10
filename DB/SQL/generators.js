const casual = require('casual');

const generateImages = function(productId) {
  let images = '';
  for (let j = 0; j <= casual.integer(5, 15); j++) {
    images += `https://picsum.photos/800/600/?${casual.integer(1,100000)},${productId}\n`;
  }
  return images;
};

const generateDescriptions = function(productId) {
  let rows = '';
  for (let j = 0; j <= casual.integer(3, 6); j++) {
    rows += `${casual.title}\r${casual.description}\r${productId}\n`
  };
  return rows;
}

const generateBatch = function(generator, batchSize, startingProductId = 0) {
  let batch = '';
  for (let i = 0; i <= batchSize; i++) { batch += generator(startingProductId++) }
  return batch;
};

const generateSQLData = function(rounds, batchSize, generator, stream) {
  let round = 1;
  let productId = 0

  stream.on('finish', function() {
    console.log('stream finished. All data generated');
  })

  stream.on('drain', function() {
    console.log('drain triggered')
    if (round++ < rounds) {
      console.log('another round?')
      stream.write(generateBatch(generator, batchSize, productId += batchSize));
    } else stream.end();
  });

  stream.write(generateBatch(generator, batchSize, productId));
}


module.exports = { generateImages, generateSQLData, generateDescriptions }