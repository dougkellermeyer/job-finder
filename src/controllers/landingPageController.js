app.config(function($stateProvider, $urlRouterProvider, $locationProvider ){
    $stateProvider
        .state('landingPage', {
            url: '/',
            templateUrl: 'src/views/landingPage.html',
            controller: 'landingPageController',
            controllerAs: '$ctrl'
        })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});

app.controller('landingPageController', function(){

});
