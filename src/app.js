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
            templateUrl: 'home.html',
            controller: "homeController",
            controllerAs: "$ctrl"
        })
})

app.service('mainSvc', function($http){
    this.getPosts = function(){
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    };
});

app.service('searchSvc', function($http){
    this.getJobs = function(){
        return $http.get('http://127.0.0.1:8080/src/data/jobs.json')
    };
});

