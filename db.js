var redis = require('then-redis');
var db = {};

// Creates client and connects
var client = redis.createClient({
  host: process.env.REDISCLOUD_URL || '',
  port: '15340',
  password: process.env.REDISCLOUD_PASSWORD || ''
});
// Gets top table
db.getTop = function(){
  return client.get('top').then(function(value){
    return value;
  });
}

// Gets details object for a specific person
db.getPerson = function(name){
  return client.get(name).then(function(value){
    console.log(name);
    return value;
  });
}

// Sets top table
db.setTop = function(data){
  client.set('top', data);
}

// Sets person details
db.setPerson = function(name, data){
  // console.log(escape(name));
  client.set(escape(name), data);
}

module.exports = db;





