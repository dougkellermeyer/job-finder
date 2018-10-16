app.config(function($stateProvider){
    $stateProvider
        .state('signUp', {
            url: '/signup',
            templateUrl: 'src/views/signUp.html',
            controller: 'signUpController',
            controllerAs: '$ctrl'
        })
});

app.controller('signUpController', function(){

});