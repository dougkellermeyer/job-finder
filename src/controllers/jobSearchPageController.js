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

    this.checkKeywordJobMatch = function(){
        //checking to see if any checkboxes were selected
        $transitions.onBefore({}, function(){
            //if no checkboxes were selected, abort transition
            if (!Array.isArray($scope.selected) || !$scope.selected.length) {
                alert("You didn't select anything")
                return false;
            }
            //if checkboxes selected don't match any in the jobs array, abort transition 
            else if($scope.selected.length > 2) {
                alert("None of your keywords matched a job listing. Please try again.")
                return false;
            }
            else{
                console.log("selected checkboxes match a job(s) and state go should go")
            }
        })
        $state.go('jobSearchResults',{
            selected: $scope.selected.join(','),
        });
    }
});
