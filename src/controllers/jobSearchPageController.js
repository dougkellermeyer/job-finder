app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchPage', {
            url: '/search',
            templateUrl: 'src/views/jobSearchPage.html',
            controller: "jobSearchPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobSearchPageController",function($scope, $state, states, items, searchSvc){
    //have searchSvc to have jobs available for keywordFilter 
    this.searchSvc = searchSvc;

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
