app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchPage', {
            url: '/search',
            templateUrl: 'jobSearchPage.html',
            controller: "jobSearchPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobSearchPageController",function($scope, $state, $transitions, states, items){

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

    this.showSelected = function(){
        //checking to see if any checkboxes were selected
        $transitions.onBefore({}, function(){
            if (!Array.isArray($scope.selected) || !$scope.selected.length) {
                return false;
            }
        })
        $state.go('jobSearchResults',{
            selected: $scope.selected.join(','),
        });
    }
});
