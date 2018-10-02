//http service to job API
app.service('searchSvc', function($http, url){

    this.getJobs = function(){
        return $http.get(url)    
    };
    this.getOneJob = (jobId) => {
        console.log(jobId);
        console.log(typeof jobId);
        return $http.get(url + jobId)
    };
});