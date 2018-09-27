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
            console.log(typeof saveJob);
            var index = savedJobs.indexOf(savedJob)
                console.log(savedJobs);
                savedJobs.splice(index,1)
                console.log("index is " + index);
        }
    }
});