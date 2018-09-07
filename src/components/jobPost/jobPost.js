function JobPostCtrl(mainSvc){
    var vm = this;

    mainSvc.getPosts().then(function(res){
        vm.posts = res.data;
    })
}

app.component('jobPost',{
    templateUrl: '../src/components/jobPost/jobPost.html',
    controller: JobPostCtrl,
    controllerAs: 'vm'
})