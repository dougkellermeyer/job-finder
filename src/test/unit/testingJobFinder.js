describe('Job Finder Test Suite',() => {
    describe('Testing Job Finder app.js Controller ', () => {
        it('should initialize the title in the scope', () => {
            module('jobFinder');

            var scope = {};
            var ctrl;

            inject(($controller) => {
                ctrl = $controller('landingPageController', {$scope:scope});
            });

            expect(scope.quantity).toBeDefined();
            expect(scope.quantity).toBe(5);
        });
    });
});