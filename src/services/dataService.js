//http service to job API
app.service('searchSvc', function($http, url){

    var jobDetailsArray = [];

    this.getJobs = function(){
        return $http.get(url)    
    };
    this.getOneJob = (job) => {
        console.log(job._id);
        console.log(typeof job._id);
        return $http.get(url + job._id)
    };
});