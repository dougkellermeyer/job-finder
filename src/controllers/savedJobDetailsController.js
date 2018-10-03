app.config(function($stateProvider){
    $stateProvider
        .state('savedJobs.details', {
            url: '/details/:savedJobId',
            templateUrl: 'savedJobsDetails.html',
            controller: "savedJobsDetailsController",
            controllerAs: "$ctrl",
            resolve: {
                savedJobDetails: function(searchSvc, $stateParams){
                    return searchSvc.getOneJob($stateParams.savedJobId);
                }
            },
        })
});

app.controller("savedJobsDetailsController",
function(saveJobSvc, searchSvc, $scope, savedJobDetails, $timeout){

this.saveJobSvc = saveJobSvc;
this.searchSvc = searchSvc;

$scope.savedJobDetails = savedJobDetails;

vm = this;

this.$onInit = function(){
    $timeout(function(){}, 1500)
            .then(function(){
                vm.loading = false;
            })
}

vm.loading = true;

});