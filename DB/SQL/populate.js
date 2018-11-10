const fs = require('fs');
const imagesStream = fs.createWriteStream('./csv/images.csv');
const descriptionsStream = fs.createWriteStream('./csv/descriptions.csv');
const { generateImages, generateDescriptions, generateSQLData } = require('./generators');


// generateSQLData(10, 5, generateImages, imagesStream);
// generateSQLData(10, 5, generateDescriptions, descriptionsStream);
imagesStream.on('drain', function() {
  console.log('draining')
})
imagesStream.write('hello world')
imagesStream.write('another hello')
imagesStream.on('finish', function() {
  console.log('good bye world')
})
imagesStream.end();











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
