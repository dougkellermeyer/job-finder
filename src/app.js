var app = angular.module('jobFinder', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('signUp', {
            url: '/signup',
            templateUrl: '../src/components/signUp/signUp.html'
        })
        .state('landingPage', {
            url: '/',
            templateUrl: 'landingPage.html'
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

