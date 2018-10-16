app.controller('SideNavController', function(saveJobSvc){
//inject the saveJobSvc so that we can display the jobs in the dropdown
//as they populate on the savedJobs.html page

this.saveJobSvc = saveJobSvc;
})
 
 app.component('jobSidenav',{
     templateUrl: 'src/components/sideNav/sideNav.html',
     controller: 'SideNavController',
     controllerAs: '$ctrl'
 })
 