app.config(function($stateProvider){
    $stateProvider
        .state('signUp', {
            url: '/signup',
            templateUrl: 'signUp.html',
            controller: "signUpController",
            controllerAs: "$ctrl"
        })
});

app.controller("signUpController", function(){

});