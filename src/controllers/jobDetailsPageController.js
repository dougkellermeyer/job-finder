app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchResults.details', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function($timeout){
    vm = this; 

    vm.loading = true;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
            .then(function(){
                console.log("jobDetails timer working")
                vm.loading = false;
            })
    }
});