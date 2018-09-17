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
    console.log($scope.selected);
}]);

app.filter('keywordFilter', function(){
    return function(input, checked){
        console.log(typeof checked)

        //need to split checked into an array

        // var checkedPutIntoArray = checked.split();

        var output = [];

        if (checked == ""){
            return input;
        }
        else {
            angular.forEach(input, function(value){
                if(value.positionName == checked){
                    output.push(value);
                }
            })
            return output;
        }

        
    }
});

