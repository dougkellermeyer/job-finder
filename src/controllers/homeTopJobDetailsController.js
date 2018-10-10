app.config(function($stateProvider){
    $stateProvider
        .state('home.details', {
            url: '/details/:homeJobId',
            templateUrl: 'homeTopJobDetails.html',
            controller: "homeTopJobDetailsController",
            controllerAs: "$ctrl",
            resolve: {
                homeJobDetails: function(searchSvc, $stateParams){
                    return searchSvc.getOneJob($stateParams.homeJobId);
                }
            },
        })
});

app.controller("homeTopJobDetailsController", function($timeout, saveJobSvc, searchSvc, $scope, homeJobDetails){

this.saveJobSvc = saveJobSvc;
this.searchSvc = searchSvc;

$scope.homeJobDetails = homeJobDetails;

vm = this;

this.$onInit = function(){
    $timeout(function(){}, 1500)
            .then(function(){
                vm.loading = false;
            })
}

vm.loading = true;

this.saveJob = (homeJobDetails) => {
    saveJobSvc.addSavedJobs(homeJobDetails.data);
}

});