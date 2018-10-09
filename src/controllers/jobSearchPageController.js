app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchPage', {
            url: '/search',
            templateUrl: 'jobSearchPage.html',
            controller: "jobSearchPageController",
            controllerAs: "$ctrl",
            resolve: {
                jobLists: function(searchSvc){
                    return searchSvc.getJobs();
                }
            },
        })
});

app.controller("jobSearchPageController",function($scope, $state, $transitions, states, items, searchSvc, jobLists){
    //have searchSvc to have jobs available for keywordFilter 
    this.searchSvc = searchSvc;
    //make list of jobs available 
    this.jobLists = jobLists.data; 

    this.userState = '';
  
    this.states = states; 
    
    $scope.items = items;
    $scope.selected = []; 
        
    //tracks what is selected in checkboxes and pushes them to the $scope.selected
    $scope.toggle = function (item, list) {
        if (list.includes(item)) {
            $scope.selected = list.filter(function (val) {
              return item !== val;
            });
        } 
        else {
            $scope.selected = list.concat(item);
        }
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };

    this.showResults = function(){
        $state.go('jobSearchResults',{
            selected: $scope.selected.join(','),
        });
    }
});
