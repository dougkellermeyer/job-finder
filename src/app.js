var app = angular.module('jobFinder', 
    ['ngMaterial', 'ui.router','angularUtils.directives.dirPagination']);

app.run(function($rootScope){
    console.log("loading funciton running")
    $rootScope.$on('$stateChangeStart', function(){
        $rootScope.stateLoading = true;
    })
    $rootScope.$on('$stateChangeSuccess', function(){
        $rootScope.stateLoading = false;
    })
}); 








