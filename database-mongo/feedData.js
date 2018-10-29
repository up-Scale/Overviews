const db = require('./index.js');
var mongoose = require('mongoose');
var data = require('./seed.js')


    
  var saveDescription = (info, callback) => {
    let overview = new db.Overview({
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
