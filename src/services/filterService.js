app.filter('keywordFilter', function(){
    return function(allJobs, checked, $timeout){
        //need to split checked into an array
    
        var output = [];

        if(checked.length === 0  || typeof checked === undefined){
            return allJobs;
        }
        else {
            var checkedArray = checked.split(",");
            angular.forEach(allJobs,function(value){                
                if(checkedArray.includes(value.positionName)){
                    output.push(value);
                }
            })
            return output;
        }
    }
    
});