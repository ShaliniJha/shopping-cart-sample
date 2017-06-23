var twit = require('twit');
var express = require('express');
var router = express.Router();
var twitter = new twit({
    consumer_key: 'QdUOJRkYiUCkrnfTmIePzGynH',
    consumer_secret: 'bp98xdrlPmP2Jvune9BmbnKVZ3t24TarJWrxDWiQlqjQ2QA9te',
    access_token: '828515958272634881-Vak6ACWtMQjEAzHhrEVF6keSulhKsur',
    access_token_secret: 'uRcZxoBb6GqlQx5l0sc85VNUUIR5r2ZOPrwKsHNDmXkhK'
})

router.get('/search', (req, res, next)=>{
    var payload = {q: req.query.keyword, count: parseInt(req.query.maxCount)||5};
    twitter.get('search/tweets', payload, (err, data, response) => {
        res.json(data)
    })
})

module.exports = router;
