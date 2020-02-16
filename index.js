var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//
//  filter the twitter public stream by the word 'bfmtv'.
//
var stream = T.stream('statuses/filter', { track: 'bfmtv' })
 
stream.on('tweet', function (tweet) {
  console.log('Id du tweet: '+tweet.id_str)
})
