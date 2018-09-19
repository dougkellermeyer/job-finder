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
            controllerAs: "$ctrl",
            resolve: {
                loadingSearchResult: function($http){
                    return $http.get('http://www.fakeresponse.com/api/?sleep=2')
                    .then(function(res){
                        return res.data;
                    })
                },
                searchResult: function($http){
                    return $http.get('http://vm-1-rmartin9.paychex.com:8080/job')
                            .then(function(res){
                                return res.data;
                            })
                }
            }
        })
        .state('jobDetailsPage', {
            url: '/details',
            templateUrl: 'jobDetailsPage.html',
            controller: "jobDetailsPageController",
            controllerAs: "$ctrl"
        })
});

//http service to job API
app.service('searchSvc', function($http){
    this.getJobs = function(){
        return $http.get('http://vm-1-rmartin9.paychex.com:8080/job')
    };
});





