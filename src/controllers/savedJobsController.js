app.config(function($stateProvider){
    $stateProvider
        .state('savedJobs', {
            url: '/saved',
            templateUrl: 'savedJobs.html',
            controller: "savedJobsController",
            controllerAs: "$ctrl"
        })
});

app.controller("savedJobsController", function(){
});
