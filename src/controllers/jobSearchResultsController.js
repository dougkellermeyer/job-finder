app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams','searchResult','loadingSearchResult',function($scope, searchSvc, $stateParams, searchResult, loadingSearchResult){

    var vm = this;

    //loading search results spinner
    vm.loading = loadingSearchResult;

    //get all jobs service
    vm.jobs = searchResult;

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

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

     //for md-chips of selected keywords/chips
     $scope.readonly = false;

    //function to remove a row/job from the table
    $scope.removeJob = function(){
        var tableArray = [];
        $scope.jobList = vm.jobs;

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

app.filter('keywordFilter', function(){
    return function(allJobs, checked, $timeout){
        //need to split checked into an array
    
        var output = [];

        if(checked == "" || checked == undefined){
            return allJobs;
        }
        else {
            var checkedArray = checked.split(",");
            angular.forEach(allJobs,function(value){                
                if(checkedArray.includes(value.positionName)){
                    output.push(value);
                }
            })
            return output;
        }
    }
    
});
