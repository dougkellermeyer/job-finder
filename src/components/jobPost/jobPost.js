function JobPostCtrl(){
    var vm = this;

    mainSvc.getPosts().then(function(res){
        vm.posts = res.data;
    })
}

app.component('jobPost',{
    templateUrl: './jobPost/jobPost.html',
    controller: JobPostCtrl,
    controllerAs: 'vm'
})