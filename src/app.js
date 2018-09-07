var app = angular.module('jobFinder', ['ngMaterial']);

// app.config(function($stateProvider){
//     $stateProvider
//         .state('signIn', {
//             url: '/views/signin',
//             template: '<sign-in></sign-in>'
//     })
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

