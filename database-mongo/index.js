var mongoose = require('mongoose');
var data = require('./seed.js')
mongoose.connect('mongodb://localhost/description');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  // seedDatabase();
  console.log('mongoose connected successfully');
});


var getOverviewData = (params) => {
  return Overview.find({prod_name: params});
}

var getHtmlData = (params) => {
  console.log('on Database func')
  return overviewMain.find();
}

module.exports = {getOverviewData, getHtmlData, db};