app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams','searchResult',function($scope, searchSvc, $stateParams, searchResult){

    var vm = this;

    //get all jobs service
    // searchSvc.getJobs().then(function(res){
        vm.jobs = searchResult;
    // })

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

    //for md-chips
    $scope.readonly = false;

    //passing selected checkboxes from jobSearchController.js
    $scope.selected = [];
    
    if($stateParams.selected){
        $scope.selected = $stateParams.selected;
    }
    //pass result to scope and store it a variable so we can split it
    $scope.result = $scope.selected;

    $scope.selectedOptions = $scope.result.split(',');
    //     console.log($scope.selectedOptions);

    //if user doens't select a checkbox, bring back all the jobs
    // if($scope.selectedOptions == "" || $scope.selectedOptions == undefined){
    //     return vm.jobs;
    // }
    // else{
    //     $scope.selectedOptions = $scope.result.split(',');
    //     console.log($scope.selectedOptions);
    // }
    

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
