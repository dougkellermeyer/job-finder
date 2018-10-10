describe('Job Finder Test Suite',() => {
    
    beforeEach(angular.mock.module('jobFinder'));

    describe('Testing Job Finder homeController ', () => {
        var scope, ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            scope = $rootscope.$new();
            ctrl = $controller('homeController', {$scope:scope});
        }));

        it('should initialize the quantity in the scope', () => {
            expect(scope.quantity).toBeDefined();
            expect(scope.quantity).toBe(5);
        });
    });
});