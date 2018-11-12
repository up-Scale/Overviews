const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/SDC',
  { userNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', function() {
  console.log('there is an error connecting to mongodb');
});
db.once('open', function() {
  console.log('mongodb connected !!!');
});

const productSchema = new mongoose.Schema({
  productName: String,
  productId: Number,
  category: String,
  attributes: {
    video: String,
    shippingDate: String,
    included: [String],
    specs: [String]
  },
  images: [String],
  descriptions: [String]
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
