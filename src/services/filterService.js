app.filter('keywordFilter', function(){
    return function(allJobs, selected){
        //need to split selected into an array
        var jobMatchArray = [];
        if(selected.length === 0  || typeof selected === undefined){
            return allJobs;
        }
        else {
            var selectedArray = Array.isArray(selected)?selected:selected.split(",");
            angular.forEach(allJobs,function(value){                
                if(selectedArray.includes(value.positionName)){
                    jobMatchArray.push(value);
                }
            })
            return jobMatchArray;
        }
    }
    
});