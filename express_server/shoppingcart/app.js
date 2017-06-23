var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
// var graphql = require('graphql');
// var graphqlHTTP  =  require('express-graphql');

var index = require('./routes/index');
var reviewers = require('./routes/reviewer');
var products = require('./routes/product');
var cart = require('./routes/cart');
var twitter = require('./routes/twitter');


var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/reviewers', reviewers);
app.use('/products', products);
app.use('/cart', cart);
app.use('/twitter', twitter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.use('/graphql', graphqlHTTP({
//   schema: schema, 
//   graphiql: true,
//   pretty: true
// }));

module.exports = app;
