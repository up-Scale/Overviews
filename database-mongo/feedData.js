const {db} = require('./index.js');
var mongoose = require('mongoose');
var data = require('./seed.js')

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
  details: Array,
  html: String
});


var Overview = mongoose.model('Overview', overviewSchema);
    
  var saveDescription = (info, callback) => {
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
      details: info.details,
      html: info.html
    }).save();
    callback(null);
  };
  
  var seedDatabase = () => {
    data.file.forEach((prod) => {
      saveDescription(prod, () => {
        console.log('Inserted');
      })
    })
  }

  seedDatabase();
