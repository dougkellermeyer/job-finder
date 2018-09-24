app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchResults', {
            url: '/results/:selected',
            templateUrl: 'jobSearchResults.html',
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl",
        })
})
app.controller("jobSearchResultsController", 
    ['$scope','searchSvc','$stateParams','$timeout',
    function($scope, searchSvc, $stateParams,$timeout){
    
    vm = this;

    this.$onInit = function(){
        $timeout(function(){}, 1500)
            .then(searchSvc.getJobs)
                .then(function(res){
                    vm.jobs = res.data
                    vm.loading = false;
                })
    }

    //default loading to true, then $timeout, after .then
     vm.loading = true;

    //get all jobs service
    this.jobs = null;

    //passing selected checkboxes from jobSearchController.js
    $scope.selected = [];
    
    if($stateParams.selected){
        $scope.selected = $stateParams.selected;
    }
    //pass result to scope and store it a variable so we can split it
    $scope.result = $scope.selected;

    if ($scope.result && $scope.result.length){
    $scope.selectedOptions = $scope.result.split(',');
    }
    else{
        $scope.selectedOptions = [];
    }
    
    console.log($scope.selectedOptions);

    this.removeFilterTerm = (filterTerm) => {
        //find filterTerm in scope.selectedOptions remove it from the selectedOptions array
        console.log(filterTerm);
        selectedOptions.splice(filterTerm,1)
    }


    //params for dir-pagination controls
    $scope.currentPage =1;
    $scope.pageSize = 10;

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

    //function to remove a row/job from the table
    $scope.removeJob = function(){
        console.log("removeJob function firing")
        var tableArray = [];
        $scope.jobList = this.jobs;

        angular.forEach($scope.jobList, function(val){
            //loop through and see which box is checked, re-create the 
            //table without the selected row(s)
            if(!val.Remove){
                tableArray.push(val);
            }
        });
        $scope.jobList = tableArray;
    };
}]);


