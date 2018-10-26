var mongoose = require('mongoose');
var data = require('./included.js')
const fs = require('fs');
mongoose.connect('mongodb://localhost/description');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  //seedDatabase();
  console.log('mongoose connected successfully');
});

var overviewSchema = mongoose.Schema({
  prod_name: String,
  specs: Array,
  included: Array,
  boxContent: Array,
  descriptionHeader: Array,
  description: Array,
  imageHeader: Array,
  images: Array,
  shippingDate: String,
  details: Array
});

var Overview = mongoose.model('Overview', overviewSchema);

  
var saveDescription = (info, callback) => {
  console.log('info looks like : ', info);
  let overview = new Overview({
    prod_name: info.prod_name,
    specs: info.specs,
    included: info.included,
    boxContent: info.boxContent,
    descriptionHeader: info.descriptionHeader,
    description: info.description,
    imageHeader: info.imageHeader,
    images: info.images,
    shippingDate: info.shippingDate,
    details: info.details
  }).save();
  callback(null);
};

var seedDatabase = () => {
  console.log(data.file);
  data.file.forEach((prod) => {
    console.log(prod)
    saveDescription(prod, () => {
      console.log('Inserted');
    })
  })
}

var getOverviewData = (params) => {
  return Overview.find({prod_name: params});
}

var get = () => {

}

module.exports = {getOverviewData};