app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams','filterSelectedSvc', '$filter',function($scope, searchSvc, $stateParams,filterSelectedSvc, $filter){

    var vm = this;

    //get all jobs service
    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data.jobs;
    })

    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

    //passing selected checkboxes from jobSearchController.js
    $scope.selected = [];
    
    if($stateParams.selected){
        $scope.selected = $stateParams.selected;
    }

    $scope.result = $scope.selected;

    //running an async get http request to get json data so we can filter it using {{result}}
    // from $state.go in jobSearchPage.js

    filterSelectedSvc.async().then(function(d){
        $scope.data = d;
        console.log(d);
    // put in filter service here using $filter

    });
}]);

app.filter('keywordFilter', function(){
    return function(input){
        var output = [];
        angular.forEach(input, function(value){
            if(value.positionName == "Software Engineer" )
            {
                output.push(value);
            }
        })
        console.log("filter working");
        return output;
    }
});

