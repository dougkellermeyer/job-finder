var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    company: {
        type: String,
        // required: true
    },
    positionName: {
        type: String,
        // required: true
    },
    positionDescription: {
        type: String,
        // required: true
    },
    location: {
        state: {
            type: String,
        },
        city: {
            type: String
        },
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    __v: {
        type: Number
    }
});

var Job = module.exports = mongoose.model('Job', jobSchema, 'jobs');

//Will GET  all jobs in DB
module.exports.getNewJobs = (callback) => {
    Job.find(callback);
};

//Will GET job with specified id
module.exports.getJobById = (id, callback) => {
    Job.findById(id,callback);
};

//Will CREATE a new job in DB
module.exports.createJob = (job, callback) => {
    Job.create(job,callback);
};

//Will DELETE a job with specified id
module.exports.removeJob = (id, callback) => {
    var query = {_id: id};
    Job.remove(query,callback);
};

//Will UPDATE a job wiht specified id
module.exports.updateJob = (id, job, options, callback) => {
    var query = {_id: id};
    var update = {
        company: job.company,
        positionName: job.positionName,
    }
    Job.findOneAndUpdate(query, update, options, callback);
};
