var app = angular.module('jobFinder', ['ngMaterial']);

// app.config(function($stateProvider,$urlRouterProvider){
//     $urlRouterProvider.otherwise('/');

//     $stateProvider.state('signIn', {
//             url: '/signin',
//             templateUrl: '<sign-in></sign-in>'
//         })
// })

app.controller('AppCtrl', function($scope){

    function saveJob(){
        alert('Job Saved!');
    }
    $scope.saveJob = saveJob;
});

app.service('mainSvc', function($http){
    this.getPosts = function(){
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    };
});

