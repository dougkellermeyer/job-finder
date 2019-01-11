var Job = require('./repository')

module.exports.find = (req,res) => {
    Job.getJobs((err, jobs) => {
        if (err) {
            throw err;
        }
        res.json(jobs);
    });
};

module.exports.post = (req, res) => {
    Job.createJob(req.body, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
}

module.exports.findOne = (req,res) => {
    Job.getJobById(req.params._id, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
}

module.exports.update = (req,res) => {
    var id = req.params._id;
    var job = req.body;
    Job.updateJob(id, job, {}, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
}

module.exports.remove = (req,res) => {
    var id = req.params._id;
    Job.removeJob(id, (err, job) => {
        if (err) {
            throw err;
        }
        res.json(job);
    });
}

