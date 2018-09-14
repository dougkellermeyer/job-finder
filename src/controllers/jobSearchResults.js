app.controller("jobSearchResultsController", ['$scope','searchSvc','$stateParams',function($scope, searchSvc, $stateParams){
    console.log("job search results working!")

    var vm = this;

    searchSvc.getJobs().then(function(res){
        vm.jobs = res.data.jobs;
        console.log("all jobs received");
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

