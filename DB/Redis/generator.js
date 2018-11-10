const casual = require('casual');

const array_of_words = function(min, max) {
  return casual.array_of_words(casual.integer(min, max));
}

const hsetAttributes = function ({category, productName, included, video, shippingDate, specs, productId}) {
  included = included.join(',');
  specs = specs.join(',');

  client.HMSET(
    productName,
    'productId', productId,
    'category', category,
    'video', video,
    'shippingDate', shippingDate,
    'included', included,
    'specs', specs
  );
};

const generateBatchAttributes = function(startingProductId, batchNumber) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < batchNumber; i++) { 
      hsetAttributes(generateAttributes(startingProductId++));
    }
  })
}

const generateAttributes = function(productId) {

}

for (var i = 0; i < 10000000; i++) {
  insertProduct({
    productId: i,
    category: categories[casual.integer(0, 24)],
    productName: array_of_words(2,5).join('-'),
    included:array_of_words(3,10),
    video: 'https://youtu.be/bEPg8kk84gw',
    shippingDate: casual.date(format = 'YYYY-MM-DD'),
    specs:array_of_words(3, 10)
  });
};

client.on('idle', function() {
  console.log('finished')
})