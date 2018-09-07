var app = angular.module('jobFinder', ['ngMaterial']);

// app.config(function($stateProvider){
//     $stateProvider.state('home', {
//             url: '/views/home',
//             templateUrl: 'home.html'
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

