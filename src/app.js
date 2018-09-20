var app = angular.module('jobFinder', 
    ['ngMaterial', 'ui.router','angularUtils.directives.dirPagination']);

app.constant('url', 'http://vm-1-rmartin9.paychex.com:8080/job');

app.run(function($rootScope){
    console.log("loading funciton running")
    $rootScope.$on('$stateChangeStart', function(){
        $rootScope.stateLoading = true;
    })
    $rootScope.$on('$stateChangeSuccess', function(){
        $rootScope.stateLoading = false;
    })
}) 








