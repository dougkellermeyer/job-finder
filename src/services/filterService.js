app.filter('keywordFilter', function(){
    return function(allJobs, checked){
        //need to split checked into an array
        var tableArray = [];

        if(checked.length === 0  || typeof checked === undefined){
            return allJobs;
        }
        else {
            var checkedArray = checked.split(",");
            angular.forEach(allJobs,function(value){                
                if(checkedArray.includes(value.positionName)){
                    tableArray.push(value);
                }
            })
            return tableArray;
        }
    }
    
});