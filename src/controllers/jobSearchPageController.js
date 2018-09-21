app.config(function($stateProvider){
    $stateProvider
        .state('jobSearchPage', {
            url: '/search',
            templateUrl: 'jobSearchPage.html',
            controller: "jobSearchPageController",
            controllerAs: "$ctrl"
        })
});

app.controller("jobSearchPageController",function($scope, $state, $transitions, states){

    this.userState = '';
    this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY')
        .split(' ').map(function (state) { 
            return state; 
        })

    // this.userState = '';
    // states.split(',') = (function (state) { 
    //     console.log(state);
    //         return state; 
    //     })

    $scope.items = ["Software","Leading teams","Software Engineer","JavaScript","Full Stack","Software Developer", "Front End", "Database Administration"];
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

    $scope.showSelected = function(){
        $state.go('jobSearchResults',{
            selected: $scope.selected.join(','),
        });
    }
});
