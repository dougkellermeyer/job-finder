app.config(function($stateProvider){
    $stateProvider
        .state('landingPage', {
            url: '/',
            templateUrl: 'src/views/landingPage.html',
            controller: 'landingPageController',
            controllerAs: '$ctrl'
        })
});

app.controller('landingPageController', function(){

});
