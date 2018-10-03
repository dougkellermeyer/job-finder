app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchResults', {
            url: '/results?selected',
            templateUrl: 'jobSearchResults.html',
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl"
    
        })
})
app.controller("jobSearchResultsController", 
    function($scope, searchSvc, $stateParams,$timeout, saveJobSvc, $transitions){
    
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
        console.log($scope.selectedOptions);
        alert("no options were selected")
    }
    
    
    //remove chip search/filter term from selectedOptions array
    this.removeFilterTerm = (filterTerm) => {
        //find filterTerm in scope.selectedOptions remove it from the selectedOptions array
        var index = $scope.selectedOptions.indexOf(filterTerm);
        
        if (index !==-1){
        $scope.selectedOptions.splice(index,1)
        }
        //puts the selectedOptions into a string to be passed to keywordFilter: selected
        $scope.selectedOptions.join()
        //reassign $scope.selected to new array of strings
        $scope.selected = $scope.selectedOptions.join();

        //remove filterTerm from $stateParams.selected to update url
        
    }

    //put job object into saveJobSvc, inject into savedJobsController and savedJob.html
    this.saveJob = (job) => {
        saveJobSvc.addSavedJobs(job);
    }

    //params for dir-pagination controls
    $scope.currentPage =1;
    $scope.pageSize = 10;

    //table sort parameters
    $scope.orderByField = 'positionName';
    $scope.reverseSort = false;

});


