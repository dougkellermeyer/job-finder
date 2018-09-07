var app = angular.module('jobFinder', ['ngMaterial']);

app.controller('AppCtrl', function($scope, mainSvc){
    $scope.test = 'Angular works';

    var vm = this;
    mainSvc.getPosts().then(function(res){
        vm.posts = res.data;
    })

    $scope.jobs = ['Software Develeper',
    'Software Manager',
    "QA Engineer",
    "UX Engineer",
    "Network Engineer",
    'VP of Software',
    'CEO'
    ]

    function saveJob(){
        alert('Job Saved!');
    }
    $scope.saveJob = saveJob;
});

app.service('mainSvc', function($http){
    this.getPosts = function(){
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    };
});

