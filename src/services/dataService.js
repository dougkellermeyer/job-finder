//http service to job API
app.service('searchSvc', function($http, url){
    this.getJobs = function(){
        return $http.get(url)    
    };
    this.getOneJob = (job) => {
        return $http.get(url + job._id);
    };
});