var app = angular.module('jobFinder', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider){
    $stateProvider
        .state('landingPage', {
            url: '/',
            templateUrl: 'landingPage.html'
        })
        .state('signUp', {
            url: '/signup',
            templateUrl: '../src/components/signUp/signUp.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
})

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

