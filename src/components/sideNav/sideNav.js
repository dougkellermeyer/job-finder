function SideNav(){
    console.log("sideNav works!")
 }
 
 app.component('jobSidenav',{
     templateUrl: '../src/components/sideNav/sideNav.html',
     controller: SideNav,
     controllerAs: 'vm'
 })
 