const fs = require('fs');
const imagesStream = fs.createWriteStream('./csv/images.csv');
const descriptionsStream = fs.createWriteStream('./csv/descriptions.csv');
const attributesStream = fs.createWriteStream('./csv/attributes.csv');
const productsStream = fs.createWriteStream('./json/products.json');
const { generateImages, generateDescriptions, generateAttributes, generateProducts, generateData } = require('./generators');


// generateData(10, 1000, generateImages, imagesStream);
// generateData(10, 1000, generateDescriptions, descriptionsStream);
// generateData(10, 1000, generateAttributes, attributesStream);
generateData(10, 1000, generateProducts, productsStream);











// writer.pipe(fs.createWriteStream('sqlData.csv'));

// const writeSQL = function(size) 
//   let round = 1;

// }

// const array_of_words = function(min, max) {
//   return casual.array_of_words(casual.integer(min, max));
// }

// const insertProduct = function ({category, productName, included, video, shippingDate, specs, productId}) {
//   included = included.join(',');
//   specs = specs.join(',');

//   client.HMSET(
//     productName,
//     'productId', productId,
//     'category', category,
//     'video', video,
//     'shippingDate', shippingDate,
//     'included', included,
//     'specs', specs
//   );
// };

// for (var i = 0; i < 10000000; i++) {
//   insertProduct({
//     productId: i,
//     category: categories[casual.integer(0, 24)],
//     productName: array_of_words(2,5).join('-'),
//     included:array_of_words(3,10),
//     video: 'https://youtu.be/bEPg8kk84gw',
//     shippingDate: casual.date(format = 'YYYY-MM-DD'),
//     specs:array_of_words(3, 10)
//   });
// };

// client.on('idle', function() {
//   console.log('finished')
// })
