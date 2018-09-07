function SignIn(){
    console.log("signIn works!")
 }
 
 app.component('signIn',{
     templateUrl: '../src/components/signIn/signIn.html',
     controller: SignIn,
     controllerAs: 'vm'
 })
 