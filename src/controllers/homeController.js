app.controller("homeController", function($http, $scope, searchSvc){
    var vm = this;

    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data.jobs;
        console.log("json found");
    })
});