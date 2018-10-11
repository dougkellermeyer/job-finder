describe('homeController',() => {
    // beforeAll(() => {
    //     console.log('Before All:', angular.mock);
    // });
    it('should work', function(){
        expect(true).toBe(true);
    });
    beforeEach(function(done) {
        angular.mock.module('jobFinder')
        // angular.mock.inject(function(_$controller_) {
        //     $controller = _$controller_;
        //     done()
        // })
        angular.mock.inject(function($timeout){
            done();
        });
    });

    // var $controller;

    // describe($scope.quantity, function(){
    //     it('sets the number of jobs to be displayed on the homePage', function(){
    //         var $scope = {};
    //         var controller = $controller('homeController', {$scope:$scope});
    //         $scope.quantity; 
    //         expect($scope.quantity).toEqual(5);
    //     });
    // });
});