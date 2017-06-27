var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var bodyParser = require('body-parser');
var cors = require('cors');

var twitter = require('./routes/twitter');
var schema = require('./graphql/schema');

schema = buildSchema(schema);

var root = { hello: () => 'hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use('/twitter', twitter);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));