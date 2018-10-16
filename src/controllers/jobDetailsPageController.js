app.config(function($stateProvider){
    $stateProvider
        .state('details', {
            url: '/details/:jobId',
            templateUrl: 'src/views/jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl",
            resolve: {
                oneJob: function(searchSvc, $stateParams){
                    return searchSvc.getOneJob($stateParams.jobId);
                }
            },
        })
});

app.controller("jobDetailsPageController", function(saveJobSvc, searchSvc, $scope, $timeout, oneJob){
    this.saveJobSvc = saveJobSvc;
    this.searchSvc = searchSvc;

    $scope.oneJob = oneJob;
    
    vm = this; 

    this.loading = true;
    this.oneJob = null;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
        .then(() => {
            vm.loading = false;
        });
    }

    this.saveJob = (oneJob) => {
        saveJobSvc.addSavedJobs(oneJob.data);
    }
});

