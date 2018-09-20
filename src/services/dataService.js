//http service to job API
app.service('searchSvc', function($http){
    this.getJobs = function(){
        return $http.get('http://vm-1-rmartin9.paychex.com:8080/job')
    };
});