var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressApp = express();

var PORT = 8080;

//Connect to mongoose and locally hosted mongoDB 

mongoose.connect('mongodb://localhost/jobs');
var db = mongoose.connection;

expressApp.get('/', (req, res) => {
    res.send('Please use the /api/jobs');
});

expressApp.listen(PORT);
console.log("running app on port " + PORT + " !")

//additional http functions needed for API
// expressApp.post();
// expressApp.put();
// expressApp.get();
// expressApp.delete();
// expressApp.get();