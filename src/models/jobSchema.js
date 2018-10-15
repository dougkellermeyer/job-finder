var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    positionName: {
        type: String,
        required: true
    },
    positionDescription: {
        type: String,
        required: true
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

var Job = module.exports = mongoose.model('Job', jobSchema, 'jobList');

//get all jobs

module.exports.getNewJobs = (callback) => {
    Job.find(callback);
};

//get one job
module.exports.getJobById = (id, callback) => {
    Job.findById(id,callback);
};

