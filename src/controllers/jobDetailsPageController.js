app.config(function($stateProvider){
    $stateProvider
        .state('details', {
            url: '/details/:jobId',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl",
            resolve: {
                oneJob: function(searchSvc, $stateParams){
                    return searchSvc.getOneJob($stateParams.jobId);
                }
            },
        })
});

app.controller("jobDetailsPageController", function(saveJobSvc, searchSvc, $timeout, oneJob){
    this.saveJobSvc = saveJobSvc;
    this.searchSvc = searchSvc;

    this.oneJob = oneJob;
    
    vm = this; 

    this.loading = true;
    this.oneJob = null;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
        .then(() => {
            vm.loading = false;
        });
    }
});

