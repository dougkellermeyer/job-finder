//http service to job API
app.service('searchSvc', function($http, url, urlById){
    this.getJobs = function(){
        return $http.get(url)    
    };
    this.getOneJob = () => {
        return $http.get(urlById + "5ba8de0aa30f4a656885a727");
    };
});