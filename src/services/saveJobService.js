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
                savedJobs.splice(index,1)
        }
    }
});