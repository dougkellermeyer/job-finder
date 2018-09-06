var app = angular.module('jobFinder', ['ngMaterial']);

app.controller('AppCtrl', function($scope){
    $scope.test = 'Angular works';

    $scope.jobs = ['Software Develeper',
    'Software Manager',
    "QA Engineer",
    "UX Engineer",
    "Network Engineer",
    'VP of Software',
    'CEO'
    ]
    
    function testClick(){
        alert('Job Saved!');
    }
    $scope.testClick = testClick;
});
