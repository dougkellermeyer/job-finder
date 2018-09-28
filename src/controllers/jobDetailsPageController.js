app.config(function($stateProvider){
    $stateProvider
        .state('sharedDetails', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function($timeout, saveJobSvc){
    this.saveJobSvc = saveJobSvc;
    
    vm = this; 

    vm.loading = true;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
            .then(function(){
                vm.loading = false;
            })
    }
});