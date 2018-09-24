//http service to job API
app.service('searchSvc', function($http, url){
    this.getJobs = function(){
        return $http.get(url)    
    };
});