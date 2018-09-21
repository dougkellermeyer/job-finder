app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchResults', {
            url: '/results/:selected',
            templateUrl: 'jobSearchResults.html',
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl",
            resolve: {
                delay: function($timeout){
                    return $timeout(function(){}, 1500);
                },
                searchResult: function($http, url){
                    return $http.get(url)
                            .then(function(res){
                                return res.data;
                            })
                }
            }
        })
})
app.controller("jobSearchResultsController", 
    ['$scope','searchSvc','$stateParams','searchResult','delay',
    function($scope, searchSvc, $stateParams, searchResult, delay){

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
    
    //loading search results spinner
    this.loading = delay;

    //get all jobs service
    this.jobs = searchResult;

    //for md-chips of selected keywords/chips
    $scope.readonly = false;

    //params for dir-pagination controls
    $scope.currentPage =1;
    $scope.pageSize = 10;

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

    //function to remove a row/job from the table
    $scope.removeJob = function(){
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


