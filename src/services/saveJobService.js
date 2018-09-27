app.service('saveJobSvc', function(){
    var savedJobs = [];
    return {
        getSavedJobs: () => {
            return savedJobs.slice(); 
        },
        addSavedJobs: (savedJob) => {
            savedJobs.push(savedJob);
        },
        removeSavedJobs: (savedJob) => {
            var index = savedJobs.indexOf(savedJob)
            console.log(index);
            if (index !==-1){
                savedJobs.splice(index,1)
            }
        }
    }
});