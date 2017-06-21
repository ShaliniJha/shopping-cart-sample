var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingcart');

var Schema = mongoose.Schema;

var cartSchema = new Schema({
  "name": {type:String, required: true},
  "brand": {type:String, required: true},
  "imageUrl": {type:String, required: true},
  "price": {type:String, required: true},
  "discountPrice": String,
  "description": String,
  "reviewers": Array
}, {collection : 'Cart'});

var cartData = mongoose.model('Cart', cartSchema);

/* GET product list. */
router.get('/', function(req, res, next) {
    cartData.find()
    .then((doc) => {
        res.json({"cartData": doc})
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

  var data = new cartData(item)
  data.save();
  res.json({Message: "Created successfully!"});
});


/**
 * delete a product
 */
router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  cartData.findByIdAndRemove(id).exec()
  res.json({"Message": "Removed Successfully!"})
});


module.exports = router;