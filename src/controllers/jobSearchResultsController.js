app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams',function($scope, searchSvc, $stateParams){

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
}]);

app.filter('keywordFilter', function(){
    return function(allJobs, checked){
        //need to split checked into an array
        var checkedArray = checked.split(",");
    
        var output = [];

        if (checkedArray == []){
            return allJobs;
        }
        else {
            angular.forEach(allJobs, function(value){
                if(value.positionName == checkedArray){
                    output.push(value);
                }
            })
            return output;
        }

        
    }
});

