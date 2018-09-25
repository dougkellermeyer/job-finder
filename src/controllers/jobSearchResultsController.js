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

    if ($scope.selected && $scope.selected.length){
    $scope.selectedOptions = $scope.selected.split(',');
    }
    else{
        $scope.selectedOptions = [];
    }

    //remove chip search/filter term from selectedOptions array
    this.removeFilterTerm = (filterTerm) => {
        //find filterTerm in scope.selectedOptions remove it from the selectedOptions array
        
        //get index of filterTerm in array
        var index = $scope.selectedOptions.indexOf(filterTerm);
        //splice filterTerm from array
        if (index !==-1){
        $scope.selectedOptions.splice(index,1)
        }
        //convert selectedOptions back into a list of strings, connect with 
        //keywordFilter : selected from HTML template

        //puts the selectedOptions into a string to be passed to keywordFilter: selected
        $scope.selectedOptions.join()
        //reassign $scope.selected to new string of arrays 
        $scope.selected = $scope.selectedOptions.join();
    }



    //params for dir-pagination controls
    $scope.currentPage =1;
    $scope.pageSize = 10;

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

}]);


