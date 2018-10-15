var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressApp = express();

Job = require('./models/jobSchema');
Test = require('./models/test');

var PORT = 8080;

//Connect to mongoose and locally hosted mongoDB 

mongoose.connect('mongodb://localhost/jobs');
var db = mongoose.connection;

expressApp.get('/', (req, res) => {
    res.send('Please use the /api/jobs');
});

expressApp.get('/api/jobs', (req, res) => {
    Job.getNewJobs((err,jobs)=>{
        if(err){
            throw err;
        }
        res.json(jobs);
    })
});

expressApp.get('/api/jobs/:id', (req, res) => {
    Job.getJobById(req.params._id,(err,job)=>{
        if(err){
            throw err;
        }
        res.json(job);
    });
});

expressApp.listen(PORT);
console.log("running app on port " + PORT + " !")

//additional http functions needed for API
// expressApp.post();
// expressApp.put();
// expressApp.get();
// expressApp.delete();
// expressApp.get();