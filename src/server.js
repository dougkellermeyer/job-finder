var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose').set('debug', true);
// var env = require('dotenv');

var config = require('./src/api/config')
var routes = require('./src/api/routes')

var app = express();

app.use(bodyParser.json());
app.use('/', routes);

mongoose.connect(config.mongo.url);

if (config.seedDB){
    require('./src/api/seeddb');
}

app.listen(config.server.port, () => {
    console.log('running app on port ' + config.server.port + '!')
});