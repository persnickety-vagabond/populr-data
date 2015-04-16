
/****************
  Server Config
****************/

/*
  Sets up the routing for the server, sending each
  API request to its associated controller
*/

/* * Imports * */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');
var cors = require('cors');

/* * Middleware * */

module.exports = app = express();
app.use(cors());
app.use(bodyParser.json());

/* * API Routing * */

app.get('/top', function(req, res){
    console.log('BEFORE');
  db.getTop().then(function(data){
    console.log('inside');
    res.send(data);
    console.log('after')
  });
});

app.get('/people/*', function(req, res){
  db.getPerson(req.url.slice(8)).then(function(data){
    res.send(data);
  });  
});

// app.post('/top', function(req, res){
//   db.setTop(req.body);
//   res.send('OK');
// });

// app.post('/people', function(req, res){
//   db.setPerson(req.body.firstName, req.body.details);
//   res.send('OK');
// });  


var port = process.env.PORT || 9100;

app.listen(port, function() {
  console.log('listening on', port);
});

