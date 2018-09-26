app.service('saveJobSvc', function(){
    var savedJobs = [];
    return {
        getSavedJobs: () => {
            return savedJobs.slice(); 
        },
        addSavedJobs: (savedJob) => {
            savedJobs.push(savedJob);
        }
    }
});