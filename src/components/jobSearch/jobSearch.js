function JobSearch($scope){
    $scope.jobs = ['Software Develeper',
    'Software Manager',
    "QA Engineer",
    "UX Engineer",
    "Network Engineer",
    'VP of Software',
    'CEO'
    ]
}
 
 app.component('jobSearch',{
     templateUrl: '../src/components/jobSearch/jobSearch.html',
     controller: JobSearch,
     controllerAs: 'vm'
 })
 