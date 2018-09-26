app.config(function($stateProvider){
    $stateProvider
        .state('home.details', {
            url: '/details',
            templateUrl: 'homeTopJobDetails.html',
            controller: "homeTopJobDetailsController",
            controllerAs: "$ctrl"
        })
});

app.controller("homeTopJobDetailsController", function(){
   console.log("homeTopDetailsController is working")
});