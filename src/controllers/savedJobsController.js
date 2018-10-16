app.config(function($stateProvider){
    $stateProvider
        .state('savedJobs', {
            url: '/saved',
            templateUrl: 'src/views/savedJobs.html',
            controller: "savedJobsController",
            controllerAs: "$ctrl"
        })
});

app.controller("savedJobsController", function(saveJobSvc){
    //inject savedJobSvc to bring in the job object 
    this.saveJobSvc = saveJobSvc;
});
