app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams','$timeout',function($scope, searchSvc, $stateParams, $timeout){

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

