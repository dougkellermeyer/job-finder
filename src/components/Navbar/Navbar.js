function Navbar(){
   console.log("Navbar works!")
}

app.component('jobNavbar',{
    templateUrl: '../src/components/Navbar/Navbar.html',
    controller: Navbar,
    controllerAs: 'vm'
})

