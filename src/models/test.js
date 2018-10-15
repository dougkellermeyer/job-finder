var mongoose = require('mongoose');

//test Schema

var testSchema = mongoose.Schema({
    name: String,
});

var Test = module.exports = mongoose.model('Test', testSchema, 'test');

//get Test 
module.exports.getTests = (callback) => {
    Test.find(callback);
}