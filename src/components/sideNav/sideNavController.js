app.controller("SideNavController", function(){
//inject the saveJobSvc so that we can display the jobs in the dropdown
//as they populate on the savedJobs.html page
})
 
 app.component('jobSidenav',{
     templateUrl: '../components/sideNav/sideNav.html',
     controller: "SideNavController",
     controllerAs: '$ctrl'
 })
 