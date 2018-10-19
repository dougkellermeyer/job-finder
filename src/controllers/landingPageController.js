app.config(function($stateProvider, $urlRouterProvider, $locationProvider ){
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('landingPage', {
            url: '/',
            templateUrl: 'src/views/landingPage.html',
            controller: 'landingPageController',
            controllerAs: '$ctrl'
        })
    $urlRouterProvider.otherwise('/');
});

app.controller('landingPageController', function(){

});
