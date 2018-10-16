var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose').set('debug', true);
var router = express();

Job = require('./models/jobSchema');
Test = require('./models/test');

var PORT = 8080;

//Connect to mongoose and locally hosted mongoDB 

mongoose.connect('mongodb://localhost/jobs');
var db = mongoose.connection;

router.get('/', (req, res) => {
    res.send('Please use the /api/jobs');
});

router.get('/api/jobs', (req, res) => {
    Job.getNewJobs((err,jobs)=>{
        if(err){
            throw err;
        }
        res.json(jobs);
    })
});

router.get('/api/jobs/:_id', (req, res) => {
    Job.getJobById(req.params._id,(err,job)=>{
        if(err){
            throw err;
        }
        res.json(job);
    });
});

router.listen(PORT);
console.log("running app on port " + PORT + " !")

//additional http functions needed for API
// router.post();
// router.put();
// router.get();
// router.delete();
// router.get();