var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose').set('debug', true);
var router = express();

router.use(bodyParser.json());

Job = require('./models/jobSchema');
Test = require('./models/test');

var PORT = 3000;

//Connect to mongoose and locally hosted mongoDB 

mongoose.connect('mongodb://localhost/jobs');
var db = mongoose.connection;

//message for hitting the API
router.get('/', (req, res) => {
    res.send('Please use the /api/jobs');
});

//Will GET  all jobs in DB
router.get('/api/jobs', (req, res) => {
    Job.getNewJobs((err, jobs) => {
        if (err) {
            throw err;
        }
        res.json(jobs);
    })
});

//Will CREATE a new job in DB
router.post('/api/jobs/', (req, res) => {
    Job.createJob(req.body, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
});

//Will GET job with specified id
router.get('/api/jobs/:_id', (req, res) => {
    Job.getJobById(req.params._id, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
});

//Will UPDATE job with specified id
router.put('/api/jobs/:_id', (req, res) => {
    var id = req.params._id;
    var job = req.body;
    Job.updateJob(id, job, {}, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
});

//Will DELETE job with specified id
router.delete('/api/jobs/:_id', (req, res) => {
    var id = req.params._id;
    Job.removeJob(id, (err, job) => {
        if (err) {
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