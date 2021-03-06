app.config(function ($stateProvider) {
    $stateProvider
        .state('jobSearchResults', {
            url: '/results?selected',
            templateUrl: 'src/views/jobSearchResults.html',
            params: {
                selected: {
                    dynamic: true
                }
            },
            controller: "jobSearchResultsController",
            controllerAs: "$ctrl",
            resolve: {
                searchResults: function ($q, $timeout, searchSvc, keywordFilterFilter, $stateParams, $state) {
                    return $q((resolve) => {
                            $timeout(() => {
                                resolve()
                            }, 500);
                        }).then(searchSvc.getJobs)
                        .then(jobs => {
                            const selectedJobs = keywordFilterFilter(jobs.data, $stateParams.selected);
                            if (Object.keys(selectedJobs).length === 0) {
                                alert("The keyword you selected: \n" + $stateParams.selected + " - doesn't match any jobs!" + "\nTry again!")
                                return $state.go('jobSearchPage');
                            } else if ($stateParams.selected === undefined) {
                                alert("You didn't select anything!")
                                return $state.go('jobSearchPage');
                            } else {
                                return $q.resolve();
                            }
                        }).catch((e) => {
                            alert("You didn't select anything!")
                            throw (e);
                        })
                }
            }
        })
})
app.controller("jobSearchResultsController",
    function ($scope, searchSvc, $stateParams, $timeout, saveJobSvc, $state) {

        vm = this;

        this.$onInit = function () {
            $timeout(function () {}, 1500)
                .then(searchSvc.getJobs)
                .then(function (res) {
                    vm.jobs = res.data
                    vm.loading = false;
                })
        }

        vm.loading = true;

        this.jobs = null;

        //passing selected checkboxes from jobSearchController.js
        $scope.selected = [];

        if ($stateParams.selected) {
            $scope.selected = $stateParams.selected;
        }
        if ($scope.selected && $scope.selected.length) {
            //put selected boxes into an array
            $scope.selectedOptions = $scope.selected.split(',');
        }

        this.removeFilterTerm = (filterTerm) => {
            var index = $scope.selectedOptions.indexOf(filterTerm);
            if (index !== -1) {
                $scope.selectedOptions.splice(index, 1)
            }
            $scope.selected = $scope.selectedOptions.join();
            //remove filterTerm from $stateParams
            $state.go("jobSearchResults", {
                selected: $scope.selected,
            })
        }

        //put job object into saveJobSvc, inject into savedJobsController and savedJob.html
        this.saveJob = (job) => {
            saveJobSvc.addSavedJobs(job);
        }

        //params for dir-pagination controls
        $scope.currentPage = 1;
        $scope.pageSize = 10;

        //table sort parameters
        $scope.orderByField = 'positionName';
        $scope.reverseSort = false;

    });