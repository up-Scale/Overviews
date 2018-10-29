var mongoose = require('mongoose');
var data = require('./seed.js')
mongoose.connect('mongodb://localhost/description');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  // seedDatabase();
  // saveOverviewMain(seed,() => {
  //   console.log('Data entered');
  // })
  console.log('mongoose connected successfully');
});

// var overviewSchema = mongoose.Schema({
//   prod_name: String,
//   specs: Array,
//   included: Array,
//   boxContent: Array,
//   descriptionHeader: Array,
//   description: Array,
//   imageHeader: Array,
//   images: Array,
//   shippingDate: String,
//   details: Array,
//   html: String
// });

// var overviewMainSchema = mongoose.Schema({
//   html: String
// })

// var Overview = mongoose.model('Overview', overviewSchema);
// var overviewMain = mongoose.model('OverviewMain', overviewMainSchema);

// var saveOverviewMain = (info, callback) => {
//   console.log(typeof info.file);
//   let main = new overviewMain({
//     html: info.file
//   }).save();
//   callback(null);
// };

  
// var saveDescription = (info, callback) => {
//   let overview = new Overview({
//     prod_name: info.prod_name,
//     specs: info.specs,
//     included: info.included,
//     boxContent: info.boxContent,
//     descriptionHeader: info.descriptionHeader,
//     description: info.description,
//     imageHeader: info.imageHeader,
//     images: info.images,
//     shippingDate: info.shippingDate,
//     details: info.details,
//     html: info.html
//   }).save();
//   callback(null);
// };

// var seedDatabase = () => {
//   data.file.forEach((prod) => {
//     saveDescription(prod, () => {
//       console.log('Inserted');
//     })
//   })
// }

var getOverviewData = (params) => {
  return Overview.find({prod_name: params});
}

var getHtmlData = (params) => {
  console.log('on Database func')
  return overviewMain.find();
}

module.exports = {getOverviewData, getHtmlData, db};