var app = angular.module('jobFinder', ['ngMaterial', 'ui.router','angularUtils.directives.dirPagination']);

app.config(function($stateProvider){
    $stateProvider
        .state('landingPage', {
            url: '/',
            templateUrl: 'landingPage.html'
        })
        .state('signUp', {
            url: '/signup',
            templateUrl: 'signUp.html',
            controller: "signUpController",
            controllerAs: "$ctrl"
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
            url: '/results/:selected',
            templateUrl: 'jobSearchResults.html',
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl"
        })
        .state('jobDetailsPage', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
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

//filter service with async req so we can filer results based on boxes checked
app.service('filterSelectedSvc', function($http){
    return {
        async: function(){
            return $http.get('http://127.0.0.1:8080/src/data/jobs.json');
        }
    }
});


