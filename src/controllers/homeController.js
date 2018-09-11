app.controller("homeController", function($scope, searchSvc){
    var vm = this;

    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data.jobs;
        console.log("jobs.json linked");
    })
    $scope.quantity = 5;
});