var app = angular.module('jobFinder', 
    ['ngMaterial', 'ui.router','angularUtils.directives.dirPagination']);

app.run(function($rootScope){
    console.log("loading function running")
    $rootScope.$on('spinnerEvent', function(){
        console.log("spinner event fired");
        $rootScope.stateLoading = true;
    })
    $rootScope.$on('spinnerEvent', function(){
        console.log("spinner event done");
        $rootScope.stateLoading = false;
    })
});








