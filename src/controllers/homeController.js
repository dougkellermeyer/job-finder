app.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: "homeController",
            controllerAs: "$ctrl"
        })
});

app.controller("homeController", function(searchSvc, $scope){
    var vm = this;

    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data;
    })
    $scope.quantity = 5;
});