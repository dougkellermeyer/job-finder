//http service to job API
app.service('searchSvc', function(variableSvc, $http, url){
    this.getJobs = function(){
        return $http.get(url)    
    };
});