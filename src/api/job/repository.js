var Job = require('./schema');

//Will GET  all jobs in DB
module.exports.getJobs = (callback) => {
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