var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart');

var Schema = mongoose.Schema;

var reviewerSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true}

}, {collection: 'Reviewers'});

var reviewerData = mongoose.model('Reviewer', reviewerSchema);

/**
 * Get reviewers list
 */
router.get('/', function(req, res, next) {
  reviewerData.find()
  .then((doc) => {
    res.json(doc)
  })
});

/**
 * Get reviewers list passing an array of ids in query params
 */

router.get('/ids', function(req, res, next) {
  var idList = req.query.id;
  reviewerData.find({_id: {$in: idList}})
  .then((doc) => {
    res.json(doc)
  })
});

/**
 * Get reviewers list passing a single id as a url param
 */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  reviewerData.findById(id)
  .then((doc) => {
    console.log(doc)
    res.json(doc);
  }, (err) => {
    if(err){
      res.json({Error: "No Such Entry"})
    }
  })
});

/**
 * Add a reviewer
 */
router.post('/add', function(req, res, next) {
  var item = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }
  var data = new reviewerData(item)
  data.save();
  res.json({Message: "Created successfully!"});
});
module.exports = router;
