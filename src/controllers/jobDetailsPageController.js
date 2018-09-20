app.config(function($stateProvider){
    $stateProvider
        .state('jobDetailsPage', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function(){
});