app.controller("jobSearchPageController", function($scope){
    console.log("job search ran!")

    var vm = this;

    vm.userState = '';
    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY')
        .split(' ').map(function (state) { return { abbrev: state }; });
    
    $scope.items = ["Coding","Leading teams","HTML","JavaScript","CSS","Databases"];
    $scope.selected = [];

    function showSelected() {
        console.log($scope.selected);
    }

    $scope.toggle = function (item, list) {
        var userSelected = list.indexOf(item);
        if (userSelected > -1) {
            list.splice(userSelected, 1);
        }
        else {
            list.push(item);
        }
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
});