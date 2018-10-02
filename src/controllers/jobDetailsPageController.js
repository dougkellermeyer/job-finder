app.config(function($stateProvider){
    $stateProvider
        .state('sharedDetails', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl",
            params: {
                job: null
            }
        })
});

app.controller("jobDetailsPageController", function($timeout, saveJobSvc, searchSvc, $scope){
    this.saveJobSvc = saveJobSvc;
    this.searchSvc = searchSvc;
    
    vm = this; 

    this.loading = true;
    this.oneJob = null;

    this.$onInit = function(job){
        searchSvc.getOneJob(job)
        .then(function(res){
            $scope.oneJob = res.data
        })
        $timeout(function(){}, 1500)
        .then(() => {
            vm.loading = false;
        });
    }
});

