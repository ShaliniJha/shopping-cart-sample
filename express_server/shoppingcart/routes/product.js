var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingcart');

var Schema = mongoose.Schema;

var productSchema = new Schema({
  "name": {type:String, required: true},
  "brand": {type:String, required: true},
  "imageUrl": {type:String, required: true},
  "price": {type:String, required: true},
  "discountPrice": String,
  "description": String,
  "reviewers": Array
}, {collection : 'Products'});

var productData = mongoose.model('Product', productSchema);

/* GET product list. */
router.get('/', function(req, res, next) {
    productData.find()
    .then((doc) => {
        res.json({"gwData": doc})
    })
});

/**
 * Add a product
 */
router.post('/add', function(req, res, next) {
  var item = {
    name: req.body.name,
    brand: req.body.brand,
    imageUrl: req.body.imageUrl,
    price:req.body.price,
    discountPrice:req.body.discountPrice,
    description:req.body.description,
    reviewers:req.body.reviewers
  };

  var data = new productData(item)
  data.save();
  res.json({Message: "Created successfully!"});
});

module.exports = router;
