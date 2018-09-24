app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchResults.details', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function(){

});