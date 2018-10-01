//http service to job API
app.service('searchSvc', function($http, url){
    this.getJobs = function(){
        return $http.get(url)    
    };
    this.getOneJob = (jobId) => {
        return $http.get(url + jobId);
    };
});