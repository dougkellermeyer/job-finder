describe('testing home controller',() => {
   
    it('should work', function(){
        expect(true).toBe(true);
    });

    beforeEach(angular.mock.module('jobFinder'));

    var $controller;
    
    beforeEach(angular.mock.inject((_$controller_) => {
        $controller = _$controller_;
    }));
    
    it('should return a numerical quantity value', () => {
        var $scope = {};
        var quantity = $scope.quantity;

        expect(quantity).toEqual(5);
        var controller = $controller('homeController', {
            $scope: $scope
        });

    });
});