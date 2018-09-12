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
        .state('jobSearchPage', {
            url: '/search',
            templateUrl: 'jobSearchPage.html',
            controller: "jobSearchPageController",
            controllerAs: "$ctrl"
        })
        .state('jobSearchResults', {
            url: '/results',
            templateUrl: 'jobSearchResults.html',
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl"
        })
})

//test service
app.service('mainSvc', function($http){
    this.getPosts = function(){
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    };
});

//same job service to display 5 jobs on home page
app.service('searchSvc', function($http){
    this.getJobs = function(){
        return $http.get('http://127.0.0.1:8080/src/data/jobs.json')
    };
});

