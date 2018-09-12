app.controller("jobSearchResultsController", function($scope, searchSvc){
    console.log("job search results working!")

    var vm = this;

    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data.jobs;
        console.log("all jobs received");
    })

    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;
});