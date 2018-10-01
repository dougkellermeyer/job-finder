app.config(function($stateProvider){
    $stateProvider
        .state('sharedDetails', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobDetailsPageController", function($timeout, saveJobSvc, searchSvc, $scope){
    this.saveJobSvc = saveJobSvc;
    this.searchSvc = searchSvc;
    
    vm = this; 

    this.loading = true;
    this.oneJob = null;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
            .then(searchSvc.getOneJob)
                .then(function(res){
                    $scope.oneJob = res.data
                    console.log(res.data);
                    vm.loading = false;
                })
    }

});

