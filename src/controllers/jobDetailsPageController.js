app.config(function($stateProvider){
    $stateProvider
        .state('sharedDetails', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function($timeout, saveJobSvc, searchSvc){
    this.saveJobSvc = saveJobSvc;
    
    vm = this; 

    vm.loading = true;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
            .then(searchSvc.getOneJob)
                .then(function(res){
                    vm.oneJob = res.data
                    vm.loading = false;
                })
    }

});