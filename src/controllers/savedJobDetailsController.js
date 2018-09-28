app.config(function($stateProvider){
    $stateProvider
        .state('savedJobs.details', {
            url: '/details',
            templateUrl: 'savedJobsDetails.html',
            controller: "savedJobsDetailsController",
            controllerAs: "$ctrl"
        })
});

app.controller("savedJobsDetailsController",
function($timeout, saveJobSvc){

this.saveJobSvc = saveJobSvc;

vm = this;

this.$onInit = function(){
    $timeout(function(){}, 1500)
            .then(function(){
                vm.loading = false;
            })
}

vm.loading = true;

});