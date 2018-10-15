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
    }
});

var newJob = module.exports = mongoose.model('newJob', jobSchema);